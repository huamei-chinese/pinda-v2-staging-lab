const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const styles = fs.readFileSync(path.join(__dirname, "..", "public", "styles.css"), "utf8");

test("desktop listening quick practice card is visually prominent", () => {
  assert.match(
    styles,
    /@media \(min-width:\s*641px\) \{[\s\S]*\.listening-detail-spa:not\(\.listening-detail-mobile\) \.listening-quick-links-card\s*\{[\s\S]*border-top:\s*4px solid #0ea5e9 !important;[\s\S]*rgba\(147,\s*197,\s*253,\s*0\.94\)/,
  );
  assert.doesNotMatch(
    styles,
    /\.listening-detail-spa:not\(\.listening-detail-mobile\) \.listening-quick-links-card::after/,
  );
  assert.match(
    styles,
    /\.listening-detail-spa:not\(\.listening-detail-mobile\) \.listening-quick-links-card \.listening-script-quick-actions button\s*\{[\s\S]*color:\s*#0369a1 !important;[\s\S]*rgba\(224,\s*242,\s*254,\s*0\.92\)/,
  );
});
