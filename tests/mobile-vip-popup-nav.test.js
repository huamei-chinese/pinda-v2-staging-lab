const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.join(__dirname, "..");
const indexHtml = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");
const appJs = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const stylesCss = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");

test("mobile bottom nav shows a VIP button", () => {
  const vipButton = indexHtml.match(/<button id="bottomNavSubscriptionsBtn"[\s\S]*?<\/button>/)?.[0] || "";
  const vipButtonOpenTag = vipButton.match(/<button[^>]*>/)?.[0] || "";

  assert.match(vipButtonOpenTag, /mobile-bottom-nav-vip/);
  assert.match(vipButtonOpenTag, /data-bottom-nav="vip"/);
  assert.doesNotMatch(vipButtonOpenTag, /\bhidden\b|aria-hidden="true"/);
  assert.match(vipButton, />VIP<\/span>/);
});

test("mobile VIP nav opens the upgrade popup", () => {
  assert.match(
    appJs,
    /bottomSubscriptionsBtn[\s\S]*?dataset\.bottomNav = "vip";[\s\S]*?textContent = isVi \? "Gói VIP" : "VIP";[\s\S]*?desktopNavIcon\("vip"\)/,
  );
  assert.match(
    appJs,
    /if \(bottomNavBtn\.dataset\.bottomNav === "vip"\) \{[\s\S]*?showUpgradePlansModal\(\);[\s\S]*?return;/,
  );
  assert.match(appJs, /<h3>\$\{isVi \? "Nâng cấp Gói VIP" : "VIP 套餐"\}<\/h3>/);
  assert.match(appJs, /vip:\s*`<svg[\s\S]*?m12 3\.3 2\.55 5\.16/);
});

test("mobile bottom nav fits five tabs with VIP styling", () => {
  assert.match(stylesCss, /grid-template-columns:\s*repeat\(5,\s*minmax\(0,\s*1fr\)\)/);
  assert.doesNotMatch(stylesCss, /#bottomNavDailyBtn,\s*#bottomNavVocabBtn,\s*#bottomNavSubscriptionsBtn\s*\{/);
  assert.match(stylesCss, /\.mobile-bottom-nav-vip\s*\{[\s\S]*?color:\s*#a16207 !important;/);
  assert.match(stylesCss, /\.upgrade-plans-grid\s*\{[\s\S]*?width:\s*min\(100%,\s*390px\);/);
  assert.match(indexHtml, /styles\.css\?v=sidebar-panda-streak-20260714/);
  assert.match(indexHtml, /app\.js\?v=mobile-vip-label-full-20260714/);
});
