const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.resolve(__dirname, "..");
const appSource = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");

test("active repeat sentence card renders a visible sentence count badge", () => {
  assert.match(appSource, /const sentenceNumber = `\$\{index \+ 1\} \/ \$\{total\}`;/);
  assert.match(appSource, /class="listening-repeat-card-count"/);
  assert.match(appSource, /`Câu \$\{sentenceNumber\}`/);
});

test("repeat sentence count badge is styled for mobile and hidden on desktop", () => {
  assert.match(styles, /\.listening-repeat-card-count\s*\{/);
  assert.match(styles, /#listeningScreen \.app-desktop-shell--listening \.listening-repeat-card-count\s*\{/);
  assert.match(
    styles,
    /@media \(min-width:\s*701px\) \{[\s\S]*#listeningScreen \.app-desktop-shell--listening \.listening-repeat-card-count\s*\{[\s\S]*display:\s*none !important;/,
  );
  assert.match(styles, /#listeningScreen \.listening-repeat-card-count\s*\{[\s\S]*top:\s*18px !important;/);
});
