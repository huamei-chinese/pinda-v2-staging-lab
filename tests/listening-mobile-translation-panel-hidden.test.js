const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const appSource = fs.readFileSync(path.join(__dirname, "..", "public", "app.js"), "utf8");

test("mobile listening detail does not render the standalone translation card", () => {
  assert.doesNotMatch(appSource, /listening-translation-panel listening-mobile-card/);
  assert.match(appSource, /listening-quick-links-card listening-mobile-card/);
  assert.match(appSource, /listening-subtitle-actions/);
});
