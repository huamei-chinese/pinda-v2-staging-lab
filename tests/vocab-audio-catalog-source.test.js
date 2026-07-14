const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.join(__dirname, "..");
const appSource = fs.readFileSync(path.join(repoRoot, "public", "app.js"), "utf8");
const rootAppSource = fs.readFileSync(path.join(repoRoot, "app.js"), "utf8");
const loaderSource = fs.readFileSync(path.join(repoRoot, "public", "lesson-new-format-loader.js"), "utf8");
const publicIndex = fs.readFileSync(path.join(repoRoot, "public", "index.html"), "utf8");
const rootIndex = fs.readFileSync(path.join(repoRoot, "index.html"), "utf8");

for (const [label, source] of [
  ["public app", appSource],
  ["root app", rootAppSource],
]) {
  test(`${label} saved vocabulary prefers catalog/item audio before browser speech`, () => {
    assert.match(source, /function getItemAudioSources\(item, options = \{\}\)/);
    assert.match(source, /function getVocabAudioSources\(target, options = \{\}\)/);
    assert.match(source, /const itemSources = getItemAudioSources\(item, options\);/);
    assert.match(source, /return uniqueAudioSources\(\[\.\.\.itemSources, genericSource\]\);/);
    assert.match(source, /speakText\(findItemByHanzi\(hanzi\) \|\| hanzi\);/);
  });

  test(`${label} saved vocabulary can recover audio from listening catalog keywords`, () => {
    assert.match(source, /function findListeningKeywordByHanzi\(hanzi\)/);
    assert.match(source, /globalThis\.pindaListeningCatalog/);
    assert.match(source, /for \(const keyword of lesson\.keywords \|\| \[\]\)/);
    assert.match(source, /function withListeningAudioFallback\(item, hanzi\)/);
    assert.match(source, /audioNormal: listeningKeyword\.audioNormal \|\| listeningKeyword\.audioSrc \|\| ""/);
  });
}

test("public listening catalog audio paths are not double-prefixed", () => {
  assert.match(appSource, /if \(normalized\.startsWith\("listening-app\/"\)\) \{/);
  assert.match(appSource, /return resolvePublicAssetPath\(`\/\$\{normalized\}`, "listeningApp"\);/);
  assert.match(appSource, /return resolvePublicAssetPath\(`\/listening-app\/\$\{normalized\}`, "listeningApp"\);/);
});

test("runtime audio resolver understands catalog audio metadata fields", () => {
  assert.match(loaderSource, /item\.audioNormal/);
  assert.match(loaderSource, /item\.audioSrc/);
  assert.match(loaderSource, /item\.audioSlow/);
  assert.match(loaderSource, /item\.audio_slow/);
});

test("html cache bust forces browsers to fetch the vocabulary audio fix", () => {
  assert.match(publicIndex, /app\.js\?v=vocab-audio-catalog-20260714/);
  assert.match(publicIndex, /lesson-new-format-loader\.js\?v=vocab-audio-catalog-20260714/);
  assert.match(rootIndex, /app\.js\?v=vocab-audio-catalog-20260714/);
  assert.match(rootIndex, /lesson-new-format-loader\.js\?v=vocab-audio-catalog-20260714/);
});
