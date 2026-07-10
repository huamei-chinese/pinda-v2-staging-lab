const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.resolve(__dirname, "..");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");

test("mobile home topics section is hidden", () => {
  assert.match(styles, /Hide the mobile home topic list below the learning cards/);
  assert.match(styles, /#homeScreen \.home-mobile-only-block \.home-mobile-topics-section/);
  assert.match(styles, /\.home-desktop-main > \.home-mobile-only-block > \.home-mobile-topics-section/);
  assert.match(styles, /\.home-mobile-only-block \.home-mobile-topics-head/);
  assert.match(styles, /\.home-mobile-only-block \.home-mobile-topics-list/);
  assert.match(styles, /display: none !important/);
});
