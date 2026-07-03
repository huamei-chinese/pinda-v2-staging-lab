import { spawn, spawnSync } from "node:child_process";

const port = Number(process.env.LAB_ACCEPTANCE_PORT || process.env.PORT || 4173);
const baseUrl = `http://localhost:${port}`;
const npmCliPath = process.env.npm_execpath;
const npmCommand = npmCliPath ? process.execPath : process.platform === "win32" ? "npm.cmd" : "npm";
const npmBaseArgs = npmCliPath ? [npmCliPath] : [];

function runStep(name, command, args, options = {}) {
  console.log(`\n[acceptance] ${name}`);
  const result = spawnSync(command, args, {
    cwd: process.cwd(),
    env: { ...process.env, ...options.env },
    stdio: "inherit",
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    throw new Error(`${name} failed with exit code ${result.status ?? "unknown"}`);
  }
}

async function waitForServer() {
  const deadline = Date.now() + 15_000;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(baseUrl);
      if (response.ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 300));
  }
  throw new Error(`server.js did not become ready at ${baseUrl}`);
}

async function main() {
  let serverProcess = null;
  try {
    runStep("safety gate", npmCommand, [...npmBaseArgs, "run", "safety:lab"]);
    runStep("unit and static tests", npmCommand, [...npmBaseArgs, "test"]);
    runStep("build", npmCommand, [...npmBaseArgs, "run", "build"]);
    runStep("dependency audit", npmCommand, [...npmBaseArgs, "audit", "--audit-level=high"]);

    console.log(`\n[acceptance] start server.js on ${baseUrl}`);
    serverProcess = spawn(process.execPath, ["server.js"], {
      cwd: process.cwd(),
      env: { ...process.env, PORT: String(port), DATABASE_URL: "" },
      stdio: "inherit",
    });
    await waitForServer();

    runStep("smoke checks", npmCommand, [...npmBaseArgs, "run", "smoke:lab"], {
      env: { LAB_SMOKE_BASE_URL: baseUrl },
    });

    console.log("\n[acceptance] staging lab acceptance passed");
  } finally {
    if (serverProcess && !serverProcess.killed) {
      if (process.platform === "win32") {
        spawnSync("powershell.exe", ["-NoProfile", "-Command", `Stop-Process -Id ${serverProcess.pid} -ErrorAction SilentlyContinue`], {
          stdio: "inherit",
        });
      } else {
        serverProcess.kill();
      }
    }
  }
}

main().catch((error) => {
  console.error(`\n[acceptance] ${error.message}`);
  process.exit(1);
});
