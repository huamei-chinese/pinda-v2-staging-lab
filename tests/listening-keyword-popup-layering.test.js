const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const styles = fs.readFileSync(path.join(__dirname, "..", "public", "styles.css"), "utf8");

test("desktop listening keyword popup can overlay transcript content", () => {
  assert.match(styles, /Desktop listening keyword popup must float above the transcript/);
  assert.match(styles, /:has\(#listeningScreen \.listening-detail-spa:not\(\.listening-detail-mobile\) \.listening-keyword-detail:not\(\.hidden\)\)[\s\S]*\.listening-repeat-card,[\s\S]*\.listening-keyword-block\s*\{[\s\S]*overflow:\s*visible\s*!important;/);
  assert.match(styles, /\.listening-detail-spa:not\(\.listening-detail-mobile\) \.listening-keyword-detail\s*\{[\s\S]*z-index:\s*2147483000\s*!important;/);
});
