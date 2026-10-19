// The QA roster. This list is fixed: only these agents are scored, and nobody
// is added automatically. HubSpot ids come from the CRM owners list.

export const TEAMS = {
  "Customer Care": { pipelineId: "657631788" },
  "Account Management": { pipelineId: "66659607" },
};

export const ROSTER = [
  { name: "Christabelle Brown", team: "Customer Care", ownerId: "81459751" },
  { name: "Maricar Joyce Deocampo", team: "Customer Care", ownerId: "82737514" },
  { name: "Art Flores", team: "Customer Care", ownerId: "82737513" },
  { name: "Anna H", team: "Customer Care", ownerId: "82350790" },
  { name: "Minakshi Banik", team: "Customer Care", ownerId: "82737503" },
  { name: "Doris R", team: "Customer Care", ownerId: "89694521" },
  { name: "Shubham Bajaj", team: "Customer Care", ownerId: "89694522" },
  { name: "Harman Singh", team: "Customer Care", ownerId: "89694523" },
  { name: "Dennis Piffen", team: "Customer Care", ownerId: "89694524" },
  { name: "Jesi Alderite", team: "Account Management", ownerId: "296043115" },
  { name: "Annie Kapoor", team: "Account Management", ownerId: "1541663346" },
  { name: "Fatima Sindhu", team: "Account Management", ownerId: "953066904" },
];

export const TICKETS_PER_AGENT = 10;

export const agentKey = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export function findAgent(name) {
  return ROSTER.find((a) => a.name === name) || null;
}

// The public dashboard only needs names and teams.
export function publicRoster() {
  const out = {};
  for (const team of Object.keys(TEAMS)) out[team] = ROSTER.filter((a) => a.team === team).map((a) => a.name);
  return out;
}
