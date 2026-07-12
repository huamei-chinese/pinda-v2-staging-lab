const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "..");
const appSource = fs.readFileSync(path.join(repoRoot, "public", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(repoRoot, "public", "styles.css"), "utf8");

test("mobile listening detail uses the original artwork hero instead of the temporary title header", () => {
  assert.doesNotMatch(appSource, /<header class="listening-mobile-titlebar">/);
  assert.match(appSource, /<section class="listening-mobile-hero"/);
  assert.match(styles, /\.screen-listening \.listening-detail-mobile \.listening-mobile-hero\s*\{[\s\S]*background:\s*url\("assets\/anhnentrinhphatnhac-optimized\.jpg"\)/);
  assert.doesNotMatch(styles, /Mobile listening detail: replace the artwork hero with a compact lesson title header/);
});
