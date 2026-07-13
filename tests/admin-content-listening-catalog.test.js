const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.join(__dirname, "..");
const appSource = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");

test("admin content uses API listening catalog rows for the lock UI", () => {
  assert.match(appSource, /adminListeningCatalogTopics:\s*\[\]/);
  assert.match(appSource, /adminListeningCatalogLessons:\s*\[\]/);
  assert.match(appSource, /state\.adminListeningCatalogTopics = listeningData\.topics \|\| \[\];/);
  assert.match(appSource, /state\.adminListeningCatalogLessons = listeningData\.lessons \|\| \[\];/);
  assert.match(appSource, /if \(Array\.isArray\(state\.adminListeningCatalogTopics\) && state\.adminListeningCatalogTopics\.length > 0\)/);
});

test("switching to the listening admin module reloads missing catalog rows", () => {
  assert.match(appSource, /state\.adminContentModule === "listening" && !state\.adminListeningCatalogTopics\.length/);
  assert.match(appSource, /loadAdminContentLocks\(\);/);
});
