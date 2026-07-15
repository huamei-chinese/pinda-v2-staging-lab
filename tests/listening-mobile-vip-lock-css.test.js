const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.join(__dirname, "..");
const mobileCss = fs.readFileSync(path.join(root, "public", "mobile.css"), "utf8");
const stylesCss = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");
const indexHtml = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");

test("mobile listening locked content shows a clear VIP state", () => {
  assert.match(
    mobileCss,
    /@media \(max-width:\s*640px\) \{[\s\S]*\.screen-listening \.listening-content-locked\s*\{[\s\S]*opacity:\s*1 !important;[\s\S]*filter:\s*none !important;/,
  );
  assert.match(
    mobileCss,
    /\.screen-listening \.listening-content-locked \.listening-topic-card-v2-arrow::after,[\s\S]*\.screen-listening \.listening-content-locked \.listening-lesson-arrow::after\s*\{[\s\S]*content:\s*none !important;[\s\S]*display:\s*none !important;/,
  );
  assert.doesNotMatch(mobileCss, /content:\s*"VIP" !important;/);
  assert.match(
    mobileCss,
    /#listeningScreen \.app-desktop-shell--listening:has\(\.listening-lessons-screen\) \.listening-lesson-row\.listening-content-locked\s*\{[\s\S]*grid-template-columns:\s*56px minmax\(0,\s*1fr\) 0 !important;[\s\S]*rgba\(251,\s*146,\s*60,\s*0\.58\)/,
  );
  assert.match(
    mobileCss,
    /\.screen-listening \.listening-content-locked \.listening-locked-flame\s*\{[\s\S]*background:\s*#ffffff url\("assets\/content-lock-icon\.png"\) center \/ 72% no-repeat !important;/,
  );
  assert.match(
    stylesCss,
    /\.listening-content-locked\s*\{[\s\S]*opacity:\s*1 !important;[\s\S]*filter:\s*none !important;[\s\S]*rgba\(251,\s*191,\s*36,\s*0\.26\)/,
  );
  assert.match(
    stylesCss,
    /@media \(min-width:\s*641px\) \{[\s\S]*#listeningScreen \.app-desktop-shell--listening \.listening-content-locked,[\s\S]*rgba\(251,\s*146,\s*60,\s*0\.48\)[\s\S]*rgba\(251,\s*191,\s*36,\s*0\.24\)/,
  );
  assert.match(
    stylesCss,
    /#listeningScreen \.app-desktop-shell--listening:has\(\.listening-lessons-screen\) \.listening-lesson-row\.listening-content-locked::before\s*\{[\s\S]*#fb923c[\s\S]*#f59e0b[\s\S]*#fbbf24/,
  );
  assert.match(
    stylesCss,
    /\.listening-content-locked \.listening-topic-card-v2-arrow::after,[\s\S]*\.listening-content-locked \.listening-lesson-arrow::after\s*\{[\s\S]*content:\s*none !important;[\s\S]*display:\s*none !important;/,
  );
});

test("mobile stylesheet cache key is current", () => {
  assert.match(indexHtml, /mobile\.css\?v=listening-vip-lock-orange-20260715/);
});
