const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.resolve(__dirname, "..");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");

test("monologue gateway row icons are slightly larger on mobile", () => {
  assert.match(styles, /Slightly larger monologue icons on the listening gateway/);
  assert.match(styles, /#listeningScreen \.listening-gateway-card--monologue \.listening-level-row-icon\s*\{[\s\S]*width: 34px !important/);
  assert.match(styles, /#listeningScreen \.listening-gateway-card--monologue \.listening-level-row-icon\s*\{[\s\S]*height: 34px !important/);
  assert.match(styles, /#listeningScreen \.listening-gateway-card--monologue \.listening-level-row-icon\s*\{[\s\S]*font-size: 17px !important/);
});
