// Team lead ticket review: list an agent's tickets for a month, confirm or
// override the AI's scores, or reset a ticket back to the AI's scores.
import { requireAdmin } from "../../lib/auth.js";
import { ticketsForReview, saveReview } from "../../lib/review.js";
import { isMonth } from "../../lib/cycles.js";
import { listDisputes, resolveDispute } from "../../lib/disputes.js";
import { json, route, readJsonBody, HttpError } from "../../lib/http.js";

export const GET = route(async (request) => {
  requireAdmin(request);
  const p = new URL(request.url).searchParams;
  const month = p.get("month");
  if (!isMonth(month)) throw new HttpError(400, "Pick a month.");
  if (p.get("view") === "disputes") return json({ month, disputes: await listDisputes(month) });
  return json({ month, tickets: await ticketsForReview(month, p.get("agent")) });
});

export const POST = route(async (request) => {
  const admin = requireAdmin(request);
  const { month, ticketId, s, comment, action, disputeId, response } = await readJsonBody(request);
  if (!isMonth(month)) throw new HttpError(400, "Pick a month.");
  if (action === "resolve_dispute" || action === "reopen_dispute") {
    return json({ month, dispute: await resolveDispute({ month, id: disputeId, response, admin, reopen: action === "reopen_dispute" }) });
  }
  const ticket = await saveReview({ month, ticketId, s, comment, admin, reset: action === "reset" });
  return json({ month, ticket });
});
