// Public dashboard data: every published month and the roster.
import { allCycles } from "../lib/cycles.js";
import { getSettings, publicRosterFrom } from "../lib/settings.js";
import { json, route } from "../lib/http.js";

export const GET = route(async () => {
  const cycles = await allCycles();
  const settings = await getSettings();
  return json({
    roster: publicRosterFrom(settings),
    perAgent: settings.ticketsPerAgent,
    slaMinutes: settings.slaMinutes,
    cycles: cycles
      .sort((a, b) => (a.month < b.month ? -1 : 1))
      .map((c) => ({ month: c.month, label: c.label, window: c.window, publishedAt: c.publishedAt, tickets: c.tickets })),
  });
});
