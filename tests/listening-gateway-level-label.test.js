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
  assert.doesNotMatch(dialogueIntermediate, /code:\s*"B2"/);
  assert.doesNotMatch(dialogueIntermediate, /code:\s*"A2"/);
});

test("dialogue advanced level shows C instead of B1", () => {
  const dialogueAdvanced = appSource.match(/\{ id:\s*"dialogue-cao-cap"[\s\S]*?\}/)?.[0] || "";
  assert.match(dialogueAdvanced, /code:\s*"C"/);
  assert.doesNotMatch(dialogueAdvanced, /code:\s*"B1"/);
});

test("dialogue level badges have visible styles for A B and C", () => {
  const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");
  assert.match(styles, /\.listening-level-code--a,[\s\S]*\.listening-level-code--a1\s*\{/);
  assert.match(styles, /\.listening-level-code--b,[\s\S]*\.listening-level-code--a2\s*\{/);
  assert.match(styles, /\.listening-level-code--c,[\s\S]*\.listening-level-code--b1\s*\{/);
});
