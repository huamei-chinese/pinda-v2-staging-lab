const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const appSource = fs.readFileSync(path.join(__dirname, "..", "public", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(__dirname, "..", "public", "styles.css"), "utf8");

test("desktop sidebar renders a VIP nav label that opens the upgrade modal", () => {
  assert.match(appSource, /class="home-desktop-nav-item home-desktop-vip-label"/);
  assert.match(appSource, /data-sidebar-vip-upgrade/);
  assert.match(appSource, /G\\u00f3i VIP/);
  assert.match(
    appSource,
    /const sidebarVipUpgradeBtn = event\.target\.closest\("\[data-sidebar-vip-upgrade\]"\);[\s\S]*showUpgradePlansModal\(\);[\s\S]*return;/,
  );
});

test("desktop sidebar VIP label sits before account and reuses nav item styling", () => {
  assert.match(appSource, /data-sidebar-vip-upgrade[\s\S]*data-home-nav="account"/);
  assert.match(styles, /\.home-desktop-nav-item\s*\{[\s\S]*background:\s*transparent;/);
  assert.doesNotMatch(styles, /\.home-desktop-vip-label\s*\{/);
});
