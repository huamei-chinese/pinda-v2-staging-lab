const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.join(__dirname, "..");
const appSource = fs.readFileSync(path.join(repoRoot, "public", "app.js"), "utf8");
const rootAppSource = fs.readFileSync(path.join(repoRoot, "app.js"), "utf8");
const catalog = JSON.parse(fs.readFileSync(path.join(repoRoot, "public", "listening-app", "data", "listening-catalog.json"), "utf8"));

test("listening vocabulary keywords carry catalog audio files", () => {
  const firstLesson = catalog.tracks
    .find((track) => track.id === "dialogue")
    .levels[0]
    .topics[0]
    .lessons[0];

  assert.equal(firstLesson.keywords[0].zh, "你好");
  assert.match(firstLesson.keywords[0].audio, /words\/daily-001-keyword-001\.mp3$/);
  assert.ok(fs.existsSync(path.join(repoRoot, "public", "listening-app", firstLesson.keywords[0].audio)));
});

test("listening vocabulary playback prefers catalog audio and slows the same source", () => {
  assert.match(appSource, /audioNormal:\s*listeningCatalogAssetPath\(keyword\.audio \|\| ""\)/);
  assert.match(appSource, /audioSlow:\s*listeningCatalogAssetPath\(keyword\.audio_slow \|\| keyword\.audioSlow \|\| keyword\.audio \|\| ""\)/);
  assert.match(appSource, /audioNormal:\s*keyword\.audioNormal \|\| keyword\.audioSrc \|\| keyword\.audio \|\| ""/);
  assert.match(appSource, /audioSlow:\s*keyword\.audioSlow \|\| keyword\.audio_slow \|\| keyword\.audioNormal \|\| keyword\.audioSrc \|\| keyword\.audio \|\| ""/);
  assert.match(appSource, /function getListeningKeywordAudioSources\(keyword, options = \{\}\)/);
  assert.match(appSource, /const normalSource = normalize\(keyword\?\.audioNormal \|\| keyword\?\.audioSrc \|\| keyword\?\.audio \|\| ""\);/);
  assert.match(appSource, /const slowSource = normalize\(keyword\?\.audioSlow \|\| normalSource\);/);
  assert.match(appSource, /playAudioSources\(sources, speakFallback,[\s\S]*playbackRate: slow \? 0\.72 : 1,/);
  assert.match(appSource, /audio\.playbackRate = Math\.max\(0\.5, Math\.min\(2, playbackRate\)\);/);
});

test("root app keeps catalog keyword audio before falling back to browser speech", () => {
  assert.match(rootAppSource, /audioNormal:\s*keyword\.audioNormal \|\| keyword\.audioSrc \|\| keyword\.audio \|\| ""/);
  assert.match(rootAppSource, /audioSlow:\s*keyword\.audioSlow \|\| keyword\.audio_slow \|\| keyword\.audioNormal \|\| keyword\.audioSrc \|\| keyword\.audio \|\| ""/);
  assert.match(rootAppSource, /function getListeningKeywordAudioSources\(keyword, options = \{\}\)/);
  assert.match(rootAppSource, /const normalSource = normalize\(keyword\?\.audioNormal \|\| keyword\?\.audioSrc \|\| keyword\?\.audio \|\| ""\);/);
  assert.match(rootAppSource, /playAudioSources\(sources,[\s\S]*playbackRate: slow \? 0\.72 : 1,/);
  assert.match(rootAppSource, /audio\.playbackRate = Math\.max\(0\.5, Math\.min\(2, playbackRate\)\);/);
});
