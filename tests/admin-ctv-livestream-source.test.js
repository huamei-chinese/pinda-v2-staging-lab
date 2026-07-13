const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const appSource = fs.readFileSync(path.join(__dirname, "..", "public", "app.js"), "utf8");
const stylesSource = fs.readFileSync(path.join(__dirname, "..", "public", "styles.css"), "utf8");

test("admin CTV link source picker includes CTV Livestream", () => {
  assert.match(appSource, /ADMIN_SOURCE_KEYS = \["tiktok", "facebook", "koc", "ctv_livestream"\]/);
  assert.match(appSource, /\{ id: "ctv_livestream", label: "CTV Livestream" \}/);
  assert.match(appSource, /ctv_livestream: "CTV Livestream"/);
  assert.match(appSource, /sourceSummary\.counts\.ctv_livestream/);
});

test("admin CTV livestream source has dedicated visual styles", () => {
  assert.match(stylesSource, /\.admin-ctv-source-card--ctv_livestream/);
  assert.match(stylesSource, /\.admin-ctv-src-pill\.src-ctv_livestream/);
});
