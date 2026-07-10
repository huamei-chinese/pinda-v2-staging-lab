const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const styles = fs.readFileSync(path.join(__dirname, "..", "public", "styles.css"), "utf8");

test("mobile listening title sentence stays visually distinct without a visible label", () => {
  assert.match(
    styles,
    /@media \(max-width:\s*640px\) \{[\s\S]*\.screen-listening \.listening-detail-spa\.listening-detail-mobile \.listening-script-card--mobile \.listening-sentence--title,[\s\S]*\.listening-sentence--title\.active,[\s\S]*\.listening-sentence--title:hover\s*\{[\s\S]*linear-gradient\(125deg,\s*#dff7ff 0%,\s*#8bdcff 45%,\s*#4fc3f7 100%\) !important;[\s\S]*inset 5px 0 0 #0284c7/i,
  );
  assert.match(
    styles,
    /\.listening-script-card--mobile \.listening-sentence--title::before,[\s\S]*\.listening-script-card--mobile \.listening-sentence--title\.active::before\s*\{[\s\S]*content:\s*"" !important;[\s\S]*display:\s*block !important;[\s\S]*pointer-events:\s*none !important;/i,
  );
  assert.match(
    styles,
    /\.listening-script-card--mobile \.listening-sentence--title \.listening-line-vi,[\s\S]*\.listening-script-card--mobile \.listening-sentence--title\.active em\s*\{[\s\S]*color:\s*#075985 !important;[\s\S]*font-weight:\s*900 !important;/i,
  );
  assert.doesNotMatch(styles, /\.listening-sentence--title::(?:before|after)\s*\{[\s\S]*content:\s*"Tiêu đề"/i);
});
