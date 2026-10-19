// The monthly QA run behind the admin page's "Ping new QA cycle" button.
//
// A run samples up to 10 closed tickets per roster agent for one month, reads
// each full HubSpot conversation, keeps only tickets the agent personally
// answered, and scores them with Claude. Work happens in small steps (one
// ticket per agent per call) so each request stays well inside Vercel's time
// limit; the admin page keeps calling "step" and shows the percentage. The
// month is published to the dashboard only when every agent is finished.

import { ROSTER, TEAMS, TICKETS_PER_AGENT, agentKey } from "./roster.js";
import { getJson, setJson, mgetJson, del } from "./store.js";
import { getOwner, searchClosedTickets, getTicketConversation } from "./hubspot.js";
import { scoreTicket, MODEL } from "./scorer.js";
import { monthLabel, monthWindow, isMonth, publishCycle } from "./cycles.js";
import { clearApprovals } from "./approvals.js";
import { setupStatus } from "./env.js";
import { HttpError } from "./http.js";

const RUN_KEY = "qa:run";
const stateKey = (runId, key) => `qa:run:${runId}:${key}`;
const lockKey = (runId, key) => `qa:run:${runId}:${key}:lock`;
const KEEP_FOR = 60 * 60 * 24 * 45; // run details are kept for 45 days

const NOISE_SUBJECT = /^(automatic reply|auto-?reply|out of office|undeliverable|delivery status notification)/i;
const isNoise = (t) => /ai-?cofounder/i.test(t.category) || NOISE_SUBJECT.test(t.subject.trim());

// Spread picks across the month: round-robin over the days tickets closed.
function spreadByDay(tickets) {
  const days = new Map();
  for (const t of tickets) {
    const d = (t.closedAt || "").slice(0, 10);
    if (!days.has(d)) days.set(d, []);
    days.get(d).push(t);
  }
  const queues = [...days.keys()].sort().map((d) => days.get(d));
  const out = [];
  while (queues.some((q) => q.length)) for (const q of queues) if (q.length) out.push(q.shift());
  return out;
}

const addSkip = (st, ticket, reason) => {
  st.skipped.push({ id: ticket.id, reason: reason.slice(0, 160) });
};

export async function startRun({ month, startedBy }) {
  if (!isMonth(month)) throw new HttpError(400, "Pick a month to run.");
  const now = new Date();
  const thisMonth = now.toISOString().slice(0, 7);
  if (month > thisMonth) throw new HttpError(400, "That month has not started yet.");
  const setup = setupStatus();
  if (!setup.hubspot || !setup.claude) {
    throw new HttpError(503, "Connect HubSpot and Claude first: add HUBSPOT_ACCESS_TOKEN and ANTHROPIC_API_KEY in Vercel, then redeploy.");
  }
  const current = await getJson(RUN_KEY);
  if (current && current.status === "running") {
    throw new HttpError(409, `A run for ${current.label} is already in progress.`);
  }
  const window = monthWindow(month, now);
  const run = {
    runId: Date.now().toString(36),
    month,
    label: monthLabel(month),
    window,
    status: "running",
    startedAt: now.toISOString(),
    startedBy,
    target: TICKETS_PER_AGENT,
    agents: ROSTER.map((a) => ({ key: agentKey(a.name), name: a.name, team: a.team })),
  };
  for (const a of run.agents) {
    await setJson(stateKey(run.runId, a.key), {
      phase: "pending", candidates: [], cursor: 0, accepted: [], skipped: [],
      noise: 0, errors: 0, ticketErrors: 0, lastError: "", failed: false, done: false,
    }, { ex: KEEP_FOR });
  }
  await setJson(RUN_KEY, run);
  return runStatus();
}

export async function runStatus() {
  const run = await getJson(RUN_KEY);
  if (!run) return { run: null };
  const states = await mgetJson(run.agents.map((a) => stateKey(run.runId, a.key)));
  const agents = run.agents.map((a, i) => {
    const st = states[i] || {};
    return {
      key: a.key,
      name: a.name,
      team: a.team,
      phase: st.phase || "pending",
      scored: (st.accepted || []).length,
      candidates: (st.candidates || []).length,
      checked: st.cursor || 0,
      skipped: (st.skipped || []).length,
      done: Boolean(st.done),
      failed: Boolean(st.failed),
      lastError: st.lastError || "",
    };
  });
  const units = agents.reduce((n, a) => n + (a.done ? run.target : Math.min(a.scored, run.target)), 0);
  const percent = agents.length ? Math.floor((100 * units) / (agents.length * run.target)) : 0;
  return {
    run: {
      runId: run.runId, month: run.month, label: run.label, window: run.window, status: run.status,
      startedAt: run.startedAt, finishedAt: run.finishedAt || null, message: run.message || "",
      target: run.target, percent, agents,
    },
  };
}

export async function cancelRun() {
  const run = await getJson(RUN_KEY);
  if (run && run.status === "running") {
    run.status = "cancelled";
    run.finishedAt = new Date().toISOString();
    run.message = "Cancelled. Nothing was published for this month.";
    await setJson(RUN_KEY, run);
  }
  return runStatus();
}

async function advance(run, agent, st) {
  try {
    if (st.phase === "pending") {
      const owner = await getOwner(agent.ownerId);
      if (!owner.userId) {
        st.failed = true;
        st.done = true;
        st.lastError = "This HubSpot owner has no linked user, so replies cannot be matched to the agent.";
        return;
      }
      st.userId = owner.userId;
      const raw = await searchClosedTickets({
        pipelineId: TEAMS[agent.team].pipelineId,
        ownerId: agent.ownerId,
        fromMs: run.window.fromMs,
        toMs: run.window.toMs,
      });
      const usable = raw.filter((t) => !isNoise(t));
      st.noise = raw.length - usable.length;
      st.candidates = spreadByDay(usable);
      st.phase = "scoring";
      st.errors = 0;
      if (!st.candidates.length) st.done = true;
      return;
    }

    const ticket = st.candidates[st.cursor];
    if (!ticket) {
      st.done = true;
      return;
    }
    const { messages } = await getTicketConversation(ticket.id);
    const fromAgent = messages.filter((m) => m.actorId === `A-${st.userId}`);
    if (!messages.length) addSkip(st, ticket, "No conversation thread");
    else if (!messages.some((m) => m.direction === "INCOMING")) addSkip(st, ticket, "No customer message");
    else if (!fromAgent.length) addSkip(st, ticket, "No reply sent by this agent");
    else {
      const r = await scoreTicket({ agent: { ...agent, userId: st.userId }, ticket, messages });
      if (!r.eligible) addSkip(st, ticket, r.reason || "Not a scorable customer conversation");
      else {
        st.accepted.push({
          id: ticket.id, agent: agent.name, pipeline: agent.team,
          date: (ticket.closedAt || "").slice(0, 10), ranked: false,
          subject: r.subject, s: r.s, category: r.category, keep: r.keep, fix: r.fix,
        });
      }
    }
    st.cursor += 1;
    st.ticketErrors = 0;
    if (st.accepted.length >= run.target || st.cursor >= st.candidates.length) st.done = true;
  } catch (err) {
    st.lastError = String(err.message || err).slice(0, 300);
    if (st.phase === "pending") {
      st.errors += 1;
      if (st.errors >= 3) { st.failed = true; st.done = true; }
    } else {
      st.ticketErrors += 1;
      if (st.ticketErrors >= 3) {
        addSkip(st, st.candidates[st.cursor], "Could not be read or scored after 3 attempts");
        st.cursor += 1;
        st.ticketErrors = 0;
        if (st.cursor >= st.candidates.length) st.done = true;
      }
    }
  }
}

export async function stepRun({ runId, agent: key }) {
  const run = await getJson(RUN_KEY);
  if (!run || run.runId !== runId) throw new HttpError(409, "That run is no longer active. Refresh the page.");
  if (run.status !== "running") return runStatus();
  const agent = ROSTER.find((a) => agentKey(a.name) === key);
  if (!agent) throw new HttpError(400, "Unknown agent.");
  const locked = await setJson(lockKey(runId, key), 1, { ex: 290, nx: true });
  if (!locked) return { busy: true, ...(await runStatus()) };
  try {
    const st = await getJson(stateKey(runId, key));
    if (st && !st.done) {
      await advance(run, agent, st);
      await setJson(stateKey(runId, key), st, { ex: KEEP_FOR });
    }
  } finally {
    await del(lockKey(runId, key));
  }
  await maybeFinalize(runId);
  return runStatus();
}

// Publish the month once every agent is done. Guarded by a lock so two
// browser tabs cannot publish twice.
async function maybeFinalize(runId) {
  const run = await getJson(RUN_KEY);
  if (!run || run.runId !== runId || run.status !== "running") return;
  const states = await mgetJson(run.agents.map((a) => stateKey(runId, a.key)));
  if (!states.every((s) => s && s.done)) return;
  if (!(await setJson(`qa:run:${runId}:finalize`, 1, { ex: 120, nx: true }))) return;

  const failed = run.agents.filter((a, i) => states[i].failed);
  const tickets = [];
  run.agents.forEach((a, i) => {
    const accepted = states[i].accepted.slice(0, run.target);
    const ranked = accepted.length >= run.target;
    for (const t of accepted) tickets.push({ ...t, ranked });
  });

  run.finishedAt = new Date().toISOString();
  if (failed.length) {
    run.status = "failed";
    run.message = `Not published. HubSpot could not be read for ${failed.map((a) => a.name).join(", ")}: ${states[run.agents.indexOf(failed[0])].lastError}`;
  } else if (!tickets.length) {
    run.status = "failed";
    run.message = "Not published. No scorable tickets were found for this month.";
  } else {
    await publishCycle({
      month: run.month,
      label: run.label,
      window: { from: run.window.from, to: run.window.to },
      publishedAt: run.finishedAt,
      source: "automated",
      model: MODEL,
      tickets,
    });
    await clearApprovals(run.month);
    run.status = "published";
    const full = run.agents.filter((a, i) => states[i].accepted.length >= run.target).length;
    run.message = `${run.label} is published: ${tickets.length} tickets scored, ${full} of ${run.agents.length} agents at a full 10.`;
  }
  await setJson(RUN_KEY, run);
}
