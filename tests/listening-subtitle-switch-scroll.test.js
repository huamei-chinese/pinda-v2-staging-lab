const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const appSource = fs.readFileSync(path.join(__dirname, "..", "public", "app.js"), "utf8");

test("subtitle switching keeps the same active sentence in view", () => {
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
    /function scrollListeningSentenceListToActive\(list, options = \{\}\) \{[\s\S]*const anchorOffset = Number\.isFinite\(Number\(options\.anchorOffset\)\)[\s\S]*list\.style\.scrollBehavior = "auto";[\s\S]*list\.scrollTop = Math\.max\(0, targetTop\);/s,
  );
  assert.match(
    appSource,
    /const sentenceListAnchors = \[\];[\s\S]*anchorOffset: isAnchorVisible \? anchorRect\.top - listRect\.top : null/s,
  );
  assert.match(
    appSource,
    /const alignSubtitleListsToActive = \(\) => \{[\s\S]*scrollListeningSentenceListToActive\(list, \{[\s\S]*index: currentIndex,[\s\S]*titleActive,[\s\S]*anchorOffset,[\s\S]*behavior: "auto"/s,
  );
  assert.match(
    appSource,
    /requestAnimationFrame\(\(\) => \{[\s\S]*setListeningActiveSentence\(currentIndex, \{ force: true, scroll: false \}\);[\s\S]*alignSubtitleListsToActive\(\);[\s\S]*requestAnimationFrame\(alignSubtitleListsToActive\);[\s\S]*setTimeout\(alignSubtitleListsToActive, 80\);/s,
  );
});
