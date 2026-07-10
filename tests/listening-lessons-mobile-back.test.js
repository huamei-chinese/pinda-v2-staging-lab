const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.resolve(__dirname, "..");
const appSource = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");

test("listening lesson list uses a floating mobile back button before the hero", () => {
  assert.match(
    appSource,
    /<button class="listening-lessons-back" type="button" data-listening-level-back/,
  );
  assert.match(
    styles,
    /Listening lessons: lift the back action before the hero card on mobile\./,
  );
  assert.match(
    styles,
    /#listeningScreen \.app-desktop-content:has\(\.listening-lessons-screen\) > \.mobile-page-return-bar--listening\s*\{[\s\S]*display:\s*none !important;/,
  );
  assert.match(
    styles,
    /#listeningScreen \.app-desktop-shell--listening:has\(\.listening-lessons-screen\) \.listening-lessons-back\s*\{[\s\S]*top:\s*-28px !important;[\s\S]*background:\s*linear-gradient\(135deg,\s*#10b981 0%,\s*#0ea5e9 100%\) !important;/,
  );
  assert.match(
    styles,
    /\.listening-lessons-back::before\s*\{[\s\S]*content:\s*"[^"]+" !important;/,
  );
});
