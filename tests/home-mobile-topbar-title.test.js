const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const styles = fs.readFileSync(path.join(__dirname, "..", "public", "styles.css"), "utf8");

test("mobile home topbar keeps the HuaMei title on one line", () => {
  assert.match(
    styles,
    /@media \(max-width:\s*700px\) \{[\s\S]*\.screen-home \.home-desktop-topbar\s*\{[\s\S]*grid-template-columns:\s*minmax\(0,\s*1fr\) !important;/,
  );
  assert.match(styles, /\.screen-home \.home-desktop-topbar h1\s*\{[\s\S]*white-space:\s*nowrap !important;[\s\S]*word-break:\s*keep-all !important;/);
  assert.match(styles, /\.screen-home \.home-desktop-lang-btn\s*\{[\s\S]*justify-self:\s*end !important;[\s\S]*margin-top:\s*-2px !important;/);
});
