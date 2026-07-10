const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.resolve(__dirname, "..");
const appSource = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");

test("dialogue beginner level shows A instead of A1", () => {
  const dialogueBeginner = appSource.match(/\{ id:\s*"dialogue-so-cap"[\s\S]*?\}/)?.[0] || "";
  assert.match(dialogueBeginner, /code:\s*"A"/);
  assert.doesNotMatch(dialogueBeginner, /code:\s*"A1"/);
});

test("dialogue intermediate level shows B instead of A2", () => {
  const dialogueIntermediate = appSource.match(/\{ id:\s*"dialogue-trung-cap"[\s\S]*?\}/)?.[0] || "";
  assert.match(dialogueIntermediate, /code:\s*"B"/);
  assert.doesNotMatch(dialogueIntermediate, /code:\s*"A2"/);
});
