const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");
const html = fs.readFileSync(path.join(publicDir, "admin-v2.html"), "utf8");
const css = fs.readFileSync(path.join(publicDir, "admin-v2.css"), "utf8");
const js = fs.readFileSync(path.join(publicDir, "admin-v2.js"), "utf8");

test("admin v2 standalone page exposes Chinese and Vietnamese language switch", () => {
  assert.match(html, /data-admin-v2-language-toggle/);
  assert.match(html, /data-admin-v2-language-current/);
  assert.match(html, /data-admin-v2-language-next/);
  assert.match(html, /中文/);
  assert.match(html, /Tiếng Việt/);
  assert.match(css, /\.admin-v2-language-toggle/);
});

test("admin v2 standalone language switch owns its labels outside the legacy app shell", () => {
  for (const required of [
    "adminV2I18n",
    "setAdminV2Language",
    "admin-v2-language",
    "Trung tâm quản trị dữ liệu HuaMei V2 Lab",
    "Quản lý người dùng",
    "Đại lý và hoa hồng",
    "Bàn hỗ trợ khách hàng",
  ]) {
    assert.match(js, new RegExp(required), `admin v2 language switch should include ${required}`);
  }

  assert.match(js, /data-admin-v2-language-toggle/);
  assert.match(js, /document\.documentElement\.lang/);
});

test("admin v2 translatable header and side navigation are wired to i18n keys", () => {
  for (const required of [
    'data-admin-v2-i18n="brandTitle"',
    'data-admin-v2-i18n="brandSubtitle"',
    'data-admin-v2-i18n="navOverview"',
    'data-admin-v2-i18n="navUsers"',
    'data-admin-v2-i18n="navSupport"',
    'data-admin-v2-i18n="navAgents"',
    'data-admin-v2-i18n="riskCopy"',
  ]) {
    assert.match(html, new RegExp(required), `admin v2 html should include ${required}`);
  }
});
