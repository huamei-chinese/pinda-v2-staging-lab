const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.resolve(__dirname, "..");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");
const indexHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
const publicIndexHtml = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");

test("iPad tablet performance layer reduces expensive rendering", () => {
  assert.match(styles, /iPad\/tablet performance layer: lighter rendering and calmer responsive layouts/);
  assert.match(styles, /@media \(min-width:\s*641px\) and \(max-width:\s*1366px\)/);
  assert.match(styles, /backdrop-filter:\s*none !important/);
  assert.match(styles, /animation-duration:\s*0\.001ms !important/);
  assert.match(styles, /content-visibility:\s*auto/);
});

test("iPad portrait and landscape layouts have explicit tablet breakpoints", () => {
  assert.match(styles, /@media \(min-width:\s*641px\) and \(max-width:\s*900px\) and \(orientation:\s*portrait\)/);
  assert.match(styles, /@media \(min-width:\s*901px\) and \(max-width:\s*1180px\)/);
  assert.match(styles, /@media \(min-width:\s*1181px\) and \(max-width:\s*1366px\)/);
  assert.match(styles, /\.home-desktop-sidebar\s*\{[\s\S]*display:\s*none !important/);
});

test("index pages load the iPad optimized stylesheet version", () => {
  assert.match(indexHtml, /styles\.css\?v=ipad-performance-20260720/);
  assert.match(publicIndexHtml, /styles\.css\?v=ipad-performance-20260720/);
});
