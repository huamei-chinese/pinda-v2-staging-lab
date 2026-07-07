const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");
const html = fs.readFileSync(path.join(publicDir, "admin-v2-clean.html"), "utf8");
const css = fs.readFileSync(path.join(publicDir, "admin-v2-clean.css"), "utf8");
const js = fs.readFileSync(path.join(publicDir, "admin-v2-clean.js"), "utf8");

test("admin v2 clean shell exists as a separate UI-only page for design review", () => {
  for (const required of [
    "Admin V2 clean shell",
    "给阿辉的纯净后台",
    "UI review only · no data",
    "admin-v2-clean.css",
    "admin-v2-clean.js",
    'data-clean-tab="users"',
    'data-clean-panel="users"',
    'data-clean-i18n="navUsers"',
    'data-clean-i18n="sectionUsersTitle"',
    'data-clean-i18n="emptyUsers"',
    "暂无用户数据",
  ]) {
    assert.match(html, new RegExp(required), `clean shell should include ${required}`);
  }

  assert.match(css, /\.clean-admin-shell/);
  assert.match(css, /\.clean-table/);
  assert.match(js, /setCleanAdminTab/);
  assert.match(js, /setCleanAdminLanguage/);
});

test("admin v2 clean shell language switch covers navigation tables modules and empty states", () => {
  for (const required of [
    "document.querySelectorAll(\"[data-clean-i18n]\")",
    "document.querySelectorAll(\"[data-clean-i18n-placeholder]\")",
    "Quản lý người dùng",
    "Bàn hỗ trợ khách hàng",
    "Tên / ID",
    "Chưa có dữ liệu người dùng",
    "Trạng thái tổng quan trống",
    "Đại lý và hoa hồng",
    "Cài đặt hệ thống",
  ]) {
    assert.match(js, new RegExp(required.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), `clean language switch should include ${required}`);
  }

  const i18nKeyCount = (html.match(/data-clean-i18n=/g) || []).length;
  assert.ok(i18nKeyCount >= 55, `expected broad clean-shell i18n coverage, got ${i18nKeyCount}`);
});

test("admin v2 clean shell does not connect to backend APIs production data or write paths", () => {
  const combined = `${html}\n${css}\n${js}`;

  for (const forbidden of [
    "fetch(",
    "XMLHttpRequest",
    "DATABASE_URL",
    "/api/admin-v2/",
    "/api/payments",
    "/api/webhooks",
    "grantVip",
    "payment_orders",
    "real-users-readonly-preview",
    "admin-v2-local-data.json",
  ]) {
    assert.doesNotMatch(combined, new RegExp(forbidden.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), `clean shell must not include ${forbidden}`);
  }
});

test("admin v2 clean shell keeps the full admin console untouched", () => {
  const fullAdmin = fs.readFileSync(path.join(publicDir, "admin-v2.html"), "utf8");
  assert.match(fullAdmin, /admin-v2\.css/);
  assert.match(fullAdmin, /admin-v2\.js/);
  assert.doesNotMatch(fullAdmin, /admin-v2-clean\.css/);
  assert.doesNotMatch(fullAdmin, /admin-v2-clean\.js/);
});
