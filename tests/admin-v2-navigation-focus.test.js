const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "..");
const publicDir = path.join(repoRoot, "public");

const html = fs.readFileSync(path.join(publicDir, "admin-v2.html"), "utf8");
const js = fs.readFileSync(path.join(publicDir, "admin-v2.js"), "utf8");

test("admin v2 navigation hides overview-only blocks before showing non-overview panels", () => {
  assert.match(html, /class="local-bridge"[^>]*data-admin-v2-overview-only/);
  assert.match(html, /class="role-control"[^>]*data-admin-v2-overview-only/);
  assert.match(html, /class="service-board"[^>]*data-admin-v2-overview-only/);
  assert.match(html, /class="metric-grid"[^>]*data-admin-v2-overview-only/);

  assert.match(js, /\[data-admin-v2-overview-only\]/);
  assert.match(js, /section\.hidden = tab !== "overview"/);
});

test("admin v2 navigation scrolls the selected panel into view on click", () => {
  assert.match(js, /function setAdminV2Tab\(tab, options = \{\}\)/);
  assert.match(js, /activePanel\.scrollIntoView/);
  assert.match(js, /setAdminV2Tab\(button\.dataset\.adminV2Tab, \{ scroll: true \}\)/);
});
