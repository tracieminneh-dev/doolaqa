// Monthly QA cycles. Each published month is stored as one record holding its
// scored tickets; an index lists which months exist.

import SEEDS from "../data/seeds.js";
import { getJson, setJson, mgetJson, storageReady } from "./store.js";

const INDEX_KEY = "qa:cycles";
const cycleKey = (month) => `qa:cycle:${month}`;
const byMonth = (a, b) => (a.month < b.month ? -1 : 1);

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const isMonth = (m) => /^\d{4}-(0[1-9]|1[0-2])$/.test(String(m || ""));

export function monthLabel(month) {
  const [y, m] = month.split("-").map(Number);
  return `${MONTHS[m - 1]} ${y}`;
}

// Tickets closed in the calendar month, or month to date for the current month.
export function monthWindow(month, now = new Date()) {
  const [y, m] = month.split("-").map(Number);
  const from = new Date(Date.UTC(y, m - 1, 1));
  const end = new Date(Date.UTC(y, m, 0, 23, 59, 59, 999));
  const to = end > now ? now : end;
  const iso = (d) => d.toISOString().slice(0, 10);
  return { from: iso(from), to: iso(to), fromMs: from.getTime(), toMs: to.getTime(), partial: end > now };
}

function summary(c) {
  return { month: c.month, label: c.label, window: c.window, publishedAt: c.publishedAt, tickets: c.tickets.length };
}

// Adds any month scored outside the app (the files in data/) that storage does
// not have yet. A newer seed (re-scored in Claude) replaces the stored copy of
// its month when that copy also came from a seed and either nobody has
// reviewed or approved anything yet, or the seed covers exactly the same
// tickets (reviews are stored separately by ticket, so they still apply on
// top). A month run from the admin page is never overwritten.
async function ensureSeeded() {
  const index = (await getJson(INDEX_KEY)) || [];
  const stored = new Map(index.map((c) => [c.month, c]));
  const writes = [];
  for (const s of SEEDS) {
    const cur = stored.get(s.month);
    if (!cur) { writes.push(s); continue; }
    if (!(String(s.publishedAt) > String(cur.publishedAt))) continue;
    const [full, reviews, approvals] = await mgetJson([cycleKey(s.month), reviewKey(s.month), `qa:approvals:${s.month}`]);
    const fromSeed = full && full.source === "manual";
    const untouched = !(reviews && Object.keys(reviews).length) && !(approvals && Object.keys(approvals).length);
    const ids = (c) => (c?.tickets || []).map((t) => t.id).sort().join(",");
    const sameTickets = full && ids(full) === ids(s);
    if (fromSeed && (untouched || sameTickets)) writes.push(s);
  }
  if (!writes.length) return index;
  for (const s of writes) await setJson(cycleKey(s.month), s);
  const replaced = new Set(writes.map((s) => s.month));
  const next = index.filter((c) => !replaced.has(c.month)).concat(writes.map(summary)).sort(byMonth);
  await setJson(INDEX_KEY, next);
  return next;
}

export async function listCycles() {
  if (!storageReady()) return SEEDS.map(summary).sort(byMonth);
  const index = await ensureSeeded();
  return [...index].sort(byMonth);
}

// Team lead reviews sit on top of the AI scores: an override replaces a
// ticket's dimension scores (the AI's are kept as aiS); a confirmation marks
// it reviewed without changing anything.
export const reviewKey = (month) => `qa:review:${month}`;

export function applyReviews(cycle, reviews) {
  if (!cycle || !reviews) return cycle;
  return {
    ...cycle,
    tickets: cycle.tickets.map((t) => {
      const r = reviews[t.id];
      if (!r) return t;
      const review = { by: r.by, at: r.at, comment: r.comment || "" };
      return r.s ? { ...t, aiS: t.s, s: r.s, overridden: true, reviewed: true, review } : { ...t, reviewed: true, review };
    }),
  };
}

// The cycle as the AI scored it, before any team lead review.
export async function getCycleRaw(month) {
  if (!storageReady()) return SEEDS.find((s) => s.month === month) || null;
  await ensureSeeded();
  return getJson(cycleKey(month));
}

export async function getCycle(month) {
  const raw = await getCycleRaw(month);
  if (!raw || !storageReady()) return raw;
  return applyReviews(raw, await getJson(reviewKey(month)));
}

export async function allCycles() {
  if (!storageReady()) return [...SEEDS].sort(byMonth);
  const index = await listCycles();
  const keys = index.map((c) => c.month);
  const cycles = await mgetJson(keys.map(cycleKey));
  const reviews = await mgetJson(keys.map(reviewKey));
  return cycles.map((c, i) => applyReviews(c, reviews[i])).filter(Boolean);
}

export async function publishCycle(cycle) {
  await ensureSeeded();
  await setJson(cycleKey(cycle.month), cycle);
  const index = (await getJson(INDEX_KEY)) || [];
  const next = index.filter((c) => c.month !== cycle.month).concat(summary(cycle));
  await setJson(INDEX_KEY, next.sort(byMonth));
}
