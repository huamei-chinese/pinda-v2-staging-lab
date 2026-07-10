const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const appSource = fs.readFileSync(path.join(__dirname, "..", "public", "app.js"), "utf8");

test("subtitle switching keeps the currently playing sentence in view", () => {
  assert.match(
    appSource,
    /function applyListeningSubtitleMode\(mode = state\.listeningSubtitleMode, sourceElement = null\) \{[\s\S]*const audio = \$\("#listeningAudio"\);[\s\S]*const isMainAudioActive = Boolean\(audio && !audio\.paused && !audio\.ended && !isAudioTitlePhase\);/s,
  );
  assert.match(
    appSource,
    /const activeSentenceIndex = isMainAudioActive[\s\S]*getListeningSentenceIndexAtTime\(episode, Math\.min\(\(audio\.currentTime \+ 0\.25\) \|\| 0, getListeningAudioDuration\(audio, episode\)\)\)[\s\S]*Number\(activeSentenceButton\?\.dataset\.listeningSentence\);/s,
  );
  assert.match(
    appSource,
    /requestAnimationFrame\(\(\) => \{[\s\S]*setListeningActiveSentence\(currentIndex, \{ force: true, scroll: true \}\);[\s\S]*setListeningTitleSentenceActive\(\{ scroll: true \}\);[\s\S]*\}\);/s,
  );
});
