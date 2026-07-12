const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const styles = fs.readFileSync(path.join(__dirname, "..", "public", "styles.css"), "utf8");

test("home writing duo card uses the supplied writing background with readable overlay", () => {
  assert.match(
    styles,
    /\.screen-home \.home-duo-card--write,[\s\S]*\.screen-home \.home-desktop-module-card\.home-duo-card--write\s*\{[\s\S]*url\("assets\/backgroundluyenviet-optimized\.jpg"\) center \/ cover no-repeat !important;/,
  );
  assert.match(styles, /\.screen-home \.home-duo-card--write \.home-duo-card-bg\s*\{[\s\S]*radial-gradient\(circle at 83% 18%/);
  assert.match(styles, /\.screen-home \.home-duo-card--write \.home-duo-btn\s*\{[\s\S]*color:\s*#047857 !important;[\s\S]*background:\s*rgba\(240,\s*253,\s*250,\s*0\.96\) !important;/i);
});
