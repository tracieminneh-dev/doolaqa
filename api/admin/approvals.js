// Approve an agent's QA for a month (sends the PDF to their Slack DM), and
// list the approval status for a month.
import { requireAdmin } from "../../lib/auth.js";
import { getApprovals, approveAgent } from "../../lib/approvals.js";
import { isMonth } from "../../lib/cycles.js";
import { json, route, readJsonBody, HttpError } from "../../lib/http.js";

export const config = { maxDuration: 120 };

export const GET = route(async (request) => {
  requireAdmin(request);
  const month = new URL(request.url).searchParams.get("month");
  if (!isMonth(month)) throw new HttpError(400, "Pick a month.");
  return json({ month, approvals: await getApprovals(month) });
});

export const POST = route(async (request) => {
  const admin = requireAdmin(request);
  const { month, agent, resend } = await readJsonBody(request);
  if (!isMonth(month)) throw new HttpError(400, "Pick a month.");
  const record = await approveAgent({ month, agentName: agent, admin, resend: Boolean(resend) });
  return json({ month, agent, approval: record });
});
