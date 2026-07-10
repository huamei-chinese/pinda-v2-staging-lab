const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.resolve(__dirname, "..");
const appSource = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");

test("listening lesson rows put lesson numbers in the leading play slot", () => {
  const renderMatch = appSource.match(/function renderListeningLevelLessons\(options = \{\}\) \{[\s\S]*?function renderListeningRepeatLesson/);
  const renderBlock = renderMatch?.[0] || "";

  assert.match(renderBlock, /listening-lesson-play listening-lesson-number/);
  assert.match(renderBlock, /\$\{lesson\.no\}/);
  assert.doesNotMatch(renderBlock, /<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M8 5v14l11-7z"\/><\/svg>/);
  assert.doesNotMatch(renderBlock, /<em>\$\{lesson\.no\}<\/em>/);
});

test("leading lesson number badge is styled separately from play icons", () => {
  assert.match(styles, /Final listening lesson number badge/);
  assert.match(styles, /\.listening-lesson-play\.listening-lesson-number\s*\{[\s\S]*font-size: 18px !important/);
});
