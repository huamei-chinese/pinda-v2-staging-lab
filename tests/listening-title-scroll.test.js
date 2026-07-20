const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.resolve(__dirname, "..");
const appSource = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");

test("playing title audio scrolls the title sentence into view immediately", () => {
  assert.match(
    appSource,
    /function playListeningTitleThenMain\(audio, episode\) \{[\s\S]*prepareListeningTitleAudio\(audio, episode\)[\s\S]*setListeningTitleSentenceActive\(\{ scroll: true \}\)[\s\S]*playListeningAudio\(audio, token\)/,
  );
});

test("audio sync scrolls while the title phase is actively playing", () => {
  assert.match(
    appSource,
    /if \(isTitlePhase\) \{[\s\S]*setListeningTitleSentenceActive\(\{[\s\S]*scroll: Boolean\(listeningPlaybackRequested \|\| \(audio && !audio\.paused\)\)[\s\S]*\}\);[\s\S]*\}/,
  );
});

test("resuming a prepared title phase scrolls before playback starts", () => {
  assert.match(
    appSource,
    /if \(phase === "main"\) \{[\s\S]*\} else if \(phase === "title"\) \{[\s\S]*setListeningTitleSentenceActive\(\{ scroll: true \}\);[\s\S]*\} else \{[\s\S]*prepareListeningMainAudio\(audio, episode\);[\s\S]*\}[\s\S]*playListeningAudio\(audio, token\);/,
  );
});

test("replay current listening sentence binds audio and stops after the sentence segment", () => {
  assert.match(appSource, /function replayListeningCurrentSentence\(\) \{[\s\S]*bindListeningAudioEvents\(\);/);
  assert.match(appSource, /getListeningRepeatSentenceAudioBounds\(\{ \.\.\.sentence, audioSrc: "" \}, audio\)/);
  assert.match(appSource, /listeningSentenceReplayStopTimer = window\.setTimeout/);
  assert.match(appSource, /if \(event\.target\.closest\("\[data-listening-replay\]"\)\) \{[\s\S]*replayListeningCurrentSentence\(\);/);
});
