// Tells the admin page whether the visitor is signed in, and which
// integrations are configured (for the setup checklist).
import { currentAdmin } from "../../lib/auth.js";
import { setupStatus, config } from "../../lib/env.js";
import { json, route } from "../../lib/http.js";

export const GET = route(async (request) => {
  const admin = currentAdmin(request);
  const setup = setupStatus();
  return json({
    authenticated: Boolean(admin),
    email: admin?.email || null,
    // Only reveal the integration checklist after sign-in; before that the
    // page only needs to know whether sign-in itself is set up.
    setup: admin ? setup : { login: setup.login },
    // Which emails may sign in (no secrets): the default doola.com rule, or a
    // narrower list set in ADMIN_EMAIL.
    access: config.adminEmails().join(",") === "@doola.com" ? "any @doola.com email" : "restricted list",
  });
});
