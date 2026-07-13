const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const styles = fs.readFileSync(path.join(__dirname, "..", "public", "styles.css"), "utf8");

test("desktop listening active sentence uses the same bright blue treatment as mobile", () => {
  assert.match(
    styles,
    /@media \(min-width:\s*641px\) \{[\s\S]*\.listening-detail-spa:not\(\.listening-detail-mobile\) \.listening-script-card \.listening-sentence\.active,[\s\S]*linear-gradient\(120deg,\s*#bae6fd 0%,\s*#7dd3fc 44%,\s*#a5f3fc 100%\) !important;/,
  );
  assert.match(
    styles,
    /\.listening-detail-spa:not\(\.listening-detail-mobile\) \.listening-script-card \.listening-sentence\.active \.listening-line-zh,[\s\S]*color:\s*#0f172a !important;[\s\S]*text-shadow:\s*none !important;/,
  );
  assert.match(
    styles,
    /\.listening-detail-spa:not\(\.listening-detail-mobile\) \.listening-script-card \.listening-sentence\.active \.listening-line-vi,[\s\S]*color:\s*#075985 !important;[\s\S]*text-shadow:\s*none !important;/,
  );
});
