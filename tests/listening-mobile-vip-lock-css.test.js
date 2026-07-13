const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.join(__dirname, "..");
const mobileCss = fs.readFileSync(path.join(root, "public", "mobile.css"), "utf8");
const indexHtml = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");

test("mobile listening locked content shows a clear VIP state", () => {
  assert.match(
    mobileCss,
    /@media \(max-width:\s*640px\) \{[\s\S]*\.screen-listening \.listening-content-locked\s*\{[\s\S]*opacity:\s*1 !important;[\s\S]*filter:\s*none !important;/,
  );
  assert.match(
    mobileCss,
    /\.screen-listening \.listening-content-locked \.listening-topic-card-v2-arrow::after,[\s\S]*\.screen-listening \.listening-content-locked \.listening-lesson-arrow::after\s*\{[\s\S]*content:\s*"VIP" !important;/,
  );
  assert.match(
    mobileCss,
    /#listeningScreen \.app-desktop-shell--listening:has\(\.listening-lessons-screen\) \.listening-lesson-row\.listening-content-locked\s*\{[\s\S]*grid-template-columns:\s*56px minmax\(0,\s*1fr\) 58px !important;/,
  );
  assert.match(
    mobileCss,
    /\.screen-listening \.listening-content-locked \.listening-locked-flame\s*\{[\s\S]*background:\s*#ffffff url\("assets\/content-lock-icon\.png"\) center \/ 72% no-repeat !important;/,
  );
});

test("mobile stylesheet cache is busted for the VIP lock CSS", () => {
  assert.match(indexHtml, /mobile\.css\?v=mobile-vip-lock-20260713/);
});
