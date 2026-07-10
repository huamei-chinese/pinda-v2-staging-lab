const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.resolve(__dirname, "..");
const appSource = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");

test("listening lesson list keeps the mobile back button inside the hero title card", () => {
  assert.match(
    appSource,
    /<button class="listening-lessons-back" type="button" data-listening-level-back/,
  );
  assert.match(
    styles,
    /Listening lessons: keep the back action inside the hero title card on mobile\./,
  );
  assert.match(
    styles,
    /#listeningScreen \.app-desktop-content:has\(\.listening-lessons-screen\) > \.mobile-page-return-bar--listening\s*\{[\s\S]*display:\s*none !important;/,
  );
  assert.match(
    styles,
    /#listeningScreen \.app-desktop-shell--listening:has\(\.listening-lessons-screen\) \.listening-lessons-back\s*\{[\s\S]*top:\s*clamp\(18px,\s*5vw,\s*24px\) !important;[\s\S]*left:\s*clamp\(18px,\s*5vw,\s*24px\) !important;[\s\S]*background:\s*linear-gradient\(135deg,\s*#10b981 0%,\s*#0ea5e9 100%\) !important;/,
  );
  assert.doesNotMatch(styles, /top:\s*-28px !important;/);
  assert.match(
    styles,
    /\.listening-lessons-back::before\s*\{[\s\S]*content:\s*"[^"]+" !important;/,
  );
});
