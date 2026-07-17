const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.resolve(__dirname, "..");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");
const indexHtml = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");

test("compact repeat lesson has a short-desktop responsive breakpoint", () => {
  assert.match(
    styles,
    /@media \(min-width:\s*701px\) and \(max-height:\s*700px\) \{[\s\S]*\.listening-repeat-lesson-screen--compact[\s\S]*height:\s*100dvh !important;[\s\S]*overflow:\s*hidden !important;/,
  );
});

test("short desktop repeat layout shrinks the sentence card and controls", () => {
  assert.match(
    styles,
    /@media \(min-width:\s*701px\) and \(max-height:\s*700px\) \{[\s\S]*\.listening-repeat-feed-active-content[\s\S]*height:\s*clamp\(190px,\s*37vh,\s*238px\) !important;[\s\S]*\.listening-repeat-mic-large[\s\S]*width:\s*clamp\(72px,\s*6\.2vw,\s*84px\) !important;/,
  );
});

test("desktop compact repeat pinyin can wrap without clipping", () => {
  assert.match(
    styles,
    /@media \(min-width:\s*701px\) \{[\s\S]*\.listening-repeat-lesson-screen--compact\) \.listening-repeat-feed-active-content small[\s\S]*width:\s*min\(100%,\s*880px\) !important;[\s\S]*max-height:\s*none !important;[\s\S]*overflow:\s*visible !important;/,
  );
});

test("repeat speaking screen uses the responsive backgroundienthoai4 jpg", () => {
  assert.match(
    styles,
    /#listeningScreen:not\(\.hidden\) \.app-desktop-shell--listening-repeat,[\s\S]*url\("assets\/backgroundienthoai4\.jpg"\) center center \/ cover no-repeat !important;/,
  );
  assert.doesNotMatch(
    styles,
    /listening-repeat-lesson-screen--compact[\s\S]{0,260}backgroundienthoai4\.png/,
  );
});

test("compact repeat lesson has an iPad tablet responsive breakpoint", () => {
  assert.match(
    styles,
    /\/\* iPad\/tablet repeat speaking:[\s\S]*@media \(min-width:\s*701px\) and \(max-width:\s*1024px\) \{[\s\S]*\.listening-repeat-lesson-screen--compact[\s\S]*height:\s*100dvh !important;[\s\S]*\.listening-repeat-feed-card--active[\s\S]*height:\s*100% !important;[\s\S]*grid-template-rows:\s*minmax\(92px,\s*18dvh\) minmax\(230px,\s*34dvh\) minmax\(118px,\s*18dvh\) minmax\(0,\s*1fr\) !important;/,
  );
  assert.match(
    styles,
    /@media \(min-width:\s*701px\) and \(max-width:\s*1024px\) \{[\s\S]*\.listening-repeat-feed-active-content[\s\S]*width:\s*min\(100%,\s*660px\) !important;[\s\S]*\.listening-repeat-card-actions--triad[\s\S]*width:\s*min\(100%,\s*380px\) !important;/,
  );
  assert.match(indexHtml, /styles\.css\?v=auth-forgot-under-password-20260717/);
});
