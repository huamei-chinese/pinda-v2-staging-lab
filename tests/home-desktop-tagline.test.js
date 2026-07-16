const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const appSource = fs.readFileSync(path.join(__dirname, "..", "public", "app.js"), "utf8");

test("home desktop topbar uses the updated Vietnamese tagline", () => {
  assert.match(appSource, /Làm chủ tiếng Trung từng bước/);
  assert.match(appSource, /一步步掌握中文/);
  assert.doesNotMatch(appSource, /<p>\$\{isVi \? "Học đúng – Nhớ lâu"/);
});
