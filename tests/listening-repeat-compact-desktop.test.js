const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.resolve(__dirname, "..");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");

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
