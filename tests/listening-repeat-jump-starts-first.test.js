const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const appSource = fs.readFileSync(path.join(__dirname, "..", "public", "app.js"), "utf8");

test("jumping from listening detail to repeat practice starts at the first sentence", () => {
  assert.match(
    appSource,
    /if \(listeningJumpBtn\.dataset\.listeningJump === "repeat"\) \{[\s\S]*?resetListeningRepeatAttempt\(\);[\s\S]*?state\.listeningView = "repeat";[\s\S]*?state\.listeningSentenceIndex = 0;[\s\S]*?renderListening\(\);/,
  );
});

test("repeat sentence audio keeps a small tail so final syllables are not clipped", () => {
  assert.match(appSource, /const LISTENING_REPEAT_END_PADDING_SECONDS = 0\.45;/);
  assert.match(appSource, /const LISTENING_REPEAT_STOP_TIMER_GRACE_MS = 250;/);
  assert.match(appSource, /Math\.min\(0\.85, String\(sentence\.chinese \|\| ""\)\.length \* 0\.025\)/);
  assert.match(appSource, /rawEndTime \+ endPadding/);
  assert.match(appSource, /LISTENING_REPEAT_STOP_TIMER_GRACE_MS/);
});
