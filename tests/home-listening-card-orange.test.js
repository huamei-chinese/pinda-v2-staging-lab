const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const styles = fs.readFileSync(path.join(__dirname, "..", "public", "styles.css"), "utf8");
const appSource = fs.readFileSync(path.join(__dirname, "..", "public", "app.js"), "utf8");

test("home listening duo card uses optimized listening artwork with a readable blue wash", () => {
  assert.match(
    styles,
    /\.screen-home \.home-duo-card--listen,[\s\S]*\.screen-home \.home-desktop-module-card\.home-duo-card--listen\s*\{[\s\S]*rgba\(7,\s*89,\s*133,\s*0\.5\)[\s\S]*rgba\(14,\s*165,\s*233,\s*0\.5\)[\s\S]*url\("assets\/backgroundluyennghe-optimized\.jpg"\) center \/ cover no-repeat !important;/i,
  );
  assert.match(appSource, /home-duo-art home-duo-art--listen[\s\S]*<img src="assets\/home-module-listening1-optimized\.jpg"/);
  assert.match(styles, /\.screen-home \.home-duo-card--listen \.home-duo-card-bg\s*\{[\s\S]*rgba\(7,\s*89,\s*133,\s*0\.18\)[\s\S]*rgba\(14,\s*165,\s*233,\s*0\.12\)/i);
  assert.match(styles, /\.screen-home \.home-duo-card--listen \.home-duo-btn\s*\{[\s\S]*color:\s*#0369a1 !important;[\s\S]*background:\s*rgba\(240,\s*249,\s*255,\s*0\.96\) !important;/i);
  assert.match(styles, /\.screen-home \.home-duo-card--listen \.home-duo-badge\s*\{[\s\S]*background:\s*rgba\(14,\s*165,\s*233,\s*0\.18\) !important;/i);
});
