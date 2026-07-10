const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const styles = fs.readFileSync(path.join(__dirname, "..", "public", "styles.css"), "utf8");

test("mobile listening active sentence uses a clearer ocean-blue gradient", () => {
  assert.match(
    styles,
    /@media \(max-width:\s*640px\) \{[\s\S]*\.screen-listening \.listening-detail-spa\.listening-detail-mobile \.listening-script-card--mobile \.listening-sentence\.active,[\s\S]*\.screen-listening \.listening-detail-spa\.listening-detail-mobile \.listening-script-card--mobile \.listening-sentence:hover\s*\{[\s\S]*linear-gradient\(120deg,\s*#bae6fd 0%,\s*#7dd3fc 44%,\s*#a5f3fc 100%\) !important;/i,
  );
  assert.match(styles, /\.listening-script-card--mobile \.listening-sentence\.active \.listening-line-zh,[\s\S]*\.listening-script-card--mobile \.listening-sentence\.active strong,[\s\S]*\.listening-script-card--mobile \.listening-sentence:hover \.listening-line-zh,[\s\S]*\.listening-script-card--mobile \.listening-sentence:hover strong\s*\{[\s\S]*color:\s*#0f172a !important;[\s\S]*text-shadow:\s*none !important;/i);
  assert.match(styles, /\.listening-script-card--mobile \.listening-sentence\.active em,[\s\S]*\.listening-script-card--mobile \.listening-sentence:hover \.listening-line-vi,[\s\S]*\.listening-script-card--mobile \.listening-sentence:hover em\s*\{[\s\S]*color:\s*#075985 !important;[\s\S]*text-shadow:\s*none !important;/i);
});
