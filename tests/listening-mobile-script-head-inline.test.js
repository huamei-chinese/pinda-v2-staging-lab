const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const styles = fs.readFileSync(path.join(__dirname, "..", "public", "styles.css"), "utf8");

test("mobile listening script header keeps title and subtitle actions inline", () => {
  assert.match(
    styles,
    /@media \(max-width:\s*640px\) \{[\s\S]*\.screen-listening \.listening-detail-spa\.listening-detail-mobile \.listening-script-card--mobile\s*\{[\s\S]*grid-template-columns:\s*minmax\(0,\s*1fr\) auto !important;/i,
  );
  assert.match(
    styles,
    /\.screen-listening \.listening-detail-spa\.listening-detail-mobile \.listening-script-card--mobile \.listening-mobile-section-title\s*\{[\s\S]*grid-column:\s*1 !important;[\s\S]*grid-row:\s*1 !important;/i,
  );
  assert.match(
    styles,
    /\.screen-listening \.listening-detail-spa\.listening-detail-mobile \.listening-script-card--mobile \.listening-script-head\s*\{[\s\S]*grid-column:\s*2 !important;[\s\S]*grid-row:\s*1 !important;/i,
  );
  assert.match(
    styles,
    /\.screen-listening \.listening-detail-spa\.listening-detail-mobile \.listening-script-card--mobile \.listening-script-title\s*\{[\s\S]*font-size:\s*clamp\(20px,\s*5\.1vw,\s*24px\) !important;/i,
  );
  assert.match(
    styles,
    /\.screen-listening \.listening-detail-spa\.listening-detail-mobile \.listening-script-card--mobile \.listening-subtitle-actions\s*\{[\s\S]*flex-wrap:\s*nowrap !important;/i,
  );
});
