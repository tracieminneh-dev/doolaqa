// Team lead review of individual tickets: confirm the AI's scores, or
// override any dimension score with a comment. Overrides flow through to the
// dashboard, approvals and PDF reports; the AI's original scores are kept.

import { getJson, setJson } from "./store.js";
import { getCycleRaw, reviewKey, applyReviews } from "./cycles.js";
import { getApprovals } from "./approvals.js";
import { HttpError } from "./http.js";

async function load(month) {
  const cycle = await getCycleRaw(month);
  if (!cycle) throw new HttpError(404, "That month has not been published yet.");
  return { cycle, reviews: (await getJson(reviewKey(month))) || {} };
}

export async function ticketsForReview(month, agentName) {
  const { cycle, reviews } = await load(month);
  const applied = applyReviews(cycle, reviews);
  return applied.tickets.filter((t) => !agentName || t.agent === agentName);
}

export async function saveReview({ month, ticketId, s, comment = "", admin, reset = false }) {
  const { cycle, reviews } = await load(month);
  const ticket = cycle.tickets.find((t) => t.id === String(ticketId));
  if (!ticket) throw new HttpError(404, "That ticket is not in this month.");
  const approvals = await getApprovals(month);
  if (approvals[ticket.agent]?.report?.status === "sent") {
    throw new HttpError(409, `${ticket.agent}'s report for this month has already been sent, so their tickets are locked.`);
  }
  if (reset) {
    delete reviews[ticket.id];
  } else {
    let scores = null;
    if (s) {
      if (!Array.isArray(s) || s.length !== 5 || s.some((v) => !Number.isInteger(v) || v < 1 || v > 5)) {
        throw new HttpError(400, "Each of the five scores must be a whole number from 1 to 5.");
      }
      if (s.some((v, i) => v !== ticket.s[i])) scores = s;
    }
    const note = String(comment || "").trim().slice(0, 600);
    if (scores && !note) throw new HttpError(400, "Add a short comment explaining the change, so the agent and other leads can see why.");
    reviews[ticket.id] = { s: scores, comment: note, by: admin.email, at: new Date().toISOString() };
  }
  await setJson(reviewKey(month), reviews);
  return applyReviews(cycle, reviews).tickets.find((t) => t.id === ticket.id);
}
