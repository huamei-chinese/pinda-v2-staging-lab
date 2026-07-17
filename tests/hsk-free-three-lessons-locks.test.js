const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.join(__dirname, "..");
const publicAppSource = fs.readFileSync(path.join(repoRoot, "public", "app.js"), "utf8");
const rootAppSource = fs.readFileSync(path.join(repoRoot, "app.js"), "utf8");
const rootIndex = fs.readFileSync(path.join(repoRoot, "index.html"), "utf8");
const publicIndex = fs.readFileSync(path.join(repoRoot, "public", "index.html"), "utf8");
const contentServiceSource = fs.readFileSync(path.join(repoRoot, "src", "content", "content.service.ts"), "utf8");

for (const [label, source] of [["public/app.js", publicAppSource], ["app.js", rootAppSource]]) {
  test(`${label} keeps HSK1-3 first three lessons fully free before partial lesson four`, () => {
    const hskOneToThreeBlock = source.match(/if \(level >= 1 && level <= 3\) \{[\s\S]*?\n  \}/)?.[0] || "";
    assert.match(source, /if \(level >= 1 && level <= 3\) \{/);
    assert.match(source, /if \(lessonNo <= 3\) return accessRule\("open"\);/);
    assert.match(source, /if \(lessonNo === 4\) return accessRule\("partial", itemType === "sentence" \? 3 : 7\);/);
    assert.doesNotMatch(hskOneToThreeBlock, /if \(lessonNo === 3\) return accessRule\("partial"/);
    assert.doesNotMatch(source, /if \(level >= 3 && level <= 6\) \{\s*if \(lessonNo <= 2\) return accessRule\("partial"/);
  });
}

for (const [label, source] of [["public/app.js", publicAppSource], ["app.js", rootAppSource]]) {
  test(`${label} keeps HSK4-6 fallback aligned with database lock policy`, () => {
    assert.match(source, /if \(level === 4 && lessonNo <= 2\) return accessRule\("open"\);/);
    assert.match(source, /if \(\(level === 5 \|\| level === 6\) && lessonNo === 1\) return accessRule\("partial", 5\);/);
    assert.match(source, /if \(\(level === 5 \|\| level === 6\) && lessonNo === 2\) return accessRule\("open"\);/);
    assert.match(source, /if \(lessonNo === 3\) return accessRule\("partial", itemType === "sentence" \? 10 : 20\);/);
    assert.doesNotMatch(source, /if \(lessonNo <= 2\) return accessRule\("partial", itemType === "sentence" \? 2 : 6\);/);
  });
}

test("public HSK lock API includes open rows so the client does not guess them", () => {
  assert.doesNotMatch(
    contentServiceSource,
    /FROM hsk_lesson_locks\s+WHERE locked_for_free = TRUE OR free_item_limit > 0 OR free_word_limit > 0 OR free_sentence_limit > 0\s+ORDER BY lesson_id ASC/,
  );
});

test("public app preserves open HSK access rules returned by the API", () => {
  assert.doesNotMatch(
    publicAppSource,
    /\.filter\(\(item\) => item\.lockedForFree === true \|\| Math\.max\(0, Number\(item\.freeItemLimit \|\| item\.freeWordLimit \|\| item\.freeSentenceLimit \|\| 0\)\) > 0\)\s+\.map\(\(item\) => \[item\.lessonId/,
  );
});

test("entrypoints cache-bust the server-truth content lock bundle", () => {
  assert.match(rootIndex, /app\.js\?v=auth-forgot-under-password-20260717/);
  assert.match(publicIndex, /app\.js\?v=auth-forgot-under-password-20260717/);
});
