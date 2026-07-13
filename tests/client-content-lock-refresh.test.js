const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.join(__dirname, "..");
const appSource = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const contentServiceSource = fs.readFileSync(path.join(root, "src", "content", "content.service.ts"), "utf8");

test("public HSK locks include absolute locked lessons, not only free limits", () => {
  assert.match(contentServiceSource, /SELECT lesson_id, free_item_limit, free_word_limit, free_sentence_limit, locked_for_free/);
  assert.match(contentServiceSource, /WHERE locked_for_free = TRUE OR free_item_limit > 0 OR free_word_limit > 0 OR free_sentence_limit > 0/);
  assert.match(contentServiceSource, /lockedForFree: row\.locked_for_free === true/);
  assert.doesNotMatch(contentServiceSource, /publicHskLocksCache/);
});

test("client content-lock API calls bypass browser cache", () => {
  assert.match(appSource, /const shouldBypassCache = \/\^\\\/api\\\/\(\?:content\|admin\\\/content\)\\\//);
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
