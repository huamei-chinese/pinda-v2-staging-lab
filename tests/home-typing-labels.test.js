const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.join(__dirname, "..");
const appSource = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const indexHtml = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");

test("home write labels are renamed to typing labels in Vietnamese and Chinese", () => {
  assert.match(indexHtml, /HuaMei - Luyện gõ Tiếng Trung/);
  assert.match(indexHtml, /app\.js\?v=mobile-pindagou-label-20260714/);
  assert.match(appSource, /label:\s*isVi \? "Luyện gõ" : "拼打"/);
  assert.match(appSource, /"✦ Mỗi ngày luyện gõ" : "✦ 每日拼打"/);
  assert.match(appSource, /<h3>\$\{isVi \? "Luyện gõ" : "拼打"\}<\/h3>/);
  assert.match(appSource, /desktopNavIcon\("write"\)\}<\/span>[\s\S]*?\$\{isVi \? "Luyện gõ" : "拼打"\}/);
  assert.match(appSource, /bottomHskBtn[\s\S]*?textContent = isVi \? "Luyện gõ" : "拼打"/);
  assert.match(appSource, /Luyện gõ<br>tiếng <span class="home-mobile-topbar-accent">Trung<\/span>/);
  assert.match(appSource, /中文<br><span class="home-mobile-topbar-accent">拼打<\/span>/);
});

test("legacy writing labels are not used for the main home typing surfaces", () => {
  const homeModuleSource = appSource.slice(
    appSource.indexOf("function renderHomeTodayStudyCardHTML"),
    appSource.indexOf("function renderHomeDesktopSavedVocabHTML"),
  );
  const desktopModuleSource = appSource.slice(
    appSource.indexOf("function renderHomeDesktopModulesHTML"),
    appSource.indexOf("function renderAppDesktopSidebarHTML"),
  );
  assert.doesNotMatch(`${homeModuleSource}\n${desktopModuleSource}`, /Luyện viết|写作练习|Mỗi ngày luyện viết/);
});
