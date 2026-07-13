const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const assert = require("node:assert/strict");

const repoRoot = path.join(__dirname, "..");
const rootIndex = fs.readFileSync(path.join(repoRoot, "index.html"), "utf8");
const publicIndex = fs.readFileSync(path.join(repoRoot, "public", "index.html"), "utf8");
const appSource = fs.readFileSync(path.join(repoRoot, "public", "app.js"), "utf8");

const heavyLessonScripts = [
  "lesson-hsk2-l1.js",
  "lesson-hsk2-batch-2-5.js",
  "lesson-hsk2-batch-6-10.js",
  "lesson-hsk2-batch-11-15.js",
  "lesson-hsk3-batch-1-5.js",
  "lesson-hsk3-batch-6-10.js",
  "lesson-hsk3-batch-11-15.js",
  "lesson-hsk3-batch-16-20.js",
  "lesson-hsk4-batch-1-5.js",
  "lesson-hsk4-batch-6-10.js",
  "lesson-hsk4-batch-11-15.js",
  "lesson-hsk4-batch-16-20.js",
  "lesson-hsk5-batch-1-6.js",
  "lesson-hsk5-batch-7-12.js",
  "lesson-hsk5-batch-13-18.js",
  "lesson-hsk5-batch-19-24.js",
  "lesson-hsk5-batch-25-30.js",
  "lesson-hsk5-batch-31-36.js",
  "lesson-hsk345-aligned-early.js",
  "lesson-hsk345-aligned-next.js",
  "lesson-hsk345-aligned-final.js",
  "lesson-hsk-remediated.js",
  "lesson-hsk6-l1-word.js",
  "lesson-hsk6-l1-phrase.js",
  "lesson-high-frequency-v1-27-topics.js",
  "listening-app/data/listening-catalog.js",
];

function assertEntryUsesLazyLessonLoading(html, label) {
  assert.match(html, /<script src="app\.js\?v=perf-\d+"\s+defer><\/script>/, `${label} should load the deferred cache-busted app runtime`);
  assert.match(html, /requestIdleCallback\(loadClarity, \{ timeout: 4000 \}\)/, `${label} should delay Clarity until idle`);

  for (const scriptName of heavyLessonScripts) {
    assert.doesNotMatch(html, new RegExp(`<script src=["'](?:\\./)?${scriptName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`), `${label} should not eagerly load ${scriptName}`);
  }
}

test("entry documents keep heavy lesson and listening data out of initial loading", () => {
  assertEntryUsesLazyLessonLoading(rootIndex, "root index.html");
  assertEntryUsesLazyLessonLoading(publicIndex, "public/index.html");
});

test("app runtime lazy-loads HSK level, high-frequency, and listening catalog data", () => {
  assert.match(appSource, /const hskLevelContentScripts\s*=\s*\{/);
  for (const level of ["hsk1", "hsk2", "hsk3", "hsk4", "hsk5", "hsk6"]) {
    assert.match(appSource, new RegExp(`lesson-${level}-word-sentence-audit\\.js`));
  }
  assert.match(appSource, /async function ensureHskLevelContent\(levelKey\)/);
  assert.match(appSource, /function prefetchHskLevelContent\(levelKey\)/);
  assert.match(appSource, /const HIGH_FREQUENCY_TOPICS_SCRIPT_SRC\s*=\s*"lesson-high-frequency-v1-27-topics\.js"/);
  assert.match(appSource, /const LISTENING_CATALOG_SCRIPT_SRC\s*=\s*"listening-app\/data\/listening-catalog\.js\?v=20260704"/);
  assert.match(appSource, /function ensureListeningCatalogLoaded\(options = \{\}\)/);
  assert.match(appSource, /function warmStartupDataAfterFirstPaint\(\)/);
  assert.match(appSource, /renderHome\(\);\s*setScreen\("home"\);/);
  assert.match(appSource, /warmStartupDataAfterFirstPaint\(\);\s*}\s*init\(\);/);
});
