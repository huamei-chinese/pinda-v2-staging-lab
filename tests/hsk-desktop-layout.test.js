const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const styles = fs.readFileSync(path.join(__dirname, "..", "public", "styles.css"), "utf8");

test("desktop HSK level picker stays inside the course content viewport", () => {
  assert.match(styles, /\.app-desktop-shell--course\s+\.app-desktop-content,\s*\.app-desktop-shell--vocab\s+\.app-desktop-content\s*\{[^}]*overflow-x:\s*hidden/s);
  assert.match(styles, /\.app-desktop-shell--course\s+\.hsk-level-picker\s*\{[^}]*max-width:\s*100%/s);
  assert.match(styles, /\.app-desktop-shell--course\s+\.hsk-level-grid\s*\{[^}]*box-sizing:\s*border-box/s);
  assert.match(styles, /\.app-desktop-shell--course\s+\.hsk-level-card\s*\{[^}]*min-width:\s*0/s);
});
