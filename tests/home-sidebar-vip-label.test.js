const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const appSource = fs.readFileSync(path.join(__dirname, "..", "public", "app.js"), "utf8");
const rootAppSource = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(__dirname, "..", "public", "styles.css"), "utf8");
const indexHtml = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");
const publicIndexHtml = fs.readFileSync(path.join(__dirname, "..", "public", "index.html"), "utf8");

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

test("desktop sidebar removes the streak card and keeps panda artwork visible", () => {
  for (const source of [appSource, rootAppSource]) {
    assert.doesNotMatch(source, /class="home-desktop-sidebar-streak"/);
    assert.match(source, /class="home-desktop-sidebar-panda"/);
  }

  assert.match(styles, /\.home-desktop-sidebar-panda\s*\{[\s\S]*background-image:\s*url\("assets\/sidebar-panda\.png"\)/);
  assert.match(styles, /\.app-desktop-shell \.home-desktop-sidebar-panda\s*\{[\s\S]*display:\s*block !important;[\s\S]*max-height:\s*132px !important;/);
  assert.match(indexHtml, /styles\.css\?v=auth-forgot-under-password-20260717/);
  assert.match(publicIndexHtml, /styles\.css\?v=auth-forgot-under-password-20260717/);
  assert.doesNotMatch(
    styles,
    /\.app-desktop-shell \.home-desktop-sidebar-streak,\s*\.app-desktop-shell \.home-desktop-sidebar-panda,\s*\.app-desktop-shell \.home-desktop-sidebar-foot:empty\s*\{[\s\S]*display:\s*none !important;/,
  );
});

test("home desktop profile card has distinct regular and active VIP designs", () => {
  for (const source of [appSource, rootAppSource]) {
    assert.match(source, /home-desktop-profile-card--vip/);
    assert.match(source, /home-desktop-profile-card--regular/);
    assert.match(source, /HUAMEI VIP/);
    assert.match(source, /home-desktop-membership-chip/);
    assert.match(source, /data-home-profile-vip="upgrade"/);
    assert.doesNotMatch(source, /home-desktop-profile-action/);
    assert.match(source, /showUpgradePlansModal\(\);/);
  }

  assert.match(styles, /\.screen-home \.home-desktop-profile-card--regular\s*\{[\s\S]*rgba\(255, 255, 255, \.92\)/);
  assert.match(styles, /\.screen-home \.home-desktop-profile-card--vip\s*\{[\s\S]*linear-gradient\(135deg, rgba\(5, 77, 59, \.98\)/);
  assert.match(styles, /\.screen-home \.home-desktop-membership-perks span,\s*\.screen-home \.home-desktop-membership-perks button\s*\{[\s\S]*min-height:\s*24px !important;/);
});
