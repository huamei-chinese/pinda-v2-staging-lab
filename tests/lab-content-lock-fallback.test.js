const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const appSource = fs.readFileSync(path.join(__dirname, "..", "public", "app.js"), "utf8");
const localFallbackBody = appSource.match(/function shouldUseLocalContentLockFallback\(\) \{([\s\S]*?)\n\}/)?.[1] || "";

test("content lock trust requires a successful backend lock load", () => {
  assert.match(appSource, /function shouldUseLocalContentLockFallback\(\)/);
  assert.match(localFallbackBody, /BACKEND_DISABLED === true/);
  assert.match(appSource, /return state\.contentLocksReady === true && state\.contentLocksFailed !== true;/);
  assert.doesNotMatch(appSource, /state\.contentLocksReady === true && state\.contentLocksFailed !== true \|\| shouldUseLocalContentLockFallback\(\)/);
});

test("missing server content rules fail closed instead of opening content", () => {
  assert.match(appSource, /if \(!shouldUseLocalContentLockFallback\(\)\) return accessRule\("locked", 0\);/);
  assert.match(appSource, /if \(!areContentLocksTrusted\(\) && !shouldUseLocalContentLockFallback\(\)\) return true;/);
});

test("content lock failure still records the backend error for release-candidate visibility", () => {
  assert.match(appSource, /state\.contentLocksFailed = true;/);
  assert.match(appSource, /state\.contentLocksError = error\?\.message \|\| "Failed to load content locks";/);
});
