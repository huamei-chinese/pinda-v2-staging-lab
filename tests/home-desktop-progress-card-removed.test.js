const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const appSource = fs.readFileSync(path.join(__dirname, "..", "public", "app.js"), "utf8");

test("desktop home rail does not render the progress overview card", () => {
  const renderMatch = appSource.match(/function renderHomeDesktopLayoutHTML\(isVi\) \{[\s\S]*?function renderHomeMobileTopbarHTML/);
  const renderBlock = renderMatch?.[0] || "";

  assert.doesNotMatch(renderBlock, /home-desktop-stats-card/);
  assert.doesNotMatch(renderBlock, /Tổng quan tiến độ|进度总览/);
  assert.match(renderBlock, /renderHomeTodayStudyCardHTML\(isVi\)/);
});
