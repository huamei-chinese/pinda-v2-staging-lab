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
  assert.match(appSource, /data-write-feature="vocab"/);
  assert.match(appSource, /data-write-feature="speaking"/);
  assert.match(appSource, /data-write-feature="grammar"/);
  assert.match(appSource, /data-write-feature="review"/);
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

test("writing support cards route to their requested destinations", () => {
  assert.match(appSource, /const writeFeatureBtn = event\.target\.closest\("\[data-write-feature\]"\)/);
  assert.match(appSource, /featureTarget === "vocab"[\s\S]*state\.writeCourseView = "hsk"[\s\S]*renderHskCourse\(\)/);
  assert.match(appSource, /featureTarget === "speaking"[\s\S]*state\.listeningView = "levels"[\s\S]*renderListening\(\)[\s\S]*setScreen\("listening"\)/);
  assert.match(appSource, /featureTarget === "grammar"[\s\S]*state\.writeCourseView = "communication"[\s\S]*renderHskCourse\(\)/);
  assert.match(appSource, /featureTarget === "review"[\s\S]*state\.vocabFilterTab = "all"[\s\S]*renderVocab\(\)[\s\S]*setScreen\("vocab"\)/);
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
