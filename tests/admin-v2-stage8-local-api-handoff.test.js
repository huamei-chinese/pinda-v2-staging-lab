const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "..");
const publicDir = path.join(repoRoot, "public");
const serveLocal = fs.readFileSync(path.join(repoRoot, "serve-local.mjs"), "utf8");
const html = fs.readFileSync(path.join(publicDir, "admin-v2.html"), "utf8");
const js = fs.readFileSync(path.join(publicDir, "admin-v2.js"), "utf8");
const localData = JSON.parse(fs.readFileSync(path.join(publicDir, "admin-v2-local-data.json"), "utf8"));

function requestJson(port, pathname) {
  return new Promise((resolve, reject) => {
    const req = http.get(
      {
        hostname: "127.0.0.1",
        port,
        path: pathname,
        timeout: 3000,
      },
      (res) => {
        let body = "";
        res.setEncoding("utf8");
        res.on("data", (chunk) => {
          body += chunk;
        });
        res.on("end", () => {
          resolve({
            statusCode: res.statusCode,
            contentType: res.headers["content-type"] || "",
            body,
          });
        });
      },
    );
    req.on("timeout", () => {
      req.destroy(new Error(`request timed out for ${pathname}`));
    });
    req.on("error", reject);
  });
}

async function waitForServer(port) {
  const deadline = Date.now() + 5000;
  let lastError;

  while (Date.now() < deadline) {
    try {
      const response = await requestJson(port, "/admin-v2.html");
      if (response.statusCode === 200) return;
    } catch (error) {
      lastError = error;
    }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  throw lastError || new Error("serve-local did not start");
}

async function withPreviewServer(assertContext, callback) {
  const port = 43100 + Math.floor(Math.random() * 1000);
  let output = "";
  const child = spawn(process.execPath, ["serve-local.mjs"], {
    cwd: repoRoot,
    env: {
      ...process.env,
      PORT: String(port),
      DATABASE_URL: "",
    },
    stdio: ["ignore", "pipe", "pipe"],
  });
  child.stdout.on("data", (chunk) => {
    output += chunk.toString();
  });
  child.stderr.on("data", (chunk) => {
    output += chunk.toString();
  });

  assertContext.after(() => {
    child.kill();
  });

  try {
    await waitForServer(port);
  } catch (error) {
    throw new Error(`${error.message}\nserve-local output:\n${output}`);
  }
  return callback(port);
}

test("stage 8 static preview exposes local read-only admin API JSON endpoints", () => {
  for (const required of [
    "sendJson",
    "handleAdminV2Api",
    'requested === "/api/admin-v2/local-preview"',
    'requested === "/api/admin-v2/real-users-readonly-preview"',
    'requested === "/api/admin-v2/stage7-schema-contract"',
    'requested === "/api/admin-v2/stage8-local-api-handoff"',
    "buildRealReadonlyPreview",
    "buildStage7SchemaContract",
    "buildStage8LocalApiHandoff",
    'path.resolve(root, "public", `.${requested}`)',
  ]) {
    assert.match(serveLocal, new RegExp(required.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }

  assert.match(serveLocal, /"Content-Type": "application\/json; charset=utf-8"/);
  assert.match(serveLocal, /req\.method !== "GET"/);
  assert.match(serveLocal, /writeEnabled:\s*false/);
  assert.match(serveLocal, /realDatabaseConnected:\s*false/);
  assert.match(serveLocal, /productionDeployEnabled:\s*false/);
});

test("stage 8 documents the local API handoff without enabling risky writes", () => {
  assert.match(html, /第 8 阶段：本地只读 API 联调验收/);
  assert.match(html, /真实库：不连接/);
  assert.match(html, /写入：关闭/);
  assert.match(js, /stage8HandoffUrl:\s*"\/api\/admin-v2\/stage8-local-api-handoff"/);
  assert.match(serveLocal, /buildStage8LocalApiHandoff/);

  assert.equal(localData.stage8LocalApiHandoff.realDatabaseConnected, false);
  assert.equal(localData.stage8LocalApiHandoff.writeEnabled, false);
  assert.equal(localData.stage8LocalApiHandoff.productionDeployEnabled, false);

  for (const forbidden of [
    /\bDATABASE_URL\b.*process\.env/i,
    /\bmethod:\s*["']POST["'][\s\S]{0,120}stage8/i,
    /\bINSERT\s+INTO\b|\bUPDATE\s+\w+\s+SET\b|\bDELETE\s+FROM\b|\bCREATE\s+TABLE\b/i,
  ]) {
    assert.doesNotMatch(serveLocal, forbidden);
    assert.doesNotMatch(js, forbidden);
  }

  assert.doesNotMatch(serveLocal, /\bPaymentService\b|\bSEPAY\b/i);
});
