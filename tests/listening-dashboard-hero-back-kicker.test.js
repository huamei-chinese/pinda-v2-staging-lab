const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.resolve(__dirname, "..");
const appSource = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");

test("listening dashboard hero uses the kicker position as a back button", () => {
  assert.match(
    appSource,
    /<button class="listening-topic-hero-kicker listening-topic-hero-kicker--back" type="button" data-listening-dashboard-back/,
  );
  assert.match(
    styles,
    /\.screen-listening \.listening-topic-hero \.listening-dashboard-back-btn--hero\s*\{[\s\S]*display:\s*none !important;/,
  );
  assert.match(
    styles,
    /\.screen-listening \.listening-topic-hero \.listening-topic-hero-kicker--back::after\s*\{[\s\S]*content:\s*"Quay lại" !important;[\s\S]*font-weight:\s*950 !important;/,
  );
  assert.match(
    styles,
    /\.screen-listening \.listening-topic-hero \.listening-topic-hero-kicker--back::before\s*\{[\s\S]*background:\s*linear-gradient\(135deg,\s*#10b981,\s*#0ea5e9\) !important;/,
  );
});
