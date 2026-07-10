const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.resolve(__dirname, "..");
const appSource = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");

test("listening dashboard hero title follows selected dialogue level", () => {
  assert.match(appSource, /function getListeningDashboardHeroTitle\(levelId = state\.listeningLevelId/);
  assert.match(appSource, /"dialogue-so-cap": isVi \? "Luyện nghe Sơ Cấp"/);
  assert.match(appSource, /"dialogue-trung-cap": isVi \? "Luyện nghe Trung Cấp"/);
  assert.match(appSource, /"dialogue-cao-cap": isVi \? "Luyện nghe Cao Cấp"/);
  assert.match(appSource, /const listeningHeroTitle = getListeningDashboardHeroTitle\(selectedListeningLevelId, isVi\)/);
  assert.match(appSource, /<h2>\$\{escapeHtml\(listeningHeroTitle\)\}<\/h2>/);
});
