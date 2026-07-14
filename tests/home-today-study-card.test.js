const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const appSource = fs.readFileSync(path.join(__dirname, "..", "public", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(__dirname, "..", "public", "styles.css"), "utf8");
const serveLocal = fs.readFileSync(path.join(__dirname, "..", "serve-local.mjs"), "utf8");
const todayCardSource = appSource.slice(
  appSource.indexOf("function renderHomeTodayStudyCardHTML"),
  appSource.indexOf("function renderHomeDesktopSavedVocabHTML")
);

test("home rail uses a dynamic today study card instead of the static calendar", () => {
  assert.match(appSource, /function renderHomeTodayStudyCardHTML\(isVi\)/);
  assert.match(appSource, /home-today-study-card/);
  assert.match(appSource, /renderHomeTodayStudyCardHTML\(isVi\)/);
  assert.doesNotMatch(appSource, /Tháng 5,\s*2025/);
  assert.doesNotMatch(appSource, /home-calendar-day--active/);
});

test("today study card uses Vietnam date and three requested targets", () => {
  assert.match(appSource, /timeZone:\s*"Asia\/Ho_Chi_Minh"/);
  assert.match(appSource, /HOME_TODAY_TIME_TARGET_SECONDS\s*=\s*30\s*\*\s*60/);
  assert.match(appSource, /HOME_TODAY_VOCAB_TARGET\s*=\s*20/);
  assert.match(appSource, /const savedVocabCount = state\.saved instanceof Set \? state\.saved\.size : 0/);
  assert.match(todayCardSource, /Luyện nghe/);
  assert.match(todayCardSource, /Luyện gõ/);
  assert.match(appSource, /totalCount:\s*3/);
  assert.doesNotMatch(todayCardSource, /Flashcard/);
  assert.doesNotMatch(todayCardSource, /6 mục/);
});

test("today study time is tracked when entering writing and listening screens", () => {
  assert.match(appSource, /function syncHomeTodayStudySession\(nextScreen = state\.screen\)/);
  assert.match(appSource, /function flushHomeTodayStudySession/);
  assert.match(appSource, /if \(screenName === "listening"\) return "listening"/);
  assert.match(appSource, /if \(screenName === "course" \|\| screenName === "practice" \|\| screenName === "complete"\) return "write"/);
  assert.match(appSource, /function setScreen\(name\)\s*\{\s*syncHomeTodayStudySession\(name\)/);
  assert.match(appSource, /beforeunload[\s\S]*flushHomeTodayStudySession/);
  assert.match(appSource, /visibilitychange[\s\S]*flushHomeTodayStudySession/);
});

test("today study card has dedicated checklist styling", () => {
  assert.match(styles, /\.screen-home\s+\.home-today-study-card\s*\{/);
  assert.match(styles, /conic-gradient\(#10b981 calc\(var\(--home-today-progress\) \* 1%\)/);
  assert.match(styles, /\.screen-home\s+\.home-today-study-list li\s*\{[^}]*grid-template-columns:\s*20px minmax\(0,\s*1fr\) auto/s);
  assert.match(styles, /\.screen-home\s+\.home-today-study-list li\.is-done \.home-today-study-check/s);
});

test("local preview serves public assets first to match Netlify publish output", () => {
  assert.match(serveLocal, /path\.resolve\(root,\s*"public",\s*`\.\$\{requested\}`\)/);
  assert.match(serveLocal, /requested === "\/"\) return path\.resolve\(root,\s*"public",\s*"index\.html"\)/);
});
