const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.join(__dirname, "..");
const packageJson = require("../package.json");
const acceptanceScriptPath = path.join(repoRoot, "scripts", "run-staging-lab-acceptance.mjs");

test("package exposes a one-command staging lab acceptance gate", () => {
  assert.equal(packageJson.scripts["acceptance:lab"], "node ./scripts/run-staging-lab-acceptance.mjs");
});

test("acceptance gate runs safety, tests, build, audit, and smoke against server.js", () => {
  assert.equal(fs.existsSync(acceptanceScriptPath), true, "run-staging-lab-acceptance.mjs should exist");

  const source = fs.readFileSync(acceptanceScriptPath, "utf8");
  const requiredCommands = [
    "npm_execpath",
    "process.execPath",
    "run",
    "safety:lab",
    "test",
    "build",
    "audit",
    "smoke:lab",
    "server.js",
    "LAB_SMOKE_BASE_URL",
    "Stop-Process",
  ];

  for (const commandPart of requiredCommands) {
    assert.match(source, new RegExp(commandPart.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), `acceptance script should include ${commandPart}`);
  }

  assert.match(source, /finally/, "acceptance script should always clean up the local server");
  assert.doesNotMatch(source, /shell:\s*true/, "acceptance script should avoid shell-based child process warnings");
  assert.match(source, /http:\/\/localhost:\$\{port\}/, "acceptance script should pass the selected local server URL to smoke");
});
