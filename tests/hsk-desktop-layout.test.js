const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const styles = fs.readFileSync(path.join(__dirname, "..", "public", "styles.css"), "utf8");
const appSource = fs.readFileSync(path.join(__dirname, "..", "public", "app.js"), "utf8");

test("desktop HSK level picker stays inside the course content viewport", () => {
  assert.match(styles, /\.app-desktop-shell--course\s+\.app-desktop-content,\s*\.app-desktop-shell--vocab\s+\.app-desktop-content\s*\{[^}]*overflow-x:\s*hidden/s);
  assert.match(styles, /\.app-desktop-shell--course\s+\.hsk-level-picker\s*\{[^}]*max-width:\s*100%/s);
  assert.match(styles, /\.app-desktop-shell--course\s+\.hsk-level-grid\s*\{[^}]*box-sizing:\s*border-box/s);
  assert.match(styles, /\.app-desktop-shell--course\s+\.hsk-level-card\s*\{[^}]*min-width:\s*0/s);
});

test("writing course opens a path picker before HSK levels", () => {
  assert.match(appSource, /writeCourseView:\s*"paths"/);
  assert.match(appSource, /function renderWritePathPickerHTML\(\)/);
  assert.match(appSource, /data-write-path="hsk"/);
  assert.match(appSource, /data-write-path="communication"/);
  assert.match(appSource, /state\.writeCourseView === "paths"[\s\S]*renderWritePathPickerHTML\(\)/);
  assert.match(appSource, /state\.writeCourseView = nextPath === "communication" \? "communication" : "hsk"/);
});

test("writing communication route uses desktop high-frequency cards", () => {
  assert.match(appSource, /function renderWriteCommunicationCourseHTML\(\)/);
  assert.match(appSource, /write-communication-screen/);
  assert.match(appSource, /renderDailyThemesListHTML\(\)/);
  assert.match(styles, /\.write-path-grid\s*\{[^}]*grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\)/s);
  assert.match(styles, /\.write-communication-theme-grid\s*\{[^}]*grid-template-columns:\s*repeat\(3,\s*minmax\(0,\s*1fr\)\)/s);
});

test("home smart vocabulary card opens high-frequency communication", () => {
  assert.match(appSource, /home-desktop-feature-card--green" data-home-nav="write-communication"/);
  assert.match(appSource, /target === "write-communication"[\s\S]*state\.writeCourseView = "communication"[\s\S]*renderCourse\(\)[\s\S]*setScreen\("course"\)/);
  assert.match(appSource, /\.home-desktop-feature-card\[data-home-nav\][\s\S]*navigatePrimaryTab\(target\)/);
});

test("home progress tracking card opens account profile", () => {
  assert.match(appSource, /home-desktop-feature-card--orange" data-home-nav="account"/);
  assert.match(appSource, /"Theo dõi tiến độ"/);
  assert.match(appSource, /"Xem hồ sơ, mục tiêu và tiến độ của bạn"/);
  assert.match(appSource, /target === "account"\) openAccountScreen\(\)/);
});

test("home quick listening card opens a random suggested listening lesson", () => {
  assert.match(appSource, /home-desktop-feature-card--violet" data-home-nav="quick-listening"/);
  assert.match(appSource, /"Luyện nghe nhanh"/);
  assert.match(appSource, /"Ngẫu nhiên vào một bài nghe đề xuất"/);
  assert.match(appSource, /function getSuggestedListeningEpisodes\(\)[\s\S]*levelId === "dialogue-trung-cap"/);
  assert.match(appSource, /target === "quick-listening"[\s\S]*openRandomSuggestedListeningLesson\(\)/);
  assert.match(appSource, /function openRandomSuggestedListeningLesson\(\)[\s\S]*Math\.random\(\)[\s\S]*state\.listeningView = "detail"[\s\S]*state\.listeningBackTarget = "dashboard"/);
});

test("high-frequency communication back button stays above topic cards", () => {
  assert.match(styles, /\.screen-course\s+\.app-desktop-shell--write-communication\s+\.write-communication-screen\s*>\s*\.write-path-hero\s*\{[^}]*z-index:\s*80\s*!important/s);
  assert.match(styles, /\.screen-course\s+\.app-desktop-shell--write-communication\s+\.write-communication-screen\s*>\s*\.write-path-hero\s+\.hsk-level-hero-back-btn\s*\{[^}]*z-index:\s*81\s*!important[^}]*pointer-events:\s*auto\s*!important/s);
});

test("high-frequency communication header uses the common-topic background frame", () => {
  assert.match(styles, /\.write-communication-header\s*\{[^}]*backgroundthongdung\.png/s);
  assert.match(styles, /\.write-communication-header\s*\{[^}]*backdrop-filter:\s*blur\(14px\)/s);
  assert.match(styles, /\.write-communication-header\s*\{[^}]*border-radius:\s*clamp\(22px,\s*2\.4vw,\s*34px\)/s);
  assert.match(styles, /\.write-communication-header::before\s*\{[^}]*inset:\s*9px[^}]*border:\s*1px solid rgba\(255,\s*255,\s*255,\s*0\.72\)/s);
  assert.match(styles, /\.write-communication-header\s*>\s*\*\s*\{[^}]*z-index:\s*1/s);
});

test("writing path cards use requested backgrounds and stable desktop sizing", () => {
  assert.match(styles, /\.write-path-card--hsk\s*\{[^}]*backgroundhsk\.png/s);
  assert.match(styles, /\.write-path-card--communication\s*\{[^}]*backgroundtansuatcao\.png/s);
  assert.match(styles, /\.write-path-card\s*\{[^}]*grid-template-columns:\s*minmax\(0,\s*1fr\)\s*clamp\(44px,\s*4vw,\s*58px\)/s);
  assert.match(styles, /\.write-path-card-copy\s*\{[^}]*width:\s*min\(100%,\s*520px\)/s);
  assert.match(styles, /@media \(min-width:\s*1181px\) and \(max-width:\s*1380px\)/);
  assert.match(styles, /@media \(min-width:\s*1181px\) and \(max-width:\s*1280px\)/);
});

test("writing path picker background covers the full course content frame", () => {
  assert.match(styles, /\.screen-course\s+\.app-desktop-shell--write-path\s*\.app-desktop-content\s*\{[^}]*min-height:\s*100dvh[^}]*anhnentrangchu1\.png[^}]*cover/s);
  assert.match(styles, /\.write-path-picker,\s*\.write-communication-screen\s*\{[^}]*min-height:\s*100dvh/s);
  assert.match(styles, /\.write-path-grid\s*\{[^}]*background:\s*transparent/s);
});

test("writing path picker shows four image-backed support cards", () => {
  assert.match(appSource, /write-feature-grid/);
  assert.match(appSource, /write-feature-card--vocab/);
  assert.match(appSource, /write-feature-card--speaking/);
  assert.match(appSource, /write-feature-card--grammar/);
  assert.match(appSource, /write-feature-card--review/);
  assert.match(appSource, /write-feature-card--decorative/);
  assert.doesNotMatch(appSource, /data-write-feature/);
  assert.match(appSource, /icontuvung/);
  assert.match(appSource, /iconnghenoi\.png/);
  assert.match(appSource, /iconnguphap\.png/);
  assert.match(appSource, /iconontap\.png/);
  assert.match(styles, /\.write-feature-grid\s*\{[^}]*grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\)/s);
  assert.match(styles, /\.write-feature-card\s*\{[^}]*min-height:\s*clamp\(104px,\s*8vw,\s*136px\)/s);
  assert.match(styles, /\.write-feature-card--vocab\s*\{[^}]*anhnentuvungluyenviet\.png/s);
  assert.match(styles, /\.write-feature-card--speaking\s*\{[^}]*anhnennghenoi\.png/s);
  assert.match(styles, /\.write-feature-card--grammar\s*\{[^}]*anhnennguphap\.png/s);
  assert.match(styles, /\.write-feature-card--review\s*\{[^}]*anhnenontap\.png/s);
  assert.match(styles, /@media \(max-width:\s*760px\)\s*\{[\s\S]*\.write-feature-grid\s*\{[^}]*grid-template-columns:\s*1fr/s);
});

test("writing support cards are decorative and do not route", () => {
  assert.doesNotMatch(appSource, /writeFeatureBtn/);
  assert.doesNotMatch(appSource, /dataset\.writeFeature/);
  assert.match(styles, /\.write-feature-card--decorative\s*\{[^}]*cursor:\s*default/s);
  assert.match(styles, /\.write-feature-status\s*\{[^}]*radial-gradient/s);
  assert.match(styles, /\.write-feature-status\s*>\s*span\s*\{[^}]*border-radius:\s*999px/s);
});

test("writing path picker has scoped responsive guardrails", () => {
  assert.match(styles, /Writing path picker responsive guardrails/);
  assert.match(styles, /\.screen-course\s+\.app-desktop-shell--write-path\s*\{[^}]*overflow-x:\s*clip/s);
  assert.match(styles, /@media \(min-width:\s*901px\)[\s\S]*\.screen-course\s+\.app-desktop-shell--write-path\s*\.app-desktop-content\s*\{[^}]*margin-left:\s*var\(--desktop-sidebar-width\)/s);
  assert.match(styles, /\.write-path-picker\s*\{[^}]*--write-path-hero-safe-inset:\s*0px/s);
  assert.match(styles, /\.write-path-hero\s*\{[^}]*width:\s*calc\(100%\s*-\s*\(var\(--write-path-hero-safe-inset\)\s*\*\s*2\)\)[^}]*margin-inline:\s*var\(--write-path-hero-safe-inset\)/s);
  assert.match(styles, /@media \(min-width:\s*901px\)[\s\S]*\.write-path-picker\s*\{[^}]*--write-path-hero-safe-inset:\s*clamp\(22px,\s*2\.4vw,\s*40px\)/s);
  assert.match(styles, /@media \(min-width:\s*901px\)[\s\S]*\.write-path-card\s*\{[^}]*min-height:\s*clamp\(148px,\s*12\.4vw,\s*198px\)/s);
  assert.match(styles, /@media \(min-width:\s*901px\)[\s\S]*\.write-feature-card\s*\{[^}]*min-height:\s*clamp\(92px,\s*7\.1vw,\s*120px\)/s);
  assert.match(styles, /@media \(min-width:\s*901px\) and \(max-width:\s*1180px\)[\s\S]*\.write-path-grid\s*\{[^}]*grid-template-columns:\s*1fr/s);
  assert.match(styles, /@media \(max-width:\s*900px\)[\s\S]*\.screen-course\s+\.app-desktop-shell--write-path\s*\.app-desktop-sidebar\s*\{[^}]*display:\s*none/s);
  assert.match(styles, /@media \(max-width:\s*900px\)[\s\S]*\.write-path-picker\s*\{[^}]*--write-path-hero-safe-inset:\s*0px\s*!important/s);
  assert.match(styles, /@media \(max-width:\s*560px\)[\s\S]*\.write-feature-card\s*\{[^}]*grid-template-columns:\s*46px\s+minmax\(0,\s*1fr\)\s+28px/s);
  assert.match(styles, /@media \(max-width:\s*380px\)[\s\S]*\.write-feature-progress\s+em\s*\{[^}]*text-overflow:\s*ellipsis/s);
});
