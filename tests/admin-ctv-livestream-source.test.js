const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const appSource = fs.readFileSync(path.join(__dirname, "..", "public", "app.js"), "utf8");
const stylesSource = fs.readFileSync(path.join(__dirname, "..", "public", "styles.css"), "utf8");

test("admin CTV link source picker includes CTV Livestream", () => {
  assert.match(appSource, /ADMIN_SOURCE_KEYS = \["tiktok", "facebook", "koc", "ctv_livestream"\]/);
  assert.match(appSource, /\{ id: "ctv_livestream", label: "CTV Livestream" \}/);
  assert.match(appSource, /ctv_livestream: "CTV Livestream"/);
  assert.match(appSource, /sourceSummary\.counts\.ctv_livestream/);
});

test("admin CTV livestream source has dedicated visual styles", () => {
  assert.match(stylesSource, /\.admin-ctv-source-card--ctv_livestream/);
  assert.match(stylesSource, /\.admin-ctv-src-pill\.src-ctv_livestream/);
});

test("admin CTV tab refreshes the full user list for staff referral attribution", () => {
  assert.match(appSource, /case "collaborators":\s*loadAdminUsers\(\);\s*break;/);
  assert.match(
    appSource,
    /const adminCtvTabBtn = event\.target\.closest\("#adminCtvTabBtn"\);[\s\S]*state\.adminTab = "collaborators";[\s\S]*savePersistedRoute\(\);\s*loadAdminUsers\(\);\s*return;/,
  );
  assert.doesNotMatch(
    appSource,
    /state\.adminTab = "collaborators";[\s\S]*if \(!state\.adminUsers\.length\) loadAdminUsers\(\);/,
  );
});

test("admin CTV generated links use fixed partner codes and source prefixes", () => {
  assert.match(appSource, /partnerCode: normalizeAdminCtvPartnerCode\(user\.partnerCode \|\| user\.partner_code\)/);
  assert.match(appSource, /facebook: "F"/);
  assert.match(appSource, /tiktok: "T"/);
  assert.match(appSource, /koc: "K"/);
  assert.match(appSource, /ctv_livestream: "L"/);
  assert.match(appSource, /const code = getAdminCtvShortReferralCode\(ctv\);/);
  assert.doesNotMatch(appSource, /url\.searchParams\.set\("src"/);
});
