const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.join(__dirname, "..");
const rootApp = fs.readFileSync(path.join(root, "app.js"), "utf8");
const publicApp = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");

test("all VIP upgrade and transfer entry points are guarded by the pause modal", () => {
  for (const source of [rootApp, publicApp]) {
    assert.match(source, /const VIP_PURCHASES_PAUSED = true;/);
    assert.match(source, /function showVipPurchasesPausedModal\(\)/);
    assert.match(
      source,
      /function showUpgradePlansModal\(\) \{\s*if \(VIP_PURCHASES_PAUSED\) \{[\s\S]*?showVipPurchasesPausedModal\(\);\s*return;/,
    );
    assert.match(
      source,
      /async function showTransferInfoModal\(planId\) \{\s*if \(VIP_PURCHASES_PAUSED\) \{\s*showVipPurchasesPausedModal\(\);\s*return;/,
    );
    assert.match(source, /Tính năng mua gói VIP đang tạm ngưng\./);
    assert.match(source, /Cảm ơn bạn!/);
    assert.match(source, /role="dialog" aria-modal="true"/);
  }
});

test("VIP pause modal has desktop, mobile, keyboard, and reduced-motion support", () => {
  assert.match(styles, /\.vip-pause-overlay\s*\{/);
  assert.match(styles, /\.vip-pause-modal\s*\{[\s\S]*?width:\s*min\(100%,\s*1180px\);/);
  assert.match(styles, /@media \(max-width:\s*640px\)[\s\S]*?\.vip-pause-modal\s*\{[\s\S]*?min-height:\s*100dvh;/);
  assert.match(styles, /@media \(max-width:\s*360px\)/);
  assert.match(styles, /@media \(prefers-reduced-motion:\s*reduce\)/);
  assert.match(publicApp, /if \(event\.key === "Escape"\) closeModal\(\);/);
  assert.match(publicApp, /previouslyFocused\.focus\(\);/);
});
