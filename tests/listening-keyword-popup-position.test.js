const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.resolve(__dirname, "..");
const appSource = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");

test("keyword popup prefers the right side on compact desktop screens", () => {
  assert.match(
    appSource,
    /const isCompactDesktop = window\.matchMedia\?\.\("\(min-width: 901px\) and \(max-width: 1320px\)"\)\?\.\matches;[\s\S]*if \(isCompactDesktop && canOpenRight\) \{[\s\S]*left = rightCandidate;/,
  );
});

test("keyword popup clamps to the viewport when neither side has enough room", () => {
  assert.match(
    appSource,
    /left = Math\.max\(margin, Math\.min\(leftCandidate, window\.innerWidth - width - margin\)\);/,
  );
});
