const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");
const htmlPath = path.join(publicDir, "admin-v2.html");
const cssPath = path.join(publicDir, "admin-v2.css");
const jsPath = path.join(publicDir, "admin-v2.js");

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

test("admin v2 has one boss acceptance entry with product sections", () => {
  assert.equal(fs.existsSync(htmlPath), true, "public/admin-v2.html must exist");
  assert.equal(fs.existsSync(cssPath), true, "public/admin-v2.css must exist");
  assert.equal(fs.existsSync(jsPath), true, "public/admin-v2.js must exist");

  const html = read(htmlPath);
  const text = html.replace(/\s+/g, " ");

  for (const required of [
    "华美后台数据管理中心 V2 实验舱",
    "运营总览",
    "用户管理",
    "学习数据分析",
    "客服工作台",
    "内容管理",
    "VIP 与课程解锁",
    "系统与发布闸口",
  ]) {
    assert.match(text, new RegExp(required), `admin-v2.html should include ${required}`);
  }

  for (const field of [
    "邮箱",
    "姓名",
    "手机号",
    "注册时间",
    "来源",
    "代理归属",
    "VIP 状态",
    "VIP 到期",
    "最近学习",
    "操作",
  ]) {
    assert.match(text, new RegExp(field), `user management should keep field ${field}`);
  }
});

test("admin v2 describes V2 bridge controls without production write access", () => {
  const html = read(htmlPath);
  const text = html.replace(/\s+/g, " ");

  for (const required of [
    "每日听力",
    "拼打/写字",
    "HSK",
    "高频汉语",
    "fallback",
    "rollback",
    "写操作默认关闭",
    "发布需要老板确认",
    "Git push 需要老板确认",
    "正式数据库未连接",
    "正式支付未连接",
    "正式站未部署",
  ]) {
    assert.match(text, new RegExp(required), `bridge console should explain ${required}`);
  }

  for (const forbidden of [
    "No API Connected",
    "Write Operations Disabled",
    "Mock",
    "Empty State",
    "admin-v2-content-bridge-preview.html",
    "admin-v2-operations-preview.html",
    "admin-v2-vip-unlock-preview.html",
    "真实数据库连接串",
    "SEPAY_WEBHOOK_API_KEY=",
  ]) {
    assert.doesNotMatch(text, new RegExp(forbidden), `boss entry should not expose ${forbidden}`);
  }
});

test("admin v2 assets are linked and syntactically present", () => {
  const html = read(htmlPath);
  const css = read(cssPath);
  const js = read(jsPath);

  assert.match(html, /href="admin-v2\.css"/);
  assert.match(html, /src="admin-v2\.js"/);
  assert.match(css, /\.admin-shell/);
  assert.match(css, /\.risk-gate/);
  assert.match(js, /adminV2State/);
  assert.match(js, /data-admin-v2-tab/);
});
