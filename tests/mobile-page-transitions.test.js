const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const app = fs.readFileSync(path.join(__dirname, "..", "public", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(__dirname, "..", "public", "styles.css"), "utf8");

test("mobile screens animate through the shared screen switcher", () => {
  assert.match(app, /const MOBILE_PAGE_TRANSITION_CLASS\s*=\s*"mobile-page-transition-enter"/);
  assert.match(app, /function shouldRunMobilePageTransition\(\)/);
  assert.match(app, /matchMedia\?\.\("\(max-width: 700px\)"\)/);
  assert.match(app, /matchMedia\?\.\("\(prefers-reduced-motion: reduce\)"\)/);
  assert.match(app, /function triggerMobilePageTransition\(screenName\)/);
  assert.match(app, /Object\.entries\(screens\)\.forEach\(\(\[key, node\]\) => node\.classList\.toggle\("hidden", key !== name\)\);[\s\S]*triggerMobilePageTransition\(name\);/);
});

test("mobile page transition CSS is scoped and respects reduced motion", () => {
  assert.match(styles, /@keyframes mobilePageEnterSoft/);
  assert.match(styles, /@keyframes mobilePageContentRise/);
  assert.match(styles, /@media \(max-width:\s*700px\) \{[\s\S]*#app \.screen\.mobile-page-transition-enter\s*\{[\s\S]*animation:\s*mobilePageEnterSoft 300ms/);
  assert.match(styles, /#app \.screen\.mobile-page-transition-enter > \.app-desktop-shell/);
  assert.match(styles, /@media \(max-width:\s*700px\) and \(prefers-reduced-motion:\s*reduce\) \{[\s\S]*animation:\s*none !important;/);
});
