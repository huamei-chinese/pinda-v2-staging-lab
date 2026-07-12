const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const styles = fs.readFileSync(path.join(__dirname, "..", "public", "styles.css"), "utf8");

test("mobile listening repeat speaking card sits slightly lower", () => {
  assert.match(
    styles,
    /@media \(max-width:\s*700px\)[\s\S]*body:has\(#listeningScreen:not\(\.hidden\) \.listening-repeat-lesson-screen--compact\) \.listening-repeat-feed-active-content\s*\{[\s\S]*top:\s*32%\s*!important;/,
  );
});
