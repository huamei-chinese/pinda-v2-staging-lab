const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.join(__dirname, "..");
const detailCss = fs.readFileSync(path.join(repoRoot, "public", "listening-app", "listening-detail.css"), "utf8");
const serverSource = fs.readFileSync(path.join(repoRoot, "server.js"), "utf8");
const fallbackPath = path.join(repoRoot, "public", "listening-app", "typing-detail-fallback.html");

test("mobile listening detail hides the desktop sidebar to avoid horizontal overflow", () => {
  const mobileBlock = detailCss.match(/@media \(max-width:\s*900px\)\s*\{([\s\S]*?)\n\}/)?.[1] || "";
  assert.match(mobileBlock, /\.sidebar\s*\{[^}]*display:\s*none/s);
  assert.match(mobileBlock, /\.lesson-shell\s*\{[^}]*overflow-x:\s*hidden/s);
});

test("local lab serves a static typing fallback for exported episode routes", () => {
  assert.match(serverSource, /\/listening-app\/typing\/ep-/);
  assert.match(serverSource, /typing-detail-fallback\.html/);
  assert.equal(fs.existsSync(fallbackPath), true, "typing-detail-fallback.html should exist");

  const fallbackHtml = fs.readFileSync(fallbackPath, "utf8");
  assert.match(fallbackHtml, /data-listening-typing-fallback/);
  assert.match(fallbackHtml, /id="typing-answer"/);
  assert.match(fallbackHtml, /data-answer="tong guo"/);
  assert.match(fallbackHtml, /index = \(index \+ 1\) % words\.length/);
  assert.match(fallbackHtml, /Correct\. Continue to the next word\./);
  assert.match(fallbackHtml, /bottom-nav/);
});
