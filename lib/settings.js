// Admin-editable settings: the roster (who is included or paused, and new
// agents added by a team lead), tickets sampled per agent, and the response
// time standard. Defaults come from roster.js until a lead saves changes.

import { ROSTER, TEAMS, TICKETS_PER_AGENT } from "./roster.js";
import { getJson, setJson, storageReady } from "./store.js";
import { HttpError } from "./http.js";

const KEY = "qa:settings";

export const DEFAULTS = {
  ticketsPerAgent: TICKETS_PER_AGENT,
  slaMinutes: 90,
  roster: ROSTER.map((a) => ({ ...a, active: true })),
};

export async function getSettings() {
  if (!storageReady()) return structuredClone(DEFAULTS);
  const saved = (await getJson(KEY)) || {};
  return { ...structuredClone(DEFAULTS), ...saved };
}

export const activeRoster = (s) => s.roster.filter((a) => a.active);

export async function findAgent(name) {
  return (await getSettings()).roster.find((a) => a.name === name) || null;
}

// Names and teams of included agents, for the public dashboard.
export function publicRosterFrom(s) {
  const out = {};
  for (const team of Object.keys(TEAMS)) out[team] = activeRoster(s).filter((a) => a.team === team).map((a) => a.name);
  return out;
}

export async function saveSettings(patch, admin) {
  const s = await getSettings();
  if (patch.ticketsPerAgent !== undefined) {
    const n = Number(patch.ticketsPerAgent);
    if (!Number.isInteger(n) || n < 3 || n > 30) throw new HttpError(400, "Tickets per agent must be a whole number from 3 to 30.");
    s.ticketsPerAgent = n;
  }
  if (patch.slaMinutes !== undefined) {
    const n = Number(patch.slaMinutes);
    if (!Number.isInteger(n) || n < 5 || n > 1440) throw new HttpError(400, "The response standard must be between 5 and 1440 minutes.");
    s.slaMinutes = n;
  }
  if (patch.toggle) {
    const a = s.roster.find((r) => r.name === patch.toggle);
    if (!a) throw new HttpError(404, "That agent is not on the roster.");
    a.active = !a.active;
  }
  if (patch.add) {
    const name = String(patch.add.name || "").trim();
    const team = String(patch.add.team || "");
    const ownerId = String(patch.add.ownerId || "").trim();
    if (!name || name.length > 60) throw new HttpError(400, "Enter the agent's name as it appears in HubSpot.");
    if (!TEAMS[team]) throw new HttpError(400, "Pick Customer Care or Account Management.");
    if (!/^\d{3,15}$/.test(ownerId)) throw new HttpError(400, "The HubSpot owner ID is a number, found in HubSpot under Settings, Users & Teams.");
    if (s.roster.some((r) => r.name.toLowerCase() === name.toLowerCase())) throw new HttpError(409, `${name} is already on the roster.`);
    if (s.roster.some((r) => r.ownerId === ownerId)) throw new HttpError(409, "Another agent already uses that HubSpot owner ID.");
    s.roster.push({ name, team, ownerId, active: true, addedBy: admin.email, addedAt: new Date().toISOString() });
  }
  s.updatedBy = admin.email;
  s.updatedAt = new Date().toISOString();
  await setJson(KEY, s);
  return s;
}
