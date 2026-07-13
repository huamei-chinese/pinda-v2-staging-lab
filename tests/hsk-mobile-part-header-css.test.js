const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const mobileCss = fs.readFileSync(path.join(__dirname, "..", "public", "mobile.css"), "utf8");

test("mobile HSK part header keeps the lesson title clear of the back button", () => {
  assert.match(
    mobileCss,
    /\.hsk-lesson-hero--part h1\s*\{[\s\S]*justify-content:\s*flex-start;[\s\S]*padding:\s*0 16px 0 62px !important;[\s\S]*text-align:\s*left;/,
  );
  assert.match(
    mobileCss,
    /\.hsk-lesson-hero--part h1::before\s*\{[\s\S]*max-width:\s*100%;[\s\S]*overflow:\s*hidden;[\s\S]*text-overflow:\s*ellipsis;[\s\S]*white-space:\s*nowrap;/,
  );
});
