const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const styles = fs.readFileSync(path.join(__dirname, "..", "public", "styles.css"), "utf8");

test("saved vocabulary page has a polished scoped study-desk surface", () => {
  assert.match(styles, /Vocab page polish: turn the saved-word screen into a focused study desk\./);
  assert.match(styles, /#vocabScreen \.app-desktop-shell--vocab\s*\{[\s\S]*background-size:\s*34px 34px,\s*34px 34px,\s*auto !important;/);
  assert.match(styles, /#vocabScreen \.vocab-page-heading\s*\{[\s\S]*border-radius:\s*26px !important;[\s\S]*backdrop-filter:\s*blur\(14px\) !important;/);
  assert.match(styles, /#vocabScreen \.vocab-control-bar\s*\{[\s\S]*border-radius:\s*22px !important;[\s\S]*rgba\(255,\s*255,\s*255,\s*0\.78\) !important;/);
});

test("saved vocabulary cards and mobile layout are upgraded", () => {
  assert.match(styles, /#vocabScreen \.vocab-grid\s*\{[\s\S]*repeat\(auto-fill,\s*minmax\(236px,\s*1fr\)\) !important;/);
  assert.match(styles, /#vocabScreen \.vocab-item-card\s*\{[\s\S]*min-height:\s*252px !important;[\s\S]*border-radius:\s*24px !important;/);
  assert.match(styles, /#vocabScreen \.vocab-speak-btn\s*\{[\s\S]*linear-gradient\(135deg,\s*#2563eb,\s*#0ea5e9 58%,\s*#14b8a6\) !important;/);
  assert.match(styles, /@media \(max-width:\s*900px\) \{[\s\S]*#vocabScreen \.vocab-grid\s*\{[\s\S]*grid-template-columns:\s*1fr !important;/);
});
