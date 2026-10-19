// Public dashboard data: every published month and the roster.
import { allCycles } from "../lib/cycles.js";
import { publicRoster, TICKETS_PER_AGENT } from "../lib/roster.js";
import { json, route } from "../lib/http.js";

export const GET = route(async () => {
  const cycles = await allCycles();
  return json({
    roster: publicRoster(),
    perAgent: TICKETS_PER_AGENT,
    cycles: cycles
      .sort((a, b) => (a.month < b.month ? -1 : 1))
      .map((c) => ({ month: c.month, label: c.label, window: c.window, publishedAt: c.publishedAt, tickets: c.tickets })),
  });
});
