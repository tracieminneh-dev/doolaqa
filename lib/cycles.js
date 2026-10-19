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
// not have yet. A month already in storage, for example one re-run from the
// admin page, is never overwritten by a seed.
async function ensureSeeded() {
  const index = (await getJson(INDEX_KEY)) || [];
  const have = new Set(index.map((c) => c.month));
  const missing = SEEDS.filter((s) => !have.has(s.month));
  if (!missing.length) return index;
  for (const s of missing) await setJson(cycleKey(s.month), s);
  const next = index.concat(missing.map(summary)).sort(byMonth);
  await setJson(INDEX_KEY, next);
  return next;
}

export async function listCycles() {
  if (!storageReady()) return SEEDS.map(summary).sort(byMonth);
  const index = await ensureSeeded();
  return [...index].sort(byMonth);
}

export async function getCycle(month) {
  if (!storageReady()) return SEEDS.find((s) => s.month === month) || null;
  await ensureSeeded();
  return getJson(cycleKey(month));
}

export async function allCycles() {
  if (!storageReady()) return [...SEEDS].sort(byMonth);
  const index = await listCycles();
  const cycles = await mgetJson(index.map((c) => cycleKey(c.month)));
  return cycles.filter(Boolean);
}

export async function publishCycle(cycle) {
  await ensureSeeded();
  await setJson(cycleKey(cycle.month), cycle);
  const index = (await getJson(INDEX_KEY)) || [];
  const next = index.filter((c) => c.month !== cycle.month).concat(summary(cycle));
  await setJson(INDEX_KEY, next.sort(byMonth));
}
