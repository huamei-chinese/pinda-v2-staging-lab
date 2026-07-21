const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const appSource = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const rootAppSource = fs.readFileSync(path.join(root, "app.js"), "utf8");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");

test("saved vocabulary is labeled as a collection on home", () => {
  assert.match(appSource, /Bộ từ đã lưu/);
  assert.match(rootAppSource, /Bộ từ đã lưu/);
});

test("saved vocabulary section remains visible on tablet and mobile", () => {
  const mobileHomeStart = styles.indexOf("@media (max-width: 900px)", styles.indexOf("HOME PAGE MOBILE"));
  const mobileHomeEnd = styles.indexOf("@media (max-width: 420px)", mobileHomeStart);
  const mobileHomeStyles = styles.slice(mobileHomeStart, mobileHomeEnd);

  assert.match(mobileHomeStyles, /\.screen-home \.home-desktop-saved-section\s*\{[^}]*display: block !important;/s);
  assert.match(mobileHomeStyles, /\.screen-home \.home-desktop-vocab-grid\s*\{[^}]*repeat\(2, minmax\(0, 1fr\)\)/s);
});

test("saved vocabulary cards keep their complete card styling on compact home layouts", () => {
  const compactCardStyles = styles.slice(styles.lastIndexOf("@media (max-width: 900px)"));

  assert.match(compactCardStyles, /\.screen-home \.home-desktop-vocab-grid\s*\{[^}]*display:\s*grid !important;/s);
  assert.match(compactCardStyles, /\.screen-home \.home-desktop-vocab-card\s*\{[^}]*display:\s*grid !important;[^}]*background:\s*rgba\(255, 255, 255, 0\.94\) !important;/s);
  assert.match(compactCardStyles, /\.screen-home \.home-desktop-vocab-star\s*\{[^}]*border:\s*0 !important;[^}]*color:\s*#f59e0b !important;/s);
  assert.match(compactCardStyles, /\.screen-home \.home-desktop-vocab-speak\.vocab-speak-btn\s*\{[^}]*width:\s*100% !important;[^}]*linear-gradient\(105deg,/s);
});

test("empty saved vocabulary uses the compact glass panel from the responsive reference", () => {
  const compactStyles = styles.slice(styles.lastIndexOf("@media (max-width: 900px)"));

  assert.match(compactStyles, /\.screen-home \.home-desktop-saved-section\s*\{[^}]*padding:\s*14px 16px 16px !important;[^}]*border-radius:\s*20px !important;/s);
  assert.match(compactStyles, /\.screen-home \.home-desktop-link-btn\s*\{[^}]*background:\s*transparent !important;[^}]*box-shadow:\s*none !important;/s);
  assert.match(compactStyles, /\.screen-home \.home-desktop-vocab-empty\s*\{[^}]*min-height:\s*72px !important;[^}]*background:\s*rgba\(255, 255, 255, 0\.78\) !important;/s);
});
