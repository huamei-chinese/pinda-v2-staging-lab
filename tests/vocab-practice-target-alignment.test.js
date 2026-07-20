const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.join(__dirname, "..");

for (const relativePath of ["app.js", path.join("public", "app.js")]) {
  const source = fs.readFileSync(path.join(repoRoot, relativePath), "utf8");

  test(`${relativePath} keeps saved-vocabulary dictation target, answer words, and audio aligned`, () => {
    assert.match(source, /const itemHanzi = hanzi \|\| item\.hanzi \|\| "";/);
    assert.match(source, /const itemMatchesTarget = normalizeHanzi\(item\.hanzi \|\| itemChineseText\(item\)\) === normalizedTarget;/);
    assert.match(source, /const audioOwner = itemMatchesTarget \? item : matchingWord \|\| \{\};/);
    assert.match(source, /const wordsMatchTarget = normalizeHanzi\(candidateWords\.map\(\(word\) => word\.text \|\| ""\)\.join\(""\)\) === normalizedTarget;/);
    assert.match(source, /candidateWords\.length > 0 && wordsMatchTarget/);
    assert.match(
      source,
      /state\.mode === "dictation" \? itemNow\.hanzi : itemNow\.vi/,
      "dictation heading must show the same vocabulary target as the answer",
    );
    assert.doesNotMatch(
      source,
      /state\.mode === "dictation" \? "听一听" : itemNow\.vi/,
      "dictation heading must not use the unrelated static 听一听 label",
    );
  });
}
