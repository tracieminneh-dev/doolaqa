// Small helpers shared by the API routes (Web standard Request/Response).

export class HttpError extends Error {
  constructor(status, message, extra = {}) {
    super(message);
    this.status = status;
    this.extra = extra;
  }
}

export function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      ...headers,
    },
  });
}

export function cookies(request) {
  const out = {};
  for (const part of (request.headers.get("cookie") || "").split(";")) {
    const i = part.indexOf("=");
    if (i > 0) out[part.slice(0, i).trim()] = decodeURIComponent(part.slice(i + 1).trim());
  }
  return out;
}

// Mutating admin calls must be same-origin JSON requests. Together with the
// SameSite=Strict session cookie this blocks cross-site request forgery.
export async function readJsonBody(request) {
  const type = request.headers.get("content-type") || "";
  if (!type.includes("application/json")) throw new HttpError(415, "Expected a JSON request.");
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) throw new HttpError(403, "Cross-site request blocked.");
  try {
    return await request.json();
  } catch {
    throw new HttpError(400, "Invalid JSON body.");
  }
}

export function clientIp(request) {
  const fwd = request.headers.get("x-forwarded-for") || "";
  return fwd.split(",")[0].trim() || request.headers.get("x-real-ip") || "local";
}

// Wraps a route handler so thrown errors become clean JSON responses.
export function route(handler) {
  return async (request) => {
    try {
      return await handler(request);
    } catch (err) {
      if (err instanceof HttpError) return json({ error: err.message, ...err.extra }, err.status);
      console.error(err);
      return json({ error: "Something went wrong on the server. Check the function logs." }, 500);
    }
  };
}
