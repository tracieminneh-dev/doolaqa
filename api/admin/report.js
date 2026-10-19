// Preview or download an agent's "QA analysis - <month>" PDF before approving.
import { requireAdmin } from "../../lib/auth.js";
import { agentReport } from "../../lib/approvals.js";
import { isMonth } from "../../lib/cycles.js";
import { route, HttpError } from "../../lib/http.js";

export const config = { maxDuration: 60 };

export const GET = route(async (request) => {
  requireAdmin(request);
  const params = new URL(request.url).searchParams;
  const month = params.get("month");
  if (!isMonth(month)) throw new HttpError(400, "Pick a month.");
  const { report } = await agentReport(month, params.get("agent"));
  return new Response(report.bytes, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="qa-analysis.pdf"; filename*=UTF-8''${encodeURIComponent(report.filename)}`,
      "Cache-Control": "no-store",
    },
  });
});
