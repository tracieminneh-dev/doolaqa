// An agent's QA report for one month, opened from the personal link in their
// Slack DM (no sign-in needed; the signed token says which report it is).
// POST raises a dispute on one of that agent's tickets.
import { readReportToken } from "../lib/reportlink.js";
import { getCycle } from "../lib/cycles.js";
import { getSettings, findAgent } from "../lib/settings.js";
import { agentDisputes, addDispute } from "../lib/disputes.js";
import { getApprovals } from "../lib/approvals.js";
import { json, route, readJsonBody, HttpError } from "../lib/http.js";

function who(token) {
  const r = readReportToken(token);
  if (!r) throw new HttpError(403, "This report link isn't valid. Ask your team lead to resend it.");
  return r;
}

export const GET = route(async (request) => {
  const { month, agent } = who(new URL(request.url).searchParams.get("t"));
  const cycle = await getCycle(month);
  if (!cycle) throw new HttpError(404, "This month's QA isn't available any more.");
  const settings = await getSettings();
  const team = (await findAgent(agent))?.team || cycle.tickets.find((t) => t.agent === agent)?.pipeline || "";
  const tickets = cycle.tickets.filter((t) => t.agent === agent).sort((a, b) => (a.date < b.date ? -1 : 1)).map((t) => ({
    id: t.id, date: t.date, subject: t.subject, s: t.s, category: t.category, keep: t.keep || [], fix: t.fix || [],
    notes: t.notes || null, overridden: Boolean(t.overridden), reviewed: Boolean(t.reviewed),
    review: t.review ? { comment: t.review.comment || "" } : null,
  }));
  const approval = (await getApprovals(month))[agent] || null;
  return json({
    month, label: cycle.label, window: cycle.window, agent, team, weights: settings.weights,
    approvedAt: approval?.approvedAt || null, tickets,
    disputes: (await agentDisputes(month, agent)).map(({ id, ticketId, text, at, status, response, resolvedAt }) => ({ id, ticketId, text, at, status, response, resolvedAt })),
  });
});

export const POST = route(async (request) => {
  const { t, ticketId, text } = await readJsonBody(request);
  const { month, agent } = who(t);
  const d = await addDispute({ month, agent, ticketId, text });
  return json({ dispute: { id: d.id, ticketId: d.ticketId, text: d.text, at: d.at, status: d.status } });
});
