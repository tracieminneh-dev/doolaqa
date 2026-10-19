// Stand-ins for HubSpot, Claude and Slack used only when QA_MOCK=1 on a local
// machine (never on Vercel), so the admin flow can be tested end to end.

import fs from "node:fs";
import path from "node:path";
import { ROSTER } from "./roster.js";

const hash = (s) => [...String(s)].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export async function getOwner(ownerId) {
  const a = ROSTER.find((r) => r.ownerId === ownerId);
  const slug = (a?.name || "agent").toLowerCase().replace(/[^a-z]+/g, ".");
  return { ownerId, userId: ownerId, email: `${slug}@example.test` };
}

export async function searchClosedTickets({ ownerId, fromMs, toMs }) {
  await sleep(150);
  const n = 13 + (hash(ownerId) % 4);
  const span = Math.max(toMs - fromMs, 1);
  return Array.from({ length: n }, (_, i) => ({
    id: `9${String(ownerId).slice(-5)}${String(i).padStart(3, "0")}`,
    subject: i % 7 === 3 ? "Automatic reply: Out of office" : i % 5 === 1 ? "AI Cofounder - Business Filings" : `Mock customer question ${i + 1}`,
    closedAt: new Date(fromMs + Math.floor((span * (i + 0.5)) / n)).toISOString(),
    category: i % 5 === 1 ? "AI-Cofounder" : "",
  }));
}

export async function getTicketConversation(ticketId) {
  await sleep(120);
  const ownerSuffix = String(ticketId).slice(1, 6);
  const owner = ROSTER.find((r) => r.ownerId.endsWith(ownerSuffix));
  const agentActor = `A-${owner?.ownerId || "1"}`;
  const someoneElse = hash(ticketId) % 6 === 0;
  const t0 = Date.parse("2026-10-01T09:00:00Z") + (hash(ticketId) % 20) * 36e5;
  const at = (h) => new Date(t0 + h * 36e5).toISOString();
  return {
    threadCount: 1,
    messages: [
      { at: at(0), direction: "INCOMING", actorId: "V-1", senderName: "Sam", channelId: "1002", text: "Hi, I need help with my annual report and my EIN letter." },
      { at: at(3.5), direction: "OUTGOING", actorId: someoneElse ? "A-999" : agentActor, senderName: someoneElse ? "Other Agent" : owner?.name, channelId: "1002", text: "Thanks Sam, here is how to file it, and your EIN letter is in Documents." },
      { at: at(5), direction: "INCOMING", actorId: "V-1", senderName: "Sam", channelId: "1002", text: "Thanks, what is the fee?" },
      { at: at(7), direction: "OUTGOING", actorId: someoneElse ? "A-999" : agentActor, senderName: someoneElse ? "Other Agent" : owner?.name, channelId: "1002", text: "The state fee is $60." },
    ],
  };
}

export async function scoreTicket({ agent, ticket, messages }) {
  await sleep(700);
  const ours = messages.some((m) => m.actorId === `A-${agent.userId}`);
  if (!ours) return { eligible: false, reason: "Another agent wrote the substantive replies." };
  const h = hash(ticket.id + agent.name);
  const s = [0, 1, 2, 3, 4].map((i) => 2 + ((h >>> (i * 3)) % 4));
  return {
    eligible: true,
    reason: "",
    subject: `Mock: annual report and EIN letter question ${ticket.id.slice(-2)}`,
    s,
    category: ["Accuracy & Completeness", "Clarity & Structure", "Empathy & Tone", "Policy & Process", "Effort Reduction"][s.indexOf(Math.min(...s))],
    keep: ["Answered both questions in a clear, numbered reply."],
    fix: [`First reply took about ${2 + (h % 9)} hours against the 90 minute standard.`],
  };
}

// Slack stand-in: saves the PDF locally instead of sending it.
export async function sendReportDm({ agentName, filename, pdfBytes }) {
  const dir = path.join(process.cwd(), ".data", "outbox");
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, filename), pdfBytes);
  return { channel: `mock-dm-${agentName}`, fileId: `mock-${Date.now()}` };
}
