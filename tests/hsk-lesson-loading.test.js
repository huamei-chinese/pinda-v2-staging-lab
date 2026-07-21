const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.join(__dirname, "..");
const appSources = [
  fs.readFileSync(path.join(repoRoot, "app.js"), "utf8"),
  fs.readFileSync(path.join(repoRoot, "public", "app.js"), "utf8"),
];
const legacyAppSource = appSources[0];
const publicAppSource = appSources[1];
const styles = fs.readFileSync(path.join(repoRoot, "public", "styles.css"), "utf8");

test("HSK lesson clicks are guarded and wait for a loading paint before opening", () => {
  appSources.forEach((source) => {
    assert.match(source, /hsk-lesson-loading-spinner/);
    assert.match(source, /lessonBtn\.classList\.contains\("is-loading"\)/);
    assert.match(source, /setTimeout\(resolve, 320\)/);
  });
  assert.match(legacyAppSource, /setHskLessonCardLoading\(lessonBtn, true\)/);
});

test("opening an HSK lesson shows the full loading card while access APIs resolve", () => {
  assert.match(publicAppSource, /function renderHskLessonOpenLoading\(options = \{\}\)/);
  assert.match(publicAppSource, /renderHskLessonOpenLoading\(\);\s*await waitForHskLessonLoadingPaint\(\);\s*await refreshContentLocksIfStale/);
  assert.match(publicAppSource, /Đang mở bài học\.\.\./);
  assert.match(publicAppSource, /renderLessonLoadingHTML\(\{/);
});

test("opening an HSK study part keeps the full loader visible while access APIs resolve", () => {
  assert.match(publicAppSource, /renderHskLessonOpenLoading\(\{ contentType: nextContentType \}\);\s*await waitForHskLessonLoadingPaint\(\);\s*await refreshContentLocksIfStale/);
  assert.match(publicAppSource, /Đang chuẩn bị từ vựng\.\.\./);
  assert.match(publicAppSource, /Đang chuẩn bị phần câu\.\.\./);
  assert.match(publicAppSource, /renderHskCourse\(\);\s*promptHskLessonLocked\(\);/);
});

test("HSK lesson loading uses a spinner, progress track, and reduced-motion fallback", () => {
  assert.match(styles, /\.hsk-lesson-card\.is-loading::after/);
  assert.match(styles, /@keyframes hsk-lesson-loading-spin/);
  assert.match(styles, /@keyframes hsk-lesson-loading-track/);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/);
});
