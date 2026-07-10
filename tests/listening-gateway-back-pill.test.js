const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.resolve(__dirname, "..");
const appSource = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");

test("listening gateway hero uses the top badge slot as a back button", () => {
  const gatewayRender = appSource.match(/function renderListeningLevelGateway\(options = \{\}\) \{[\s\S]*?function getListeningLevelInfo/)?.[0] || "";
  assert.match(gatewayRender, /class="listening-gateway-badge listening-gateway-badge--back" type="button" data-listening-gateway-back/);
  assert.doesNotMatch(gatewayRender, /class="listening-gateway-back-btn"/);
  assert.doesNotMatch(gatewayRender, /<span class="listening-gateway-badge">/);
});

test("listening gateway back pill remains tappable and styled on mobile", () => {
  assert.match(styles, /\.listening-gateway-badge--back\s*\{[\s\S]*appearance:\s*none !important;[\s\S]*cursor:\s*pointer !important;[\s\S]*box-shadow:/);
  assert.match(
    styles,
    /@media \(min-width:\s*901px\) \{[\s\S]*\.screen-listening \.listening-gateway-badge--back\s*\{[\s\S]*display:\s*none !important;[\s\S]*\}/,
  );
  assert.match(
    styles,
    /@media \(max-width:\s*900px\) \{[\s\S]*\.screen-listening \.listening-gateway-badge--back\s*\{[\s\S]*min-height:\s*42px !important;[\s\S]*border-radius:\s*999px !important;/,
  );
});
