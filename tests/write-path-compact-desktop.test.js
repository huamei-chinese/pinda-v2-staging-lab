const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.resolve(__dirname, "..");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");

test("writing path compact desktop keeps content clear of the sidebar", () => {
  assert.match(
    styles,
    /@media \(min-width:\s*1181px\) and \(max-width:\s*1320px\) \{[\s\S]*\.screen-course \.app-desktop-shell--write-path \{[\s\S]*--desktop-sidebar-width:\s*clamp\(236px,\s*19\.8vw,\s*260px\) !important;[\s\S]*\.app-desktop-content \{[\s\S]*width:\s*calc\(100vw - var\(--desktop-sidebar-width\)\) !important;[\s\S]*margin-left:\s*var\(--desktop-sidebar-width\) !important;/,
  );
});

test("writing path compact desktop shrinks the two selector cards", () => {
  assert.match(
    styles,
    /@media \(min-width:\s*1181px\) and \(max-width:\s*1320px\) \{[\s\S]*\.write-path-card--hsk-selector,[\s\S]*\.write-path-card--communication-selector \{[\s\S]*min-height:\s*clamp\(304px,\s*27\.5vw,\s*360px\) !important;[\s\S]*\.write-communication-topic-carousel \{[\s\S]*grid-auto-columns:\s*clamp\(106px,\s*9\.1vw,\s*124px\) !important;/,
  );
});
