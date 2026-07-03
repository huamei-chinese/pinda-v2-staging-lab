const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const appSource = fs.readFileSync(path.join(__dirname, "..", "public", "app.js"), "utf8");
const localFallbackBody = appSource.match(/function shouldUseLocalContentLockFallback\(\) \{([\s\S]*?)\n\}/)?.[1] || "";

test("local lab can use built-in content lock rules when DATABASE_URL is missing", () => {
  assert.match(appSource, /function shouldUseLocalContentLockFallback\(\)/);
  assert.match(localFallbackBody, /contentLocksError/);
  assert.match(localFallbackBody, /DATABASE_URL/);
  assert.match(localFallbackBody, /Backend/);
  assert.match(localFallbackBody, /backendDisabledMessage\(\)/);
  assert.match(localFallbackBody, /localhost|127\\.0\\.0\\.1/s);
  assert.match(appSource, /return state\.contentLocksReady === true && state\.contentLocksFailed !== true \|\| shouldUseLocalContentLockFallback\(\);/);
});

test("content lock failure still records the backend error for release-candidate visibility", () => {
  assert.match(appSource, /state\.contentLocksFailed = true;/);
  assert.match(appSource, /state\.contentLocksError = error\?\.message \|\| "Failed to load content locks";/);
});
