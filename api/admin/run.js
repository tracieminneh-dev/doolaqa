// Monthly QA run: start, advance one step, cancel, and read progress.
import { requireAdmin } from "../../lib/auth.js";
import { startRun, stepRun, cancelRun, runStatus } from "../../lib/pipeline.js";
import { json, route, readJsonBody, HttpError } from "../../lib/http.js";

export const config = { maxDuration: 300 };

export const GET = route(async (request) => {
  requireAdmin(request);
  return json(await runStatus());
});

export const POST = route(async (request) => {
  const admin = requireAdmin(request);
  const body = await readJsonBody(request);
  if (body.action === "start") return json(await startRun({ month: body.month, startedBy: admin.email }));
  if (body.action === "step") return json(await stepRun({ runId: body.runId, agent: body.agent }));
  if (body.action === "cancel") return json(await cancelRun());
  throw new HttpError(400, "Unknown action.");
});
