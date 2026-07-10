const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const styles = fs.readFileSync(path.join(__dirname, "..", "public", "styles.css"), "utf8");

test("listening mobile return header spans the full viewport width", () => {
  assert.match(
    styles,
    /@media \(max-width:\s*900px\) \{[\s\S]*#listeningScreen \.app-desktop-shell--listening \.app-desktop-content\s*\{[\s\S]*width:\s*100vw !important;[\s\S]*margin-left:\s*0 !important;/i,
  );
  assert.match(
    styles,
    /#listeningScreen \.mobile-page-return-bar--listening\s*\{[\s\S]*width:\s*100vw !important;[\s\S]*max-width:\s*100vw !important;[\s\S]*border-radius:\s*0 !important;/i,
  );
  assert.match(
    styles,
    /#listeningScreen \.mobile-page-return-bar--listening \.mobile-page-return-title\s*\{[\s\S]*justify-self:\s*center !important;[\s\S]*text-overflow:\s*ellipsis !important;/i,
  );
});
