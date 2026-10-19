// Local stand-in for Vercel: serves the two pages and runs the /api routes
// with the same Web Request/Response handlers. Reads .env.local if present.
// Usage: npm run dev   (then open http://localhost:3123)

import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const envFile = path.join(root, ".env.local");
if (fs.existsSync(envFile)) {
  for (const line of fs.readFileSync(envFile, "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !(m[1] in process.env)) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
}

const PORT = Number(process.env.PORT || 3123);
const PAGES = { "/": "index.html", "/index.html": "index.html", "/admin": "admin.html", "/admin.html": "admin.html" };

async function handleApi(req, res, url) {
  const file = path.join(root, `${url.pathname.replace(/\/$/, "")}.js`);
  if (!file.startsWith(path.join(root, "api")) || !fs.existsSync(file)) {
    res.writeHead(404, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ error: "Not found" }));
  }
  const mod = await import(pathToFileURL(file).href);
  const handler = mod[req.method];
  if (!handler) {
    res.writeHead(405, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ error: "Method not allowed" }));
  }
  const chunks = [];
  for await (const c of req) chunks.push(c);
  const request = new Request(url, {
    method: req.method,
    headers: req.headers,
    body: ["GET", "HEAD"].includes(req.method) ? undefined : Buffer.concat(chunks),
  });
  const response = await handler(request);
  const headers = {};
  response.headers.forEach((v, k) => { if (k !== "set-cookie") headers[k] = v; });
  const cookies = response.headers.getSetCookie?.() || [];
  if (cookies.length) headers["set-cookie"] = cookies;
  res.writeHead(response.status, headers);
  res.end(Buffer.from(await response.arrayBuffer()));
}

http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  try {
    if (url.pathname.startsWith("/api/")) return await handleApi(req, res, url);
    const page = PAGES[url.pathname];
    if (!page) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      return res.end("Not found");
    }
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" });
    res.end(fs.readFileSync(path.join(root, page)));
  } catch (err) {
    console.error(err);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Dev server error: " + err.message);
  }
}).listen(PORT, () => console.log(`doola QA dev server on http://localhost:${PORT}${process.env.QA_MOCK === "1" ? " (mock mode)" : ""}`));
