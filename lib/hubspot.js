// HubSpot reads used by the monthly QA run. Needs a private app token in
// HUBSPOT_ACCESS_TOKEN with scopes: tickets, conversations.read,
// crm.objects.owners.read. Everything here is read-only.

import { config, isMock } from "./env.js";
import * as mock from "./mock.js";

const BASE = "https://api.hubapi.com";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function hs(path, { method = "GET", body } = {}) {
  const token = config.hubspotToken();
  if (!token) throw new Error("HUBSPOT_ACCESS_TOKEN is not set.");
  for (let attempt = 0; attempt < 4; attempt++) {
    const res = await fetch(BASE + path, {
      method,
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: body ? JSON.stringify(body) : undefined,
    });
    if (res.status === 429 || res.status >= 500) {
      await sleep(1500 * (attempt + 1));
      continue;
    }
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      const hint = res.status === 401 || res.status === 403 ? " Check the HubSpot token and its scopes." : "";
      throw new Error(`HubSpot ${method} ${path.split("?")[0]} failed (${res.status}). ${data.message || ""}${hint}`.trim());
    }
    return data;
  }
  throw new Error(`HubSpot ${path.split("?")[0]} kept failing after retries.`);
}

// Owner record: gives the HubSpot user id (used to attribute messages by
// sender) and the email (used to find the agent in Slack).
export async function getOwner(ownerId) {
  if (isMock()) return mock.getOwner(ownerId);
  const o = await hs(`/crm/v3/owners/${encodeURIComponent(ownerId)}?idProperty=id`);
  return { ownerId: String(o.id), userId: o.userId ? String(o.userId) : null, email: o.email || null };
}

// Tickets in a pipeline, owned by the agent, closed inside the window.
export async function searchClosedTickets({ pipelineId, ownerId, fromMs, toMs, cap = 400 }) {
  if (isMock()) return mock.searchClosedTickets({ ownerId, fromMs, toMs });
  const out = [];
  let after;
  do {
    const page = await hs("/crm/v3/objects/tickets/search", {
      method: "POST",
      body: {
        filterGroups: [{
          filters: [
            { propertyName: "hs_pipeline", operator: "EQ", value: pipelineId },
            { propertyName: "hubspot_owner_id", operator: "EQ", value: ownerId },
            { propertyName: "closed_date", operator: "BETWEEN", value: String(fromMs), highValue: String(toMs) },
          ],
        }],
        properties: ["subject", "closed_date", "hs_ticket_category"],
        sorts: [{ propertyName: "closed_date", direction: "ASCENDING" }],
        limit: 100,
        ...(after ? { after } : {}),
      },
    });
    for (const t of page.results || []) {
      out.push({
        id: String(t.id),
        subject: t.properties.subject || "",
        closedAt: t.properties.closed_date || null,
        category: t.properties.hs_ticket_category || "",
      });
    }
    after = page.paging?.next?.after;
  } while (after && out.length < cap);
  return out;
}

// The customer-facing conversation for a ticket, oldest message first.
// Internal comments are left out: scoring covers customer-facing conduct only.
export async function getTicketConversation(ticketId) {
  if (isMock()) return mock.getTicketConversation(ticketId);
  const threads = await hs(`/conversations/v3/conversations/threads?associatedTicketId=${encodeURIComponent(ticketId)}&limit=20`);
  const actorNames = new Map();
  const messages = [];
  for (const thread of threads.results || []) {
    let after;
    let pages = 0;
    do {
      const q = `limit=100${after ? `&after=${encodeURIComponent(after)}` : ""}`;
      const page = await hs(`/conversations/v3/conversations/threads/${thread.id}/messages?${q}`);
      for (const m of page.results || []) {
        if (m.type !== "MESSAGE") continue;
        const sender = (m.senders || [])[0] || {};
        messages.push({
          at: m.createdAt,
          direction: m.direction || "",
          actorId: sender.actorId || "",
          senderName: sender.name || "",
          channelId: m.channelId || "",
          text: m.text || "",
          truncated: m.truncationStatus && m.truncationStatus !== "NOT_TRUNCATED",
        });
      }
      after = page.paging?.next?.after;
      pages += 1;
    } while (after && pages < 5);
  }
  for (const m of messages) {
    if (!m.senderName && m.actorId) {
      if (!actorNames.has(m.actorId)) {
        try {
          const actor = await hs(`/conversations/v3/conversations/actors/${encodeURIComponent(m.actorId)}`);
          actorNames.set(m.actorId, actor.name || "");
        } catch {
          actorNames.set(m.actorId, "");
        }
      }
      m.senderName = actorNames.get(m.actorId);
    }
  }
  messages.sort((a, b) => (a.at < b.at ? -1 : 1));
  return { threadCount: (threads.results || []).length, messages };
}
