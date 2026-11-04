// Team lead sign-off for a month: approve agents' QA results, then send each
// approved agent their QA analysis PDF in Slack.
import { requireAdmin } from "../../lib/auth.js";
import { getApprovals, approveAgent, unapproveAgent, sendReport, approveAll, sendAll } from "../../lib/approvals.js";
import { isMonth } from "../../lib/cycles.js";
import { json, route, readJsonBody, HttpError } from "../../lib/http.js";

export const config = { maxDuration: 300 };

export const GET = route(async (request) => {
  requireAdmin(request);
  const month = new URL(request.url).searchParams.get("month");
  if (!isMonth(month)) throw new HttpError(400, "Pick a month.");
  return json({ month, approvals: await getApprovals(month) });
});

export const POST = route(async (request) => {
  const admin = requireAdmin(request);
  const { month, agent, action = "approve", resend } = await readJsonBody(request);
  if (!isMonth(month)) throw new HttpError(400, "Pick a month.");
  let result;
  if (action === "approve") result = await approveAgent({ month, agentName: agent, admin });
  else if (action === "unapprove") result = await unapproveAgent({ month, agentName: agent });
  else if (action === "send") result = await sendReport({ month, agentName: agent, admin, resend: Boolean(resend) });
  else if (action === "approve_all") result = await approveAll({ month, admin });
  else if (action === "send_all") result = await sendAll({ month, admin });
  else throw new HttpError(400, "Unknown action.");
  return json({ month, agent: agent || null, result, approvals: await getApprovals(month) });
});
