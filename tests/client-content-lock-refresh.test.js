const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.join(__dirname, "..");
const appSource = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const contentServiceSource = fs.readFileSync(path.join(root, "src", "content", "content.service.ts"), "utf8");
const contentControllerSource = fs.readFileSync(path.join(root, "src", "content", "content.controller.ts"), "utf8");
const adminContentControllerSource = fs.readFileSync(path.join(root, "src", "admin", "admin-content.controller.ts"), "utf8");
const databaseServiceSource = fs.readFileSync(path.join(root, "src", "database", "database.service.ts"), "utf8");
const appModuleSource = fs.readFileSync(path.join(root, "src", "app.module.ts"), "utf8");
const netlifyApiSource = fs.readFileSync(path.join(root, "netlify", "functions", "api.mjs"), "utf8");
const indexHtmlSource = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");
const adminV2HtmlSource = fs.readFileSync(path.join(root, "public", "admin-v2.html"), "utf8");

test("public HSK locks include absolute locked lessons, not only free limits", () => {
  assert.match(contentServiceSource, /SELECT lesson_id, free_item_limit, free_word_limit, free_sentence_limit, locked_for_free/);
  assert.match(contentServiceSource, /WHERE locked_for_free = TRUE OR free_item_limit > 0 OR free_word_limit > 0 OR free_sentence_limit > 0/);
  assert.match(contentServiceSource, /lockedForFree: row\.locked_for_free === true/);
  assert.doesNotMatch(contentServiceSource, /publicHskLocksCache/);
});

test("Netlify HSK lock endpoint matches the app backend contract", () => {
  assert.match(netlifyApiSource, /SELECT lesson_id, free_item_limit, free_word_limit, free_sentence_limit, locked_for_free/);
  assert.match(netlifyApiSource, /WHERE locked_for_free = TRUE OR free_item_limit > 0 OR free_word_limit > 0 OR free_sentence_limit > 0/);
  assert.match(netlifyApiSource, /lockedForFree: row\.locked_for_free === true/);
  assert.match(netlifyApiSource, /const effectiveLockedForFree = lockedForFree;/);
});

test("public admin scripts use deploy cache busters", () => {
  assert.match(indexHtmlSource, /app\.js\?v=railway-vip-locks-20260713/);
  assert.match(adminV2HtmlSource, /admin-v2\.js\?v=admin-locks-20260713/);
});

test("Railway Nest content lock endpoints self-heal schema and disable cache", () => {
  assert.match(contentServiceSource, /CREATE TABLE IF NOT EXISTS hsk_lesson_locks/);
  assert.match(contentServiceSource, /CREATE TABLE IF NOT EXISTS daily_theme_locks/);
  assert.match(databaseServiceSource, /CREATE TABLE IF NOT EXISTS listening_topic_locks/);
  assert.match(databaseServiceSource, /CREATE TABLE IF NOT EXISTS listening_lesson_locks/);
  assert.match(contentControllerSource, /@Header\('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate'\)/);
  assert.match(adminContentControllerSource, /@Header\('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate'\)/);
});

test("Railway custom domains revalidate app shell assets after deploy", () => {
  assert.match(appModuleSource, /serveStaticOptions/);
  assert.match(appModuleSource, /\(\?:html\|js\|css\)/);
  assert.match(appModuleSource, /Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate'/);
});

test("client content-lock API calls bypass browser cache", () => {
  assert.match(appSource, /const shouldBypassCache = \/\^\\\/api\\\/\(\?:content\|admin\\\/content\)\\\//);
  assert.match(appSource, /\^\\\/api\\\/users\\\/\[\^\/]\+\\\/status\(\?:\\\?\|\$\)/);
  assert.match(appSource, /\^\\\/api\\\/payments\\\/orders\\\/\[\^\/]\+\\\/status\(\?:\\\?\|\$\)/);
  assert.match(appSource, /cache: shouldBypassCache \? "no-store" : options\.cache/);
  assert.match(appSource, /"Cache-Control": "no-cache"/);
});

test("client refreshes locks before opening locked-sensitive content", () => {
  assert.match(appSource, /async function refreshContentLocksIfStale/);
  assert.match(appSource, /await refreshContentLocksIfStale\(0, \{ force: true \}\);\s*if \(isHskLessonLockedForUser\(lessonId\)\)/);
  assert.match(appSource, /await refreshContentLocksIfStale\(0, \{ force: true \}\);\s*if \(isDailyThemeLockedForUser\(themeId\)\)/);
  assert.match(appSource, /await refreshContentLocksIfStale\(0, \{ force: true \}\);\s*if \(isListeningContentLocked\(topicId, lessonId\)\)/);
  assert.match(appSource, /accessData\.hskLessonLocks/);
});
