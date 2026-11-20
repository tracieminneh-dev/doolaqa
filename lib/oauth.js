// Shared helpers for the Google sign-in routes.

// Only same-site paths may be used as the page to return to after sign-in.
export function safeNext(next) {
  const n = String(next || "/");
  return n.startsWith("/") && !n.startsWith("//") && !n.startsWith("/api/auth") ? n.slice(0, 300) : "/";
}

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

// A small branded HTML page for sign-in errors. body may contain trusted links.
export function page(status, title, body, setCookie) {
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>CS QA</title><style>
body{margin:0;font-family:Inter,system-ui,sans-serif;background:#FEF4CC;color:#141414;display:grid;place-items:center;min-height:100vh}
.card{background:#fff;border-radius:16px;padding:32px;max-width:420px;margin:16px;box-shadow:0 8px 30px rgba(0,0,0,.08)}
h1{font-size:20px;margin:0 0 10px}p{color:#5B5B5B;line-height:1.5;margin:0}
.btn{display:inline-block;margin-top:16px;background:#141414;color:#fff;text-decoration:none;padding:10px 16px;border-radius:999px;font-weight:600}
</style></head><body><div class="card"><h1>${esc(title)}</h1><p>${body}</p></div></body></html>`;
  const headers = { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" };
  if (setCookie) headers["Set-Cookie"] = setCookie;
  return new Response(html, { status, headers });
}
