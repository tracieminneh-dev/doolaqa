// Admin approval of an agent's QA for a month. Approving builds the
// "QA analysis - <month>" PDF and sends it to the agent's Slack DM.

import { getJson, setJson, del } from "./store.js";
import { getCycle } from "./cycles.js";
import { findAgent, TICKETS_PER_AGENT } from "./roster.js";
import { getOwner } from "./hubspot.js";
import { buildAgentReport } from "./report.js";
import { sendReportDm } from "./slack.js";
import { config } from "./env.js";
import { HttpError } from "./http.js";

const key = (month) => `qa:approvals:${month}`;

export async function getApprovals(month) {
  return (await getJson(key(month))) || {};
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

export async function approveAgent({ month, agentName, admin, resend = false }) {
  const lock = `qa:approve:${month}:${agentName}`;
  if (!(await setJson(lock, 1, { ex: 90, nx: true }))) throw new HttpError(409, "This approval is already being processed.");
  try {
    const approvals = await getApprovals(month);
    const existing = approvals[agentName];
    if (existing?.slack?.status === "sent" && !resend) return existing;

    const { cycle, agent, count, report } = await agentReport(month, agentName);
    if (count < TICKETS_PER_AGENT) {
      throw new HttpError(409, `${agent.name} has ${count} of ${TICKETS_PER_AGENT} tickets in ${cycle.label}. Only agents at a full 10 can be approved.`);
    }

    const record = {
      approvedAt: existing?.approvedAt || new Date().toISOString(),
      approvedBy: existing?.approvedBy || admin.email,
      percent: Math.round(report.summary.percent * 10) / 10,
      band: report.summary.band,
      slack: { status: "pending" },
    };
    try {
      const email = config.slackUserMap()[agent.name] ? null : (await getOwner(agent.ownerId)).email;
      const first = agent.name.split(" ")[0];
      const sent = await sendReportDm({
        agentName: agent.name,
        email,
        filename: report.filename,
        title: report.title,
        pdfBytes: report.bytes,
        message: `Hi ${first}, your ${cycle.label} QA has been approved. Your QA analysis is attached, with your scores by dimension and coaching notes for each ticket.`,
      });
      record.slack = { status: "sent", at: new Date().toISOString(), channel: sent.channel, fileId: sent.fileId };
    } catch (err) {
      record.slack = { status: "failed", at: new Date().toISOString(), error: String(err.message || err).slice(0, 300) };
    }
    approvals[agentName] = record;
    await setJson(key(month), approvals);
    return record;
  } finally {
    await del(lock);
  }
}
