const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const appSource = fs.readFileSync(path.join(__dirname, "..", "public", "app.js"), "utf8");

test("listening repeat scoring has a stable fast realtime fallback", () => {
  assert.match(appSource, /const LISTENING_REALTIME_FINAL_WAIT_MS = 900;/);
  assert.match(appSource, /function scheduleListeningRealtimeFallback\(delay = LISTENING_REALTIME_FINAL_WAIT_MS, attemptToken = listeningRepeatAttemptToken\)/);
  assert.match(appSource, /!listeningRepeatScoringDone && attemptToken === listeningRepeatAttemptToken/);
  assert.match(appSource, /renderListeningPronunciationPreview\(getListeningRepeatText\(\)\)/);
  assert.doesNotMatch(appSource, /setTimeout\(\(\) => \{\s*if \(!listeningRepeatScoringDone\) scheduleListeningRepeatScore\(0\);\s*\}, 1800\)/);
});
