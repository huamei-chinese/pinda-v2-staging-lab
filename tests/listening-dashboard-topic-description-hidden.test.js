const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.resolve(__dirname, "..");
const appSource = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");

test("listening dashboard topic cards do not render repeated level descriptions", () => {
  const cardsTemplate = appSource.match(/const cardsHTML = allTopicCards\.map[\s\S]*?\.join\(""\);/)?.[0] || "";
  assert.match(cardsTemplate, /listening-topic-card-v2-copy/);
  assert.match(cardsTemplate, /<strong>\$\{escapeHtml\(isVi \? topic\.titleVi : topic\.titleZh\)\}<\/strong>/);
  assert.doesNotMatch(cardsTemplate, /topic\.descVi/);
  assert.doesNotMatch(cardsTemplate, /topic\.descZh/);
});
