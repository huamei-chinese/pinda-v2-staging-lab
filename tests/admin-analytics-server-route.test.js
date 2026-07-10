const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const repoRoot = path.join(__dirname, "..");
const serverSource = fs.readFileSync(path.join(repoRoot, "server.js"), "utf8");

test("local server exposes admin analytics overview before generic API fallback", () => {
  const analyticsRouteIndex = serverSource.indexOf('url.pathname === "/api/admin/analytics/overview"');
  const fallbackIndex = serverSource.indexOf('url.pathname.startsWith("/api/")');

  assert.notEqual(analyticsRouteIndex, -1, "server.js should route admin analytics overview");
  assert.notEqual(fallbackIndex, -1, "server.js should keep the generic API fallback");
  assert.ok(
    analyticsRouteIndex < fallbackIndex,
    "admin analytics route must run before the generic API fallback",
  );
  assert.match(serverSource, /async function handleAdminAnalyticsOverview/);
  assert.match(serverSource, /CREATE TABLE IF NOT EXISTS learning_events/);
});

test("daily attempt trend counts completed writing practices, not per-question answers", () => {
  assert.match(serverSource, /event_type = 'practice_completed'/);
  assert.doesNotMatch(
    serverSource,
    /dailyAttempts[\s\S]*?event_type = 'question_answered'[\s\S]*?dailyAttempts:/,
  );
});
