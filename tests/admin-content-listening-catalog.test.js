const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.join(__dirname, "..");
const appSource = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const netlifyApiSource = fs.readFileSync(path.join(root, "netlify", "functions", "api.mjs"), "utf8");
const contentServiceSource = fs.readFileSync(path.join(root, "src", "content", "content.service.ts"), "utf8");

test("admin content uses API listening catalog rows for the lock UI", () => {
  assert.match(appSource, /adminListeningCatalogTopics:\s*\[\]/);
  assert.match(appSource, /adminListeningCatalogLessons:\s*\[\]/);
  assert.match(appSource, /state\.adminListeningCatalogTopics = listeningData\.topics \|\| \[\];/);
  assert.match(appSource, /state\.adminListeningCatalogLessons = listeningData\.lessons \|\| \[\];/);
  assert.match(appSource, /if \(Array\.isArray\(state\.adminListeningCatalogTopics\) && state\.adminListeningCatalogTopics\.length > 0\)/);
});

test("admin listening lock titles localize from the current catalog", () => {
  assert.match(appSource, /function getAdminLocalizedCatalogTitle/);
  assert.match(appSource, /titleZh:\s*topic\.titleZh/);
  assert.match(appSource, /titleZh:\s*lesson\.titleZh/);
  assert.match(appSource, /const topicTitle = getAdminLocalizedCatalogTitle\(topic, isVi, topic\.topicId\)/);
  assert.match(appSource, /const lessonTitle = getAdminLocalizedCatalogTitle\(lesson, isVi, lesson\.lessonId\)/);
  assert.match(appSource, /const selectedTopicTitle = selectedTopic \? getAdminLocalizedCatalogTitle\(selectedTopic, isVi, selectedTopic\.topicId\) : ""/);
});

test("listening lock API keeps titles refreshed from catalog instead of stale DB rows", () => {
  for (const source of [netlifyApiSource, contentServiceSource]) {
    assert.match(source, /titleZh:\s*existingTopic\?\.titleZh/);
    assert.match(source, /titleZh:\s*existingLesson\?\.titleZh/);
    assert.match(source, /titleVi:\s*base\?\.titleVi \|\| row\.title_vi/);
    assert.match(source, /titleZh:\s*base\?\.titleZh \|\| base\?\.titleVi \|\| row\.title_vi/);
    assert.match(source, /sortOrder:\s*Number\(base\?\.sortOrder \|\| row\.sort_order \|\| 0\)/);
  }
});

test("switching to the listening admin module reloads missing catalog rows", () => {
  assert.match(appSource, /state\.adminContentModule === "listening" && !state\.adminListeningCatalogTopics\.length/);
  assert.match(appSource, /loadAdminContentLocks\(\);/);
});
