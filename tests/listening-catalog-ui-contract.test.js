const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const repoRoot = path.join(__dirname, "..");
const packageJson = require("../package.json");
const rootIndex = fs.readFileSync(path.join(repoRoot, "index.html"), "utf8");
const publicIndex = fs.readFileSync(path.join(repoRoot, "public", "index.html"), "utf8");
const appSource = fs.readFileSync(path.join(repoRoot, "public", "app.js"), "utf8");
const listeningCatalogJson = JSON.parse(fs.readFileSync(path.join(repoRoot, "public", "listening-app", "data", "listening-catalog.json"), "utf8"));

function loadListeningCatalogScript() {
  const sandbox = { globalThis: {} };
  vm.runInNewContext(fs.readFileSync(path.join(repoRoot, "public", "listening-app", "data", "listening-catalog.js"), "utf8"), sandbox);
  return JSON.parse(JSON.stringify(sandbox.globalThis.pindaListeningCatalog));
}

function assertCatalogIsLazyLoadedByApp(html) {
  const catalogIndex = html.indexOf("listening-app/data/listening-catalog.js");
  const appIndex = html.search(/app\.js\?v=[^"']+/);

  assert.equal(catalogIndex, -1, "listening catalog data should not block initial page load");
  assert.ok(appIndex > 0, "app.js should be loaded");
}

test("SPA entries lazy-load the listening catalog through the UI runtime", () => {
  assertCatalogIsLazyLoadedByApp(rootIndex);
  assertCatalogIsLazyLoadedByApp(publicIndex);
  assert.match(appSource, /const LISTENING_CATALOG_JSON_SRC\s*=\s*"listening-app\/data\/listening-catalog\.json\?v=20260713-catalog"/);
  assert.match(appSource, /const LISTENING_CATALOG_SCRIPT_SRC\s*=\s*"listening-app\/data\/listening-catalog\.js\?v=20260713-catalog"/);
  assert.match(appSource, /function ensureListeningCatalogLoaded\(options = \{\}\)/);
  assert.match(appSource, /function loadListeningCatalogData\(\)/);
  assert.match(appSource, /fetch\(LISTENING_CATALOG_JSON_SRC, \{ cache: "force-cache" \}\)/);
  assert.match(appSource, /loadDynamicScript\(LISTENING_CATALOG_SCRIPT_SRC\)/);
});

test("listening JSON catalog stays in sync with the script catalog labels", () => {
  const scriptCatalog = loadListeningCatalogScript();
  const levelIds = new Set(["dialogue-so-cap", "dialogue-trung-cap", "dialogue-cao-cap"]);
  const extractLabels = (catalog) => catalog.tracks
    .flatMap((track) => track.levels || [])
    .filter((level) => levelIds.has(level.legacy_level_id))
    .map((level) => ({
      level: level.legacy_level_id,
      topics: (level.topics || []).map((topic) => topic.label_vi),
    }));

  assert.deepEqual(extractLabels(listeningCatalogJson), extractLabels(scriptCatalog));
  assert.deepEqual(extractLabels(listeningCatalogJson).map((level) => level.topics[0]), [
    "1.Tự tin giao tiếp",
    "1.Cuộc sống tự lập",
    "1.Lựa chọn nghề nghiệp",
  ]);
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

test("listening UI keeps catalog hierarchy separate from visual-only UI", () => {
  assert.match(appSource, /lesson\.kind === "topic"/);
  assert.match(appSource, /data-listening-topic-level/);
  assert.match(appSource, /state\.listeningSeedEpisodeId && selectedTopic/);
  assert.match(appSource, /state\.listeningLevelId = listeningTopicListBtn\.dataset\.listeningTopicLevel \|\| state\.listeningLevelId/);
  assert.doesNotMatch(appSource, /state\.listeningLevelId = "dialogue-so-cap";\s*renderListening\(\);/);
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
