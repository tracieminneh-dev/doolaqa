// Read and change admin settings: roster, tickets per agent, response standard.
import { requireAdmin } from "../../lib/auth.js";
import { getSettings, saveSettings } from "../../lib/settings.js";
import { json, route, readJsonBody } from "../../lib/http.js";

export const GET = route(async (request) => {
  requireAdmin(request);
  return json({ settings: await getSettings() });
});

export const POST = route(async (request) => {
  const admin = requireAdmin(request);
  const body = await readJsonBody(request);
  return json({ settings: await saveSettings(body, admin) });
});
