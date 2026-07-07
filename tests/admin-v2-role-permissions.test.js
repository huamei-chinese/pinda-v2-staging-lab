const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");
const html = fs.readFileSync(path.join(publicDir, "admin-v2.html"), "utf8");
const css = fs.readFileSync(path.join(publicDir, "admin-v2.css"), "utf8");
const js = fs.readFileSync(path.join(publicDir, "admin-v2.js"), "utf8");

test("admin v2 exposes P2 role and menu permission skeleton", () => {
  const text = html.replace(/\s+/g, " ");

  for (const required of [
    "P2：角色与菜单权限骨架",
    "老板验收重点",
    "角色切换预览",
    "权限矩阵",
    "admin",
    "staff",
    "content_manager",
    "agent",
    "系统管理员",
    "运营员工",
    "内容管理员",
    "代理账号",
  ]) {
    assert.match(text, new RegExp(required), `P2 role skeleton should include ${required}`);
  }

  for (const role of ["admin", "staff", "content_manager", "agent"]) {
    assert.match(html, new RegExp(`data-admin-v2-role="${role}"`), `role switch should include ${role}`);
  }
});

test("admin v2 defines role boundaries without enabling high-risk writes", () => {
  const text = html.replace(/\s+/g, " ");

  for (const required of [
    "admin 可看全后台",
    "staff 不看佣金导出和系统设置",
    "content_manager 不看营收、佣金、VIP 定价",
    "agent 只看自己的推广、客户、佣金",
    "支付、VIP、数据库写入仍然关闭",
    "正式登录未接入",
  ]) {
    assert.match(text, new RegExp(required), `role boundary should state ${required}`);
  }

  for (const forbidden of [
    "enablePaymentWrite",
    "enableVipMutation",
    "connectProductionDatabase",
    "process.env.DATABASE_URL",
    "SEPAY_WEBHOOK_API_KEY=",
  ]) {
    assert.doesNotMatch(text + js, new RegExp(forbidden), `P2 must not expose ${forbidden}`);
  }
});

test("admin v2 role controls have styling and client-side preview logic", () => {
  assert.match(css, /\.role-switcher/);
  assert.match(css, /\.permission-matrix/);
  assert.match(css, /\.role-scope-card/);
  assert.match(js, /adminV2Roles/);
  assert.match(js, /setAdminV2Role/);
  assert.match(js, /data-admin-v2-role/);
});
