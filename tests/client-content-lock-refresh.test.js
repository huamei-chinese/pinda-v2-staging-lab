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
const subscriptionsHtmlSource = fs.readFileSync(path.join(root, "public", "subscriptions.html"), "utf8");

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
  assert.match(indexHtmlSource, /practice-rules\.js\?v=static-cache-20260714/);
  assert.match(indexHtmlSource, /speech-config\.js\?v=static-cache-20260714/);
  assert.match(indexHtmlSource, /lesson-new-format-loader\.js\?v=vocab-audio-catalog-20260714/);
  assert.match(indexHtmlSource, /app\.js\?v=analytics-kpi-cards-20260716/);
  assert.match(indexHtmlSource, /asset-config\.js/);
  assert.match(adminV2HtmlSource, /admin-v2\.css\?v=static-cache-20260714/);
  assert.match(adminV2HtmlSource, /admin-v2\.js\?v=admin-locks-20260713/);
  assert.match(subscriptionsHtmlSource, /subscriptions\.css\?v=static-cache-20260714/);
  assert.match(subscriptionsHtmlSource, /subscriptions\.js\?v=static-cache-20260714/);
});

test("Railway Nest content lock endpoints self-heal schema and disable cache", () => {
  assert.match(contentServiceSource, /CREATE TABLE IF NOT EXISTS hsk_lesson_locks/);
  assert.match(contentServiceSource, /CREATE TABLE IF NOT EXISTS daily_theme_locks/);
  assert.match(databaseServiceSource, /CREATE TABLE IF NOT EXISTS listening_topic_locks/);
  assert.match(databaseServiceSource, /CREATE TABLE IF NOT EXISTS listening_lesson_locks/);
  assert.match(contentControllerSource, /@Header\('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate'\)/);
  assert.match(adminContentControllerSource, /@Header\('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate'\)/);
});

test("Railway custom domains cache static assets while keeping HTML and runtime config fresh", () => {
  assert.match(appModuleSource, /serveStaticOptions/);
  assert.match(appModuleSource, /NO_STORE_CACHE_CONTROL = 'no-store, no-cache, must-revalidate, proxy-revalidate'/);
  assert.match(appModuleSource, /LONG_LIVED_STATIC_CACHE_CONTROL = 'public, max-age=31536000, immutable'/);
  assert.match(appModuleSource, /SHORT_LIVED_RUNTIME_CACHE_CONTROL = 'public, max-age=0, must-revalidate'/);
  assert.match(appModuleSource, /fileName === 'asset-config\.js'/);
  assert.match(appModuleSource, /\['app\.js', 'styles\.css', 'subscriptions\.js', 'admin-v2\.js'\]\.includes\(fileName\)/);
  assert.match(appModuleSource, /\\\.html\$\/i\.test\(filePath\)/);
  assert.match(appModuleSource, /\(\?:js\|css\|json\|png\|jpe\?g\|webp\|svg\|mp3\|wav\|ogg\|ttf\|woff2\?\)/);
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
  assert.match(appSource, /function showFastVipPromptIfKnownLocked\(isLocked, promptFn = promptUpgradeLocked\)/);
  assert.match(appSource, /if \(showFastVipPromptIfKnownLocked\(isHskLessonLockedForUser\(lessonId\), promptHskLessonLocked\)\) return;\s*await refreshContentLocksIfStale\(0, \{ force: true \}\);/);
  assert.match(appSource, /if \(showFastVipPromptIfKnownLocked\(isDailyThemeLockedForUser\(themeId\)\)\) return;\s*await refreshContentLocksIfStale\(0, \{ force: true \}\);/);
  assert.match(appSource, /if \(showFastVipPromptIfKnownLocked\(isListeningContentLocked\(topicId, lessonId\), showListeningLockedMessage\)\) return;\s*await refreshContentLocksIfStale\(0, \{ force: true \}\);/);
  assert.match(appSource, /await refreshContentLocksIfStale\(0, \{ force: true \}\);\s*if \(isHskLessonLockedForUser\(lessonId\)\)/);
  assert.match(appSource, /await refreshContentLocksIfStale\(0, \{ force: true \}\);\s*if \(isDailyThemeLockedForUser\(themeId\)\)/);
  assert.match(appSource, /await refreshContentLocksIfStale\(0, \{ force: true \}\);\s*if \(isListeningContentLocked\(topicId, lessonId\)\)/);
  assert.match(appSource, /accessData\.hskLessonLocks/);
});

test("VIP upgrade modal paints before rendering plan cards", () => {
  assert.match(appSource, /document\.body\.appendChild\(modalDiv\);/);
  assert.match(appSource, /const scheduleAfterModalPaint = \(callback\) => \{[\s\S]*requestAnimationFrame\(\(\) => setTimeout\(callback, 0\)\);/);
  assert.match(appSource, /scheduleAfterModalPaint\(\(\) => \{[\s\S]*renderFallbackPlans\(\);[\s\S]*loadPaymentPlans\(\)/);
});

test("daily partial badge only remains on housing or moving theme cards", () => {
  assert.match(appSource, /function shouldShowPartialAccessBadge\(context = \{\}\)/);
  assert.match(appSource, /if \(context\.type !== "daily-theme"\) return true;/);
  assert.match(appSource, /id === "housing"[\s\S]*id === "renting_life"[\s\S]*id === "renting"/);
  assert.match(appSource, /title\.includes\("thuê nhà"\) && \(title\.includes\("chuyển nhà"\) \|\| title\.includes\("sinh hoạt"\)\)/);
  assert.match(appSource, /accessStatusBadgeHTML\(accessStatus, \{ type: "daily-theme", theme, config \}\)/);
  assert.match(appSource, /if \(!shouldShowPartialAccessBadge\(context\)\) return "";/);
});
