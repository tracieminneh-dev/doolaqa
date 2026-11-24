// Opens an agent's web report (the page they get a link to in Slack), so a
// lead can preview it before approving or sending.
import { requireAdmin } from "../../lib/auth.js";
import { isMonth } from "../../lib/cycles.js";
import { findAgent } from "../../lib/settings.js";
import { reportUrl } from "../../lib/reportlink.js";
import { route, HttpError } from "../../lib/http.js";

export const GET = route(async (request) => {
  requireAdmin(request);
  const url = new URL(request.url);
  const month = url.searchParams.get("month");
  const agent = url.searchParams.get("agent");
  if (!isMonth(month)) throw new HttpError(400, "Pick a month.");
  if (!(await findAgent(agent))) throw new HttpError(400, "That agent is not on the QA roster.");
  return new Response(null, { status: 302, headers: { Location: reportUrl(url.origin, month, agent), "Cache-Control": "no-store" } });
});
