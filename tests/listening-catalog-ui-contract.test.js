const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.join(__dirname, "..");
const packageJson = require("../package.json");
const rootIndex = fs.readFileSync(path.join(repoRoot, "index.html"), "utf8");
const publicIndex = fs.readFileSync(path.join(repoRoot, "public", "index.html"), "utf8");
const appSource = fs.readFileSync(path.join(repoRoot, "public", "app.js"), "utf8");

function assertCatalogLoadedBeforeApp(html) {
  const catalogIndex = html.indexOf("listening-app/data/listening-catalog.js");
  const appIndex = html.search(/app\.js\?v=[^"']+/);

  assert.ok(catalogIndex > 0, "listening catalog data script should be loaded");
  assert.ok(appIndex > 0, "app.js should be loaded");
  assert.ok(catalogIndex < appIndex, "listening catalog data should load before app.js");
}

test("SPA entries load the listening catalog data before the UI runtime", () => {
  assertCatalogLoadedBeforeApp(rootIndex);
  assertCatalogLoadedBeforeApp(publicIndex);
});

test("listening UI reads catalog data without putting imported topic ids in app.js", () => {
  assert.match(appSource, /globalThis\.pindaListeningCatalog/);
  assert.match(appSource, /function catalogLessonToListeningItem/);
  assert.match(appSource, /titleAudioSrc/);
  assert.match(appSource, /monologue-other/);
  assert.doesNotMatch(appSource, /topic-chat-with-chinese-001/);
  assert.doesNotMatch(appSource, /topic-newspaper-entertainment-001/);
});

test("catalog mode does not append legacy listeningContentMap episodes into learner paths", () => {
  assert.doesNotMatch(appSource, /oldContentToListeningEpisode/);
  assert.doesNotMatch(appSource, /Object\.values\(listeningContentMap\)\.forEach/);
});

test("catalog level rows can be intentionally empty without falling back to demo lessons", () => {
  assert.match(appSource, /function getCatalogLevelRows/);
  assert.match(appSource, /const catalogLevelRows = getCatalogLevelRows\(levelId\);/);
  assert.match(appSource, /if \(catalogLevelRows\) return catalogLevelRows;/);
});

test("listening playback starts with title audio before the main lesson audio", () => {
  assert.match(appSource, /function playListeningTitleThenMain/);
  assert.match(appSource, /titleAudioSrc/);
  assert.match(appSource, /const initialAudioSrc = episode\.titleAudioSrc \|\| episode\.audioSrc;/);
  assert.match(appSource, /data-listening-audio-phase/);
  assert.match(appSource, /listeningAudioPhase/);
  assert.match(appSource, /prepareListeningTitleAudio/);
  assert.match(appSource, /prepareListeningMainAudio/);
});

test("package exposes a listening rendering validation gate", () => {
  assert.equal(packageJson.scripts["validate:listening-rendering"], "node ./scripts/validate-listening-rendering.mjs");
});
