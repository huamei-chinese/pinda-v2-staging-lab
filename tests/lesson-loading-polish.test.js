const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const appSource = fs.readFileSync(path.join(__dirname, "..", "public", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(__dirname, "..", "public", "styles.css"), "utf8");

test("lesson loading states share the polished animated loader", () => {
  assert.match(appSource, /function renderLessonLoadingHTML\(/);
  assert.match(appSource, /lesson-loading-card--\$\{isListening \? "listen" : "write"\}/);
  assert.match(appSource, /renderListeningCatalogLoading[\s\S]*renderLessonLoadingHTML\(\{ variant: "listen" \}\)/);
  assert.match(appSource, /hskLevelContentScripts\[state\.level\][\s\S]*renderLessonLoadingHTML\(\{ variant: "write" \}\)/);
});

test("lesson loading CSS has distinct write and listen treatments", () => {
  assert.match(styles, /\.lesson-loading-card\s*\{[\s\S]*backdrop-filter:\s*blur\(18px\)/);
  assert.match(styles, /\.lesson-loading-card--write\s*\{[\s\S]*--lesson-loading-primary:\s*#16a34a/);
  assert.match(styles, /\.lesson-loading-card--listen\s*\{[\s\S]*--lesson-loading-secondary:\s*#8b5cf6/);
  assert.match(styles, /@keyframes lessonLoadingSpin/);
  assert.match(styles, /@media \(prefers-reduced-motion:\s*reduce\)/);
});
