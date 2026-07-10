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
