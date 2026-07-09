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

test("writing HSK path card is a stacked direct level selector", () => {
  assert.match(appSource, /const hskSelectorRows = hskLevelCards\.map\(\(card,\s*index\)/);
  assert.match(appSource, /write-path-card--hsk-selector/);
  assert.match(appSource, /data-write-hsk-level="\$\{card\.level\}"/);
  assert.match(appSource, /write-path-card-arrow write-hsk-mode-btn" type="button" data-write-path="hsk"/);
  assert.match(appSource, /const writeHskLevelBtn = event\.target\.closest\("\[data-write-hsk-level\]"\)[\s\S]*state\.level = writeHskLevelBtn\.dataset\.writeHskLevel[\s\S]*state\.hskLevelPicker = false[\s\S]*await ensureHskLevelContent\(state\.level\)[\s\S]*renderHskCourse\(\)/);
  assert.match(styles, /\.write-path-card--hsk-selector\s*\{[^}]*grid-template-areas:[^}]*"head arrow"[^}]*"stack stack"/s);
  assert.match(styles, /\.write-path-card--hsk-selector\s*\{[^}]*overflow:\s*visible/s);
  assert.match(styles, /\.write-hsk-level-stack\s*\{[^}]*perspective:\s*1100px[^}]*isolation:\s*isolate/s);
  assert.match(styles, /\.write-hsk-level-row\s*\{[^}]*z-index:\s*calc\(30 - var\(--hsk-row-index\)\)[^}]*margin-top:\s*clamp\(-13px,\s*-1vw,\s*-8px\)[^}]*animation:\s*writeHskRowSlide/s);
  assert.match(styles, /\.write-hsk-level-row:nth-child\(1\)\s*\{[^}]*--hsk-row-scale:\s*1\.035/s);
  assert.match(styles, /\.write-hsk-level-row:nth-child\(6\)\s*\{[^}]*--hsk-row-entry-opacity:\s*0\.78[^}]*width:\s*86%/s);
  assert.match(styles, /\.write-hsk-level-row\s*\{[^}]*--hsk-row-bg:\s*none[^}]*var\(--hsk-row-bg\)\s+center\s*\/\s*100%\s+100%\s+no-repeat/s);
  assert.match(styles, /\.write-hsk-level-row--hsk1\s*\{[^}]*Generated image 1\.png/s);
  assert.match(styles, /\.write-hsk-level-row--hsk2\s*\{[^}]*Generated image 2\.png/s);
  assert.match(styles, /\.write-hsk-level-row--hsk3\s*\{[^}]*Generated image 3\.png/s);
  assert.match(styles, /\.write-hsk-level-row--hsk4\s*\{[^}]*Generated image 4\.png/s);
  assert.match(styles, /\.write-hsk-level-row--hsk5\s*\{[^}]*Generated image 5\.png/s);
  assert.match(styles, /\.write-hsk-level-row--hsk6\s*\{[^}]*Generated image 6\.png/s);
  assert.match(styles, /\.write-hsk-level-row\s*\{[^}]*transform-origin:\s*center[^}]*will-change:\s*transform,\s*box-shadow,\s*filter/s);
  assert.match(styles, /\.write-hsk-level-stack:hover\s+\.write-hsk-level-row:not\(:hover\):not\(:focus-visible\)\s*\{[^}]*opacity:\s*0\.34[^}]*blur\(1px\)/s);
  assert.match(styles, /\.write-hsk-level-row:hover,[\s\S]*z-index:\s*160[\s\S]*transform:\s*translateX\(calc\(var\(--hsk-row-shift\) \+ 30px\)\) translateY\(-34px\) scale\(calc\(var\(--hsk-row-scale\) \+ 0\.16\)\)/s);
  assert.match(styles, /\.write-hsk-level-row:hover::after,[\s\S]*content:\s*"中"/s);
  assert.match(styles, /\.write-hsk-row-arrow::before\s*\{[^}]*radial-gradient/s);
  assert.match(styles, /@keyframes writeHskRowSlide/);
});

test("writing communication path card is a draggable direct topic carousel", () => {
  assert.match(appSource, /const communicationTopicCards = dailyThemes\.map\(\(theme,\s*index\)/);
  assert.match(appSource, /write-path-card--communication-selector/);
  assert.match(appSource, /write-communication-topic-carousel/);
  assert.match(appSource, /<button class="write-communication-topic-card[\s\S]*data-write-daily-theme="\$\{theme\.id\}"/);
  assert.match(appSource, /<img src="\$\{config\.cover\}" alt="" aria-hidden="true" draggable="false" \/>/);
  assert.match(appSource, /write-communication-mode-btn" type="button" data-write-path="communication"/);
  assert.match(appSource, /write-communication-explore-btn" type="button" data-write-path="communication"/);
  assert.match(appSource, /const writeDailyThemeBtn = event\.target\.closest\("\[data-write-daily-theme\]"\)[\s\S]*event\.preventDefault\(\)[\s\S]*event\.stopPropagation\(\)[\s\S]*openDailyTopicFromHome\(themeId,\s*\{\s*backTarget:\s*"write-communication"\s*\}\)/);
  assert.match(appSource, /const writeDailyThemeCard = event\.target\?\.closest\?\.\("\[data-write-daily-theme\]"\)[\s\S]*writeDailyThemeCard\.click\(\)/);
  assert.match(appSource, /let writeTopicCarouselDrag = null[\s\S]*pointerdown[\s\S]*write-communication-topic-carousel[\s\S]*pointermove[\s\S]*if \(!drag\.moved\)[\s\S]*setPointerCapture\?\.\(drag\.pointerId\)[\s\S]*scrollLeft = drag\.scrollLeft - deltaX[\s\S]*dragSuppress/s);
  assert.match(styles, /\.write-path-card--communication-selector\s*\{[^}]*grid-template-areas:[^}]*"head arrow"[^}]*"carousel carousel"[^}]*"footer footer"/s);
  assert.match(styles, /\.write-communication-topic-carousel\s*\{[^}]*grid-auto-flow:\s*column[^}]*overflow-x:\s*auto[^}]*scroll-snap-type:\s*x mandatory[^}]*cursor:\s*grab/s);
  assert.match(styles, /\.write-communication-topic-carousel\.is-dragging\s*\{[^}]*cursor:\s*grabbing[^}]*scroll-snap-type:\s*none/s);
  assert.match(styles, /\.write-communication-topic-card\s*\{[^}]*scroll-snap-align:\s*center[^}]*animation:\s*writeCommunicationTopicSlide/s);
  assert.match(styles, /\.write-communication-topic-card\s*\{[^}]*font:\s*inherit[^}]*appearance:\s*none/s);
  assert.match(styles, /\.write-communication-topic-cover::after\s*\{[^}]*content:\s*"Vào học"[^}]*background:\s*linear-gradient/s);
  assert.match(styles, /\.write-communication-explore-btn\s*\{[^}]*border:\s*0[^}]*cursor:\s*pointer/s);
  assert.match(styles, /@keyframes writeCommunicationTopicSlide/);
});

test("daily topics opened from writing communication return to the high-frequency screen", () => {
  assert.match(appSource, /dailyBackTarget:\s*""/);
  assert.match(appSource, /function openDailyTopicFromHome\(themeId,\s*options = \{\}\)[\s\S]*state\.dailyBackTarget = options\.backTarget \|\| ""/);
  assert.match(appSource, /function backToWriteCommunicationCourse\(\)[\s\S]*state\.writeCourseView = "communication"[\s\S]*state\.dailyBackTarget = ""[\s\S]*renderHskCourse\(\)/);
  assert.match(appSource, /function backToDailyThemeList\(\)[\s\S]*state\.dailyBackTarget === "write-communication"[\s\S]*backToWriteCommunicationCourse\(\)/);
  assert.match(appSource, /function backFromPracticeToCourse\(\)[\s\S]*state\.module === "daily" && state\.dailyBackTarget === "write-communication"[\s\S]*backToWriteCommunicationCourse\(\)/);
  assert.match(appSource, /const writeCommunicationThemeBtn = event\.target\.closest\("\.write-communication-screen \[data-theme\]"\)[\s\S]*state\.dailyBackTarget = "write-communication"[\s\S]*renderDailyCourse\(\)/);
  assert.match(appSource, /"\#backBtn"[\s\S]*state\.screen === "practice" \|\| state\.screen === "complete"[\s\S]*backFromPracticeToCourse\(\)/);
  assert.match(appSource, /btnQuitLearning[\s\S]*backFromPracticeToCourse\(\)/);
});

test("writing communication route uses desktop high-frequency cards", () => {
  assert.match(appSource, /function renderWriteCommunicationCourseHTML\(\)/);
  assert.match(appSource, /write-communication-screen/);
  assert.match(appSource, /renderDailyThemesListHTML\(\)/);
  assert.match(styles, /\.write-path-grid\s*\{[^}]*grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\)/s);
  assert.match(styles, /\.write-communication-theme-grid\s*\{[^}]*grid-template-columns:\s*repeat\(3,\s*minmax\(0,\s*1fr\)\)/s);
});

test("home vocabulary typing card opens random accessible HSK word practice", () => {
  assert.match(appSource, /home-desktop-feature-card--green" data-home-nav="quick-hsk-vocab"/);
  assert.match(appSource, /"Luyện gõ từ vựng"/);
  assert.match(appSource, /"Tăng phản xạ và ghi nhớ lâu"/);
  assert.match(appSource, /const HOME_QUICK_HSK_LAST_LESSON_STORAGE_KEY/);
  assert.match(appSource, /function getQuickHskVocabularyPracticeCandidates\(\)[\s\S]*hasPremiumAccess\(\)[\s\S]*canAccessHskLessonItem\(candidate\.lessonId,\s*candidate\.index,\s*"word"\)/);
  assert.match(appSource, /function randomArrayItem\(items = \[\]\)[\s\S]*Math\.random\(\)/);
  assert.match(appSource, /function openRandomHskVocabularyTypingPractice\(\)[\s\S]*getStoredQuickHskLastLessonId\(\)[\s\S]*randomArrayItem\(nextLessonIds\)[\s\S]*startPractice\(\{\s*lessonId:\s*selected\.lessonId,[\s\S]*mode:\s*"translate",[\s\S]*hskContentType:\s*"word",[\s\S]*index:\s*selected\.index/s);
  assert.match(appSource, /target === "quick-hsk-vocab"[\s\S]*openRandomHskVocabularyTypingPractice\(\)/);
  assert.match(appSource, /\.home-desktop-feature-card\[data-home-nav\][\s\S]*navigatePrimaryTab\(target\)/);
});

test("home sentence typing card opens random accessible HSK sentence practice", () => {
  assert.match(appSource, /home-desktop-feature-card--orange" data-home-nav="quick-hsk-sentence"/);
  assert.match(appSource, /"Luyện gõ câu"/);
  assert.match(appSource, /"Ghi nhớ cấu trúc câu lâu hơn"/);
  assert.match(appSource, /const HOME_QUICK_HSK_SENTENCE_LAST_LESSON_STORAGE_KEY/);
  assert.match(appSource, /function getQuickHskSentencePracticeCandidates\(\)[\s\S]*hasPremiumAccess\(\)[\s\S]*canAccessHskLessonItem\(candidate\.lessonId,\s*candidate\.index,\s*"sentence"\)/);
  assert.match(appSource, /function openRandomHskSentenceTypingPractice\(\)[\s\S]*getStoredQuickHskLastLessonId\(HOME_QUICK_HSK_SENTENCE_LAST_LESSON_STORAGE_KEY\)[\s\S]*randomArrayItem\(nextLessonIds\)[\s\S]*startPractice\(\{\s*lessonId:\s*selected\.lessonId,[\s\S]*mode:\s*"translate",[\s\S]*hskContentType:\s*"sentence",[\s\S]*index:\s*selected\.index/s);
  assert.match(appSource, /target === "quick-hsk-sentence"[\s\S]*openRandomHskSentenceTypingPractice\(\)/);
});

test("home quick listening card opens a random suggested listening lesson", () => {
  assert.match(appSource, /home-desktop-feature-card--violet" data-home-nav="quick-listening"/);
  assert.match(appSource, /"Luyện nghe nhanh"/);
  assert.match(appSource, /"Ngẫu nhiên vào một bài nghe đề xuất"/);
  assert.match(appSource, /function getSuggestedListeningEpisodes\(\)[\s\S]*levelId === "dialogue-trung-cap"/);
  assert.match(appSource, /target === "quick-listening"[\s\S]*openRandomSuggestedListeningLesson\(\)/);
  assert.match(appSource, /function openRandomSuggestedListeningLesson\(\)[\s\S]*Math\.random\(\)[\s\S]*state\.listeningView = "detail"[\s\S]*state\.listeningBackTarget = "dashboard"/);
});

test("home quick speaking card opens a random listening repeat sentence", () => {
  assert.match(appSource, /home-desktop-feature-card--blue" data-home-nav="quick-speaking"/);
  assert.match(appSource, /"Luyện nói nhanh"/);
  assert.match(appSource, /"Ngẫu nhiên vào phần nói theo"/);
  assert.match(appSource, /function getListeningRepeatPracticeCandidates\(\)[\s\S]*episode\.sentences\.map\(\(sentence,\s*sentenceIndex\)/);
  assert.match(appSource, /target === "quick-speaking"[\s\S]*openRandomListeningRepeatPractice\(\)/);
  assert.match(appSource, /function openRandomListeningRepeatPractice\(\)[\s\S]*randomArrayItem\(candidates\)[\s\S]*state\.listeningView = "repeat"[\s\S]*state\.listeningSentenceIndex = selected\.sentenceIndex[\s\S]*resetListeningRepeatAttempt\(\)/);
});

test("high-frequency communication back button stays above topic cards", () => {
  assert.match(styles, /\.screen-course\s+\.app-desktop-shell--write-communication\s+\.write-communication-screen\s*>\s*\.write-path-hero\s*\{[^}]*z-index:\s*220\s*!important/s);
  assert.match(styles, /\.screen-course\s+\.app-desktop-shell--write-communication\s+\.write-communication-screen\s*>\s*\.write-path-hero\s+\.hsk-level-hero-back-btn\s*\{[^}]*z-index:\s*221\s*!important[^}]*pointer-events:\s*auto\s*!important[^}]*transform:\s*translateZ\(0\)/s);
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

test("writing path picker hides the four support cards", () => {
  assert.match(styles, /\.write-feature-grid\s*\{[^}]*display:\s*none\s*!important/s);
  assert.doesNotMatch(appSource, /writeFeatureBtn/);
  assert.doesNotMatch(appSource, /dataset\.writeFeature/);
});

test("writing path picker has scoped responsive guardrails", () => {
  assert.match(styles, /Writing path picker responsive guardrails/);
  assert.match(styles, /Final responsive pass for the writing path selector across laptops, tablets, and phones/);
  assert.match(styles, /\.screen-course\s+\.app-desktop-shell--write-path\s*\{[^}]*overflow-x:\s*clip/s);
  assert.match(styles, /@media \(min-width:\s*901px\)[\s\S]*\.screen-course\s+\.app-desktop-shell--write-path\s*\.app-desktop-content\s*\{[^}]*margin-left:\s*var\(--desktop-sidebar-width\)/s);
  assert.match(styles, /\.write-path-picker\s*\{[^}]*--write-path-hero-safe-inset:\s*0px/s);
  assert.match(styles, /\.write-path-hero\s*\{[^}]*width:\s*calc\(100%\s*-\s*\(var\(--write-path-hero-safe-inset\)\s*\*\s*2\)\)[^}]*margin-inline:\s*var\(--write-path-hero-safe-inset\)/s);
  assert.match(styles, /@media \(min-width:\s*901px\)[\s\S]*\.write-path-picker\s*\{[^}]*--write-path-hero-safe-inset:\s*clamp\(22px,\s*2\.4vw,\s*40px\)/s);
  assert.match(styles, /@media \(min-width:\s*901px\)[\s\S]*\.write-path-card\s*\{[^}]*min-height:\s*clamp\(148px,\s*12\.4vw,\s*198px\)/s);
  assert.match(styles, /@media \(min-width:\s*901px\) and \(max-width:\s*1180px\)[\s\S]*\.write-path-grid\s*\{[^}]*grid-template-columns:\s*1fr/s);
  assert.match(styles, /@media \(max-width:\s*900px\)[\s\S]*\.screen-course\s+\.app-desktop-shell--write-path\s*\.app-desktop-sidebar\s*\{[^}]*display:\s*none/s);
  assert.match(styles, /@media \(max-width:\s*900px\)[\s\S]*\.write-path-picker\s*\{[^}]*--write-path-hero-safe-inset:\s*0px\s*!important/s);
  assert.match(styles, /@media \(min-width:\s*1181px\) and \(max-width:\s*1540px\)[\s\S]*\.write-path-card--hsk-selector,[\s\S]*\.write-path-card--communication-selector\s*\{[^}]*min-height:\s*clamp\(338px,\s*31vw,\s*430px\)/s);
  assert.match(styles, /@media \(min-width:\s*901px\) and \(max-width:\s*1180px\)[\s\S]*\.write-path-card--hsk-selector,[\s\S]*\.write-path-card--communication-selector\s*\{[^}]*min-height:\s*auto/s);
  assert.match(styles, /@media \(max-width:\s*560px\)[\s\S]*\.write-hsk-level-row\s*\{[^}]*--hsk-row-shift:\s*0px\s*!important[^}]*grid-template-columns:\s*58px minmax\(0,\s*1fr\) 20px/s);
  assert.match(styles, /@media \(max-width:\s*380px\)[\s\S]*\.write-communication-topic-carousel\s*\{[^}]*grid-auto-columns:\s*minmax\(112px,\s*72vw\)/s);
  assert.match(styles, /@media \(hover:\s*none\),\s*\(pointer:\s*coarse\)[\s\S]*\.write-hsk-level-row:hover,[\s\S]*\.write-hsk-level-row:focus-visible\s*\{[^}]*transform:\s*translateX\(var\(--hsk-row-shift,\s*0px\)\)/s);
  assert.match(styles, /@media \(hover:\s*none\),\s*\(pointer:\s*coarse\)[\s\S]*\.write-communication-topic-card:focus-visible\s*\{[^}]*transform:\s*none\s*!important/s);
});
