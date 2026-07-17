const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.join(__dirname, "..");
const appSource = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const stylesSource = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");
const indexHtml = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");

test("complete screen trophy shakes like a gif and plays a celebration tone", () => {
  assert.match(appSource, /playTone\("celebration"\)/);
  assert.match(stylesSource, /completeTrophyWiggle/);
  assert.match(stylesSource, /completeTrophyCupJiggle/);
  assert.match(stylesSource, /completeTrophySparkBurst/);
  assert.match(stylesSource, /completeTrophyHalo/);
  assert.match(stylesSource, /\.complete-card--reward \.trophy\s*\{[\s\S]*completeTrophyWiggle/);
  assert.match(indexHtml, /styles\.css\?v=auth-forgot-under-password-20260717/);
  assert.match(indexHtml, /sound-effects\.js\?v=home-profile-responsive-fit-20260716/);
  assert.match(indexHtml, /app\.js\?v=auth-forgot-under-password-20260717/);
});
