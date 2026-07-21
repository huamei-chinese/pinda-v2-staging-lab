const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.join(__dirname, "..");
const appSource = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const controllerSource = fs.readFileSync(path.join(root, "src", "auth", "auth.controller.ts"), "utf8");
const authServiceSource = fs.readFileSync(path.join(root, "src", "auth", "auth.service.ts"), "utf8");
const authModuleSource = fs.readFileSync(path.join(root, "src", "auth", "auth.module.ts"), "utf8");
const mainSource = fs.readFileSync(path.join(root, "src", "main.ts"), "utf8");
const packageSource = fs.readFileSync(path.join(root, "package.json"), "utf8");

test("frontend signup and login use the PostgreSQL auth endpoints", () => {
  assert.match(appSource, /apiRequest\(isLogin \? "\/api\/login" : "\/api\/register"/);
  assert.match(appSource, /apiRequest\("\/api\/login"/);
  assert.doesNotMatch(appSource, /firebase/i);
});

test("backend exposes only the legacy account auth routes", () => {
  assert.match(controllerSource, /@Post\('register'\)/);
  assert.match(controllerSource, /@Post\('login'\)/);
  assert.match(authServiceSource, /verifyPassword\(password, user\.password_hash\)/);
  assert.doesNotMatch(controllerSource, /firebase/i);
  assert.doesNotMatch(authServiceSource, /firebase/i);
  assert.doesNotMatch(authModuleSource, /firebase/i);
  assert.doesNotMatch(mainSource, /firebase/i);
});

test("Firebase server dependency is removed", () => {
  assert.doesNotMatch(packageSource, /firebase-admin/);
});
