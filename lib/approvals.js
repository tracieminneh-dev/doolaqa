// Monthly sign-off of agents' QA results by team leads, in two steps:
// 1. Approve: a lead confirms an agent's results for the month.
// 2. Send report: builds the "QA analysis - <month>" PDF and sends it to the
//    agent's Slack DM. Only approved agents can be sent a report.

import { getJson, setJson, del } from "./store.js";
import { getCycle } from "./cycles.js";
import { ROSTER, findAgent, TICKETS_PER_AGENT } from "./roster.js";
import { getOwner } from "./hubspot.js";
import { buildAgentReport } from "./report.js";
import { sendReportDm } from "./slack.js";
import { config } from "./env.js";
import { HttpError } from "./http.js";

const key = (month) => `qa:approvals:${month}`;

// Records made before the two-step flow kept the Slack result under "slack".
function normalise(record) {
  if (record && !record.report && record.slack) return { ...record, report: record.slack };
  return record;
}

export async function getApprovals(month) {
  const all = (await getJson(key(month))) || {};
  for (const name of Object.keys(all)) all[name] = normalise(all[name]);
  return all;
}

export async function clearApprovals(month) {
  await del(key(month));
}

export async function agentReport(month, agentName) {
  const cycle = await getCycle(month);
  if (!cycle) throw new HttpError(404, "That month has not been published yet.");
  const agent = findAgent(agentName);
  if (!agent) throw new HttpError(400, "That agent is not on the QA roster.");
  const count = cycle.tickets.filter((t) => t.agent === agent.name).length;
  if (!count) throw new HttpError(404, `${agent.name} has no scored tickets in ${cycle.label}.`);
  const report = await buildAgentReport({ cycle, agentName: agent.name, team: agent.team });
  return { cycle, agent, count, report };
}

async function withLock(month, name, fn) {
  const lock = `qa:approve:${month}:${name}`;
  if (!(await setJson(lock, 1, { ex: 90, nx: true }))) throw new HttpError(409, `${name} is already being processed.`);
  try {
    return await fn();
  } finally {
    await del(lock);
  }
}

async function eligible(month, agentName) {
  const cycle = await getCycle(month);
  if (!cycle) throw new HttpError(404, "That month has not been published yet.");
  const agent = findAgent(agentName);
  if (!agent) throw new HttpError(400, "That agent is not on the QA roster.");
  const tickets = cycle.tickets.filter((t) => t.agent === agent.name);
  if (tickets.length < TICKETS_PER_AGENT) {
    throw new HttpError(409, `${agent.name} has ${tickets.length} of ${TICKETS_PER_AGENT} tickets in ${cycle.label}. Only agents at a full 10 can be approved.`);
  }
  const pct = tickets.reduce((n, t) => n + (t.s.reduce((a, b) => a + b, 0) / 5) * 20, 0) / tickets.length;
  return { cycle, agent, pct };
}

export async function approveAgent({ month, agentName, admin }) {
  return withLock(month, agentName, async () => {
    const { pct } = await eligible(month, agentName);
    const approvals = await getApprovals(month);
    if (approvals[agentName]) return approvals[agentName];
    const band = pct >= 90 ? "A" : pct >= 70 ? "B" : pct >= 60 ? "C" : "D";
    approvals[agentName] = {
      approvedAt: new Date().toISOString(),
      approvedBy: admin.email,
      percent: Math.round(pct * 10) / 10,
      band,
      report: { status: "not_sent" },
    };
    await setJson(key(month), approvals);
    return approvals[agentName];
  });
}

// Undo an approval, only while the report has not been sent.
export async function unapproveAgent({ month, agentName }) {
  return withLock(month, agentName, async () => {
    const approvals = await getApprovals(month);
    const rec = approvals[agentName];
    if (!rec) return null;
    if (rec.report?.status === "sent") throw new HttpError(409, "The report has already been sent, so this approval can't be undone.");
    delete approvals[agentName];
    await setJson(key(month), approvals);
    return null;
  });
}

export async function sendReport({ month, agentName, admin, resend = false }) {
  return withLock(month, agentName, async () => {
    const approvals = await getApprovals(month);
    const rec = approvals[agentName];
    if (!rec) throw new HttpError(409, `Approve ${agentName}'s QA for this month before sending the report.`);
    if (rec.report?.status === "sent" && !resend) return rec;
    const { cycle, agent, report } = await agentReport(month, agentName);
    try {
      const email = config.slackUserMap()[agent.name] ? null : (await getOwner(agent.ownerId)).email;
      const sent = await sendReportDm({
        agentName: agent.name,
        email,
        filename: report.filename,
        title: report.title,
        pdfBytes: report.bytes,
        message: `Hi ${agent.name.split(" ")[0]}, your ${cycle.label} QA has been approved. Your QA analysis is attached, with your scores by dimension and coaching notes for each ticket.`,
      });
      rec.report = { status: "sent", at: new Date().toISOString(), by: admin.email, channel: sent.channel, fileId: sent.fileId };
    } catch (err) {
      rec.report = { status: "failed", at: new Date().toISOString(), by: admin.email, error: String(err.message || err).slice(0, 300) };
    }
    approvals[agentName] = rec;
    await setJson(key(month), approvals);
    return rec;
  });
}

// Approve every agent at a full 10 who is not approved yet.
export async function approveAll({ month, admin }) {
  const cycle = await getCycle(month);
  if (!cycle) throw new HttpError(404, "That month has not been published yet.");
  const done = [];
  for (const a of ROSTER) {
    const n = cycle.tickets.filter((t) => t.agent === a.name).length;
    if (n < TICKETS_PER_AGENT) continue;
    await approveAgent({ month, agentName: a.name, admin });
    done.push(a.name);
  }
  return done;
}

// Send the report to every approved agent who has not received it yet.
export async function sendAll({ month, admin }) {
  const approvals = await getApprovals(month);
  const results = {};
  for (const [name, rec] of Object.entries(approvals)) {
    if (rec.report?.status === "sent") continue;
    results[name] = (await sendReport({ month, agentName: name, admin })).report.status;
  }
  return results;
}
