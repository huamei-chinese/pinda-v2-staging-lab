const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.resolve(__dirname, "..");
const mobileCss = fs.readFileSync(path.join(root, "public", "mobile.css"), "utf8");
const publicIndex = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");
const publicApp = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");

test("practice mobile layout keeps the answer card compact", () => {
  assert.match(
    mobileCss,
    /#practiceScreen \.exercise-card\s*\{[\s\S]*min-height:\s*clamp\(210px,\s*31dvh,\s*300px\)/,
  );
  assert.match(
    mobileCss,
    /#practiceScreen \.function-dock #nextBtn,[\s\S]*height:\s*clamp\(28px,\s*9\.2vw,\s*38px\)/,
  );
});

test("practice mobile sentence layout wraps compactly", () => {
  assert.match(publicApp, /screens\.practice\.dataset\.practiceStage\s*=\s*practiceStage/);
  assert.match(
    mobileCss,
    /#practiceScreen\[data-practice-stage="sentence"\] \.slot-row\s*\{[\s\S]*flex-wrap:\s*wrap;/,
  );
  assert.match(
    mobileCss,
    /#practiceScreen\[data-practice-stage="sentence"\] \.memory-panel\s*\{[\s\S]*max-height:\s*clamp\(92px,\s*21dvh,\s*128px\)/,
  );
});

test("practice mobile css cache key is bumped", () => {
  assert.match(publicIndex, /mobile\.css\?v=practice-mobile-compact-20260714/);
  assert.match(publicIndex, /app\.js\?v=practice-stage-responsive-20260714/);
});
