const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const styles = fs.readFileSync(path.join(__dirname, "..", "public", "styles.css"), "utf8");
const appSource = fs.readFileSync(path.join(__dirname, "..", "public", "app.js"), "utf8");

test("home listening duo card uses the supplied listening artwork background", () => {
  assert.match(
    styles,
    /\.screen-home \.home-duo-card--listen,[\s\S]*\.screen-home \.home-desktop-module-card\.home-duo-card--listen\s*\{[\s\S]*rgba\(249,\s*115,\s*22,\s*0\.2\)[\s\S]*url\("assets\/backgroundluyennghe\.png"\)[\s\S]*\}/i,
  );
  assert.match(appSource, /home-duo-art home-duo-art--listen[\s\S]*<img src="assets\/home-module-listening1\.png"/);
  assert.match(styles, /\.screen-home \.home-duo-card--listen \.home-duo-btn\s*\{[\s\S]*color:\s*#c2410c !important;[\s\S]*background:\s*rgba\(255,\s*247,\s*237,\s*0\.96\) !important;/i);
  assert.match(styles, /\.screen-home \.home-duo-card--listen \.home-duo-badge\s*\{[\s\S]*background:\s*rgba\(255,\s*237,\s*213,\s*0\.18\) !important;/i);
});
