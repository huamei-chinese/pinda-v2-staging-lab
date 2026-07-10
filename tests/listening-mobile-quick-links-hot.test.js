const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const styles = fs.readFileSync(path.join(__dirname, "..", "public", "styles.css"), "utf8");

test("mobile listening quick practice dock uses a cool prominent gradient", () => {
  assert.match(
    styles,
    /@media \(max-width:\s*640px\) \{[\s\S]*\.screen-listening \.listening-detail-mobile>\.listening-quick-links-card\.listening-mobile-card\s*\{[\s\S]*border-top:\s*4px solid #0ea5e9 !important;[\s\S]*rgba\(147,\s*197,\s*253,\s*0\.94\)/i,
  );
  assert.match(styles, /\.screen-listening \.listening-detail-mobile>\.listening-quick-links-card\.listening-mobile-card h2\s*\{[\s\S]*color:\s*#075985 !important;/i);
  assert.match(styles, /\.screen-listening \.listening-detail-mobile>\.listening-quick-links-card \.listening-script-quick-actions button\s*\{[\s\S]*color:\s*#0369a1 !important;[\s\S]*rgba\(224,\s*242,\s*254,\s*0\.9\)/i);
});
