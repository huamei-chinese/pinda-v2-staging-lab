const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.join(__dirname, "..");
const publicAppJs = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const rootAppJs = fs.readFileSync(path.join(root, "app.js"), "utf8");
const stylesCss = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");

test("VIP popup shows only the 3-day and 1-month plans", () => {
  for (const source of [publicAppJs, rootAppJs]) {
    const selectionSource = source.match(
      /function selectUpgradePlansForDisplay\(apiPlans = \[\]\) \{[\s\S]*?\n\}/,
    )?.[0] || "";

    assert.match(selectionSource, /return \[threeDay, oneMonth\];/);
    assert.doesNotMatch(selectionSource, /const threeMonth|return \[[^\]]*threeMonth/);
    assert.match(source, /grid\.classList\.toggle\("upgrade-plans-grid--double", plans\.length === 2\);/);
  }
});

test("two VIP plans stay centered on larger screens and stack cleanly below 780px", () => {
  assert.match(
    stylesCss,
    /\.upgrade-plans-grid\.upgrade-plans-grid--double\s*\{[\s\S]*?grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*280px\)\);[\s\S]*?justify-content:\s*center;/,
  );

  const mobileStart = stylesCss.indexOf("@media (max-width: 780px)");
  const mobileEnd = stylesCss.indexOf("/* Transfer info modal */", mobileStart);
  const mobileUpgradeStyles = stylesCss.slice(mobileStart, mobileEnd);

  assert.match(
    mobileUpgradeStyles,
    /\.upgrade-plans-grid\.upgrade-plans-grid--double\s*\{[\s\S]*?grid-template-columns:\s*1fr;/,
  );
  assert.match(mobileUpgradeStyles, /\.upgrade-plan-kicker\s*\{\s*display:\s*none;/);
  assert.doesNotMatch(
    mobileUpgradeStyles.match(/\.upgrade-plan-price span\s*\{[\s\S]*?\}/)?.[0] || "",
    /text-decoration:\s*line-through/,
  );
});
