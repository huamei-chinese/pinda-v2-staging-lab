const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const appSource = fs.readFileSync(path.join(__dirname, "..", "public", "app.js"), "utf8");

test("listening gateway does not render the shared mobile return header", () => {
  assert.match(
    appSource,
    /function renderListeningLevelGateway\(options = \{\}\) \{[\s\S]*setScreenWithDesktopShell\("listening"[\s\S]*"app-desktop-shell--listening",\s*"listening",\s*\{[\s\S]*\.\.\.options,[\s\S]*hideMobileHeader:\s*true,[\s\S]*\}\);/i,
  );
});

test("listening mobile flow screens hide the shared return header", () => {
  assert.match(
    appSource,
    /function renderListeningDashboard\(\) \{[\s\S]*setScreenWithDesktopShell\("listening"[\s\S]*"app-desktop-shell--listening",\s*"listening",\s*\{[\s\S]*hideMobileHeader:\s*true,[\s\S]*\}\);/i,
  );
  assert.match(
    appSource,
    /function renderListeningDetail\(options = \{\}\) \{[\s\S]*setScreenWithDesktopShell\("listening",\s*listeningDetailHTML,[\s\S]*\{[\s\S]*preserveScroll:\s*Boolean\(options\.preserveScroll\),[\s\S]*mobileTitle:[\s\S]*hideMobileHeader:\s*true,[\s\S]*\}\);/i,
  );
  assert.match(
    appSource,
    /function renderListeningLevelLessons\(options = \{\}\) \{[\s\S]*setScreenWithDesktopShell\("listening"[\s\S]*\{[\s\S]*preserveScroll:\s*Boolean\(options\.preserveScroll\),[\s\S]*mobileTitle:\s*lessonTitle,[\s\S]*hideMobileHeader:\s*true,[\s\S]*\}\);/i,
  );
});
