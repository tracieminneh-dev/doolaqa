// Agent disputes on individual ticket scores. Agents raise them from their
// report page; team leads answer and resolve them in the admin Disputes section.
import crypto from "node:crypto";
import { getJson, setJson } from "./store.js";
import { getCycleRaw } from "./cycles.js";
import { HttpError } from "./http.js";

const key = (month) => `qa:disputes:${month}`;
const MAX_PER_AGENT_MONTH = 30;

export async function listDisputes(month) {
  return (await getJson(key(month))) || [];
}

export async function agentDisputes(month, agent) {
  return (await listDisputes(month)).filter((d) => d.agent === agent);
}

export async function addDispute({ month, agent, ticketId, text }) {
  const body = String(text || "").trim();
  if (body.length < 5) throw new HttpError(400, "Say briefly what you disagree with and why.");
  if (body.length > 1500) throw new HttpError(400, "Keep the dispute under 1,500 characters.");
  const cycle = await getCycleRaw(month);
  const ticket = cycle?.tickets.find((t) => t.id === String(ticketId) && t.agent === agent);
  if (!ticket) throw new HttpError(404, "That ticket isn't in your report for this month.");
  const all = await listDisputes(month);
  const mine = all.filter((d) => d.agent === agent);
  if (mine.length >= MAX_PER_AGENT_MONTH) throw new HttpError(429, "You've reached the dispute limit for this month. Talk to your team lead.");
  if (mine.some((d) => d.ticketId === ticket.id && d.status === "open")) throw new HttpError(409, "You already have an open dispute on this ticket. Your team lead will reply to it.");
  const d = {
    id: crypto.randomBytes(6).toString("hex"),
    ticketId: ticket.id, agent, subject: ticket.subject,
    text: body, at: new Date().toISOString(), status: "open",
  };
  all.push(d);
  await setJson(key(month), all);
  return d;
}

export async function resolveDispute({ month, id, response, admin, reopen = false }) {
  const all = await listDisputes(month);
  const d = all.find((x) => x.id === id);
  if (!d) throw new HttpError(404, "That dispute doesn't exist.");
  if (reopen) {
    d.status = "open";
    delete d.resolvedAt; delete d.resolvedBy;
  } else {
    const reply = String(response || "").trim();
    if (reply.length < 2) throw new HttpError(400, "Add a short reply for the agent.");
    d.status = "resolved";
    d.response = reply.slice(0, 1500);
    d.resolvedBy = admin.email;
    d.resolvedAt = new Date().toISOString();
  }
  await setJson(key(month), all);
  return d;
}
