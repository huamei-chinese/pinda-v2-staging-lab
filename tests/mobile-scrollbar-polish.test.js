const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const listeningCss = fs.readFileSync(path.join(__dirname, "..", "public", "listening-app", "listening-dashboard.css"), "utf8");
const subscriptionsCss = fs.readFileSync(path.join(__dirname, "..", "public", "subscriptions.css"), "utf8");

test("mobile listening horizontal strips keep scrolling but hide visible scrollbars", () => {
  assert.match(listeningCss, /\.sidebar,\s*\.tabs\s*\{/);
  assert.match(listeningCss, /scrollbar-width:\s*none/);
  assert.match(listeningCss, /\.sidebar::-webkit-scrollbar,\s*\.tabs::-webkit-scrollbar/s);
});

test("mobile subscription plan table keeps horizontal access without showing a scrollbar", () => {
  assert.match(subscriptionsCss, /\.plan-table\s*\{[^}]*overflow-x:\s*auto/s);
  assert.match(subscriptionsCss, /\.plan-table\s*\{[^}]*scrollbar-width:\s*none/s);
  assert.match(subscriptionsCss, /\.plan-table::-webkit-scrollbar/s);
});
