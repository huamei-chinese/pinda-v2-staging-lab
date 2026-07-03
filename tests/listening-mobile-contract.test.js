const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.join(__dirname, "..");
const detailCss = fs.readFileSync(path.join(repoRoot, "public", "listening-app", "listening-detail.css"), "utf8");
const serverSource = fs.readFileSync(path.join(repoRoot, "server.js"), "utf8");
const fallbackPath = path.join(repoRoot, "public", "listening-app", "typing-detail-fallback.html");
const listeningAppPath = path.join(repoRoot, "public", "listening-app");

test("mobile listening detail hides the desktop sidebar to avoid horizontal overflow", () => {
  const mobileBlock = detailCss.match(/@media \(max-width:\s*900px\)\s*\{([\s\S]*?)\n\}/)?.[1] || "";
  assert.match(mobileBlock, /\.sidebar\s*\{[^}]*display:\s*none/s);
  assert.match(mobileBlock, /\.lesson-shell\s*\{[^}]*overflow-x:\s*hidden/s);
});

test("local lab serves a static typing fallback for exported episode routes", () => {
  assert.match(serverSource, /\/listening-app\/typing\/ep-/);
  assert.match(serverSource, /typing-detail-fallback\.html/);
  assert.equal(fs.existsSync(fallbackPath), true, "typing-detail-fallback.html should exist");

  const fallbackHtml = fs.readFileSync(fallbackPath, "utf8");
  assert.match(fallbackHtml, /data-listening-typing-fallback/);
  assert.match(fallbackHtml, /id="typing-answer"/);
  assert.match(fallbackHtml, /data-answer="tong guo"/);
  assert.match(fallbackHtml, /index = \(index \+ 1\) % words\.length/);
  assert.match(fallbackHtml, /Correct\. Continue to the next word\./);
  assert.match(fallbackHtml, /bottom-nav/);
});

test("static typing fallback selects the word bank for all ten listening episodes", () => {
  const fallbackHtml = fs.readFileSync(fallbackPath, "utf8");

  assert.match(fallbackHtml, /const episodeWordBank = \{/);
  for (let episodeNumber = 1; episodeNumber <= 10; episodeNumber += 1) {
    assert.match(fallbackHtml, new RegExp(`"ep-${String(episodeNumber).padStart(3, "0")}"`));
  }
  assert.match(fallbackHtml, /currentEpisodeId/);
  assert.match(fallbackHtml, /episodeWordBank\[currentEpisodeId\] \|\| episodeWordBank\["ep-001"\]/);
  assert.match(fallbackHtml, /Yue nan/);
  assert.match(fallbackHtml, /wen ding/);
});

test("daily listening audio assets cover the ten exported episodes", () => {
  const mainAudioPath = path.join(listeningAppPath, "audio", "main");
  const wordAudioPath = path.join(listeningAppPath, "audio", "words");
  const expectedKeywordCounts = [9, 10, 10, 8, 8, 8, 8, 8, 8, 8];

  for (let episodeNumber = 1; episodeNumber <= 10; episodeNumber += 1) {
    const episodeId = String(episodeNumber).padStart(3, "0");
    const mainCandidates = [
      path.join(mainAudioPath, `daily-${episodeId}-main.mp3`),
      path.join(mainAudioPath, `daily-${episodeId}-main.MP3`),
    ];
    assert.equal(
      mainCandidates.some((candidate) => fs.existsSync(candidate)),
      true,
      `main audio should exist for ep-${episodeId}`,
    );

    const keywordAudioCount = fs
      .readdirSync(wordAudioPath)
      .filter((name) => name.startsWith(`daily-${episodeId}-keyword-`) && name.endsWith(".mp3")).length;
    assert.equal(keywordAudioCount, expectedKeywordCounts[episodeNumber - 1], `keyword audio count for ep-${episodeId}`);
  }
});
