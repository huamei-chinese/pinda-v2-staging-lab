const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const appSource = fs.readFileSync(path.join(__dirname, "..", "public", "app.js"), "utf8");

test("listening vocab practice screen hides the mobile return header", () => {
  assert.match(
    appSource,
    /function renderListeningVocabLesson\(options = \{\}\) \{[\s\S]*setScreenWithDesktopShell\("listening"[\s\S]*preserveScroll:\s*Boolean\(options\.preserveScroll\),[\s\S]*hideMobileHeader:\s*true,[\s\S]*\}\);/i,
  );
  assert.doesNotMatch(
    appSource,
    /function renderListeningVocabLesson\(options = \{\}\) \{[\s\S]*mobileTitle:\s*isVi \? "Từ vựng"/,
  );
});
