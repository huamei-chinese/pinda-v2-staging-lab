const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const rootAppSource = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");
const publicAppSource = fs.readFileSync(path.join(__dirname, "..", "public", "app.js"), "utf8");
const rootIndexSource = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");
const publicIndexSource = fs.readFileSync(path.join(__dirname, "..", "public", "index.html"), "utf8");

for (const [label, source] of [
  ["root app", rootAppSource],
  ["public app", publicAppSource],
]) {
  test(`${label} keeps CTV referral attribution after URL query changes`, () => {
    assert.match(source, /const REFERRAL_REF_KEY = "v2-referral-ref"/);
    assert.match(source, /const TRAFFIC_SOURCE_KEY = "v2-traffic-source"/);
    assert.match(source, /function captureReferralParams\(\)/);
    assert.match(source, /sessionStorage\.setItem\(key, value\)/);
    assert.match(source, /function ensureReferralQueryInAddress\(\)/);
    assert.match(source, /ref: getReferralRefFromUrl\(\)/);
    assert.match(source, /src: getTrafficSource\(\)/);
    assert.match(source, /if \(!isLogin\) clearReferralAttribution\(\)/);
    assert.match(source, /captureReferralRef\(\);\s+captureTrafficSource\(\);\s+ensureReferralQueryInAddress\(\);/);
  });
}

test("public CTV link generator uses a canonical root path before query params", () => {
  assert.match(publicAppSource, /const url = new URL\("\/", origin\)/);
  assert.match(publicAppSource, /url\.searchParams\.set\("r", code\)/);
  assert.match(publicAppSource, /return url\.toString\(\)/);
});

for (const [label, source] of [
  ["root index", rootIndexSource],
  ["public index", publicIndexSource],
]) {
  test(`${label} captures referral params before deferred app scripts run`, () => {
    assert.match(source, /localStorage\.setItem\("v2-referral-ref", ref\)/);
    assert.match(source, /sessionStorage\.setItem\("v2-referral-ref", ref\)/);
    assert.match(source, /localStorage\.setItem\("v2-traffic-source", src\)/);
    assert.match(source, /params\.get\("r"\) \|\| params\.get\("ref"\)/);
  });
}
