const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.join(__dirname, "..");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");
const indexHtml = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");

test("home desktop profile card keeps account details visible on desktop widths", () => {
  assert.match(styles, /Home desktop profile responsive fit/);
  assert.match(styles, /grid-template-areas:[\s\S]*"avatar copy"[\s\S]*"badge badge"[\s\S]*"member member"/);
  assert.match(styles, /\.screen-home \.home-desktop-profile-card--regular \.home-desktop-profile-copy > strong[\s\S]*white-space:\s*normal/);
  assert.match(styles, /\.screen-home \.home-desktop-profile-card--regular \.home-desktop-level-badge[\s\S]*white-space:\s*normal/);
  assert.match(styles, /\.screen-home \.home-desktop-membership-perks[\s\S]*flex-wrap:\s*wrap/);
  assert.match(styles, /grid-template-columns:\s*minmax\(0, 1fr\) clamp\(282px, 24vw, 330px\)/);
  assert.match(indexHtml, /styles\.css\?v=auth-forgot-under-password-20260717/);
});
