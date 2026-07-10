const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const styles = fs.readFileSync(path.join(__dirname, "..", "public", "styles.css"), "utf8");

test("listening lesson picker rows have polished label and hover styles", () => {
  assert.match(styles, /Listening lesson picker: richer lesson labels and modern hover feedback/);
  assert.match(
    styles,
    /#listeningScreen \.app-desktop-shell--listening:has\(\.listening-lessons-screen\) \.listening-lesson-row\s*\{[\s\S]*isolation:\s*isolate !important;[\s\S]*transition:/,
  );
  assert.match(
    styles,
    /\.listening-lesson-row:hover,[\s\S]*\.listening-lesson-row:focus-visible\s*\{[\s\S]*transform:\s*translateY\(-3px\) !important;[\s\S]*box-shadow:/,
  );
});

test("listening lesson number and metadata labels are visually distinct chips", () => {
  assert.match(
    styles,
    /\.listening-lesson-play\.listening-lesson-number\s*\{[\s\S]*radial-gradient\(circle at 28% 22%[\s\S]*letter-spacing:\s*0 !important;/,
  );
  assert.match(
    styles,
    /\.listening-lesson-status,[\s\S]*\.listening-lesson-duration\s*\{[\s\S]*display:\s*inline-flex !important;[\s\S]*border-radius:\s*999px !important;/,
  );
  assert.match(
    styles,
    /\.listening-lesson-status::before,[\s\S]*\.listening-lesson-duration::before\s*\{[\s\S]*width:\s*7px !important;[\s\S]*background:\s*currentColor !important;/,
  );
});

test("mobile listening lesson rows keep the richer treatment compact", () => {
  assert.match(
    styles,
    /@media \(max-width:\s*680px\) \{[\s\S]*\.listening-lesson-row\s*\{[\s\S]*grid-template-columns:\s*56px minmax\(0,\s*1fr\) 18px !important;[\s\S]*min-height:\s*88px !important;/,
  );
  assert.match(
    styles,
    /@media \(max-width:\s*680px\) \{[\s\S]*\.listening-lesson-status,[\s\S]*\.listening-lesson-duration\s*\{[\s\S]*font-size:\s*11px !important;/,
  );
});
