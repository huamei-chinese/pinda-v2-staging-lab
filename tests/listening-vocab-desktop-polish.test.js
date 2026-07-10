const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const styles = fs.readFileSync(path.join(__dirname, "..", "public", "styles.css"), "utf8");

test("desktop listening vocabulary lesson uses a calmer cohesive study visual system", () => {
  assert.match(
    styles,
    /Desktop listening vocabulary lesson: calm, cohesive study surface\./,
  );
  assert.match(
    styles,
    /@media \(min-width:\s*901px\) \{[\s\S]*#listeningScreen \.app-desktop-shell--listening:has\(\.listening-vocab-lesson-screen\) \.app-desktop-content\s*\{[\s\S]*url\("assets\/backgroundienthoai4\.jpg"\)/,
  );
  assert.match(
    styles,
    /#listeningScreen \.app-desktop-shell--listening:has\(\.listening-vocab-lesson-screen\) \.listening-vocab-practice-card\s*\{[\s\S]*linear-gradient\(180deg,\s*rgba\(255,\s*255,\s*255,\s*0\.94\)[\s\S]*border:\s*1px solid rgba\(125,\s*211,\s*252,\s*0\.42\)/,
  );
  assert.match(
    styles,
    /#listeningScreen \.app-desktop-shell--listening:has\(\.listening-vocab-lesson-screen\) \.listening-vocab-practice-word\s*\{[\s\S]*linear-gradient\(110deg,\s*#047857 0%,\s*#0f766e 34%,\s*#2563eb 68%,\s*#7c3aed 100%\)/,
  );
  assert.match(
    styles,
    /#listeningScreen \.app-desktop-shell--listening:has\(\.listening-vocab-lesson-screen\) \.listening-vocab-example:hover\s*\{[\s\S]*transform:\s*translateY\(-3px\) !important;[\s\S]*border-left-color:\s*#0ea5e9 !important;/,
  );
});
