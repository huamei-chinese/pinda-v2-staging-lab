import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const port = Number(process.env.PORT || 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".mp3": "audio/mpeg",
  ".svg": "image/svg+xml",
};

function send(res, status, body, headers = {}) {
  res.writeHead(status, headers);
  res.end(body);
}

function sendJson(res, status, payload) {
  send(res, status, `${JSON.stringify(payload)}\n`, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
}

function dataPath() {
  return path.join(root, "public", "admin-v2-local-data.json");
}

function readLocalData() {
  return JSON.parse(fs.readFileSync(dataPath(), "utf8"));
}

function buildRealReadonlyUsers(users) {
  return users.map((user) => ({
    id: user.id,
    fullName: user.name || user.fullName || "unknown",
    email: user.email,
    role: user.role || "普通用户",
    currentLevel: user.level || user.currentLevel || "HSK2",
    vipStatus: user.vipStatus || user.plan || "Free",
    premiumUntil: user.vipExpiresAt || user.premiumUntil || "N/A",
    isActive: true,
    sourceTable: "users",
    readOnly: true,
  }));
}

function buildRealReadonlyPreview(data) {
  const users = Array.isArray(data.realReadonlyUsers)
    ? data.realReadonlyUsers
    : buildRealReadonlyUsers(Array.isArray(data.users) ? data.users : []);

  return {
    users,
    contracts: Array.isArray(data.realReadonlyContracts) ? data.realReadonlyContracts : [],
    gaps: Array.isArray(data.realReadonlyGaps) ? data.realReadonlyGaps : [],
    meta: {
      ...(data.realReadonlyMeta || {}),
      apiMode: "real-readonly-contract-preview",
      source: "local-contract-preview",
      readOnly: true,
      realDatabaseConnected: false,
      writeEnabled: false,
    },
  };
}

function buildStage7SchemaContract(data) {
  return {
    learning: Array.isArray(data.stage7LearningEventSchemas) ? data.stage7LearningEventSchemas : [],
    agent: Array.isArray(data.stage7AgentDataSchemas) ? data.stage7AgentDataSchemas : [],
    gates: Array.isArray(data.stage7AcceptanceGates) ? data.stage7AcceptanceGates : [],
    meta: {
      ...(data.stage7SchemaMeta || {}),
      apiMode: "stage7-schema-contract",
      readOnly: true,
      realDatabaseConnected: false,
      writeEnabled: false,
    },
  };
}

function buildStage8LocalApiHandoff(data) {
  return {
    ...(data.stage8LocalApiHandoff || {}),
    endpointChecks: [
      {
        path: "/api/admin-v2/local-preview",
        status: "json-ready",
        source: "public/admin-v2-local-data.json",
      },
      {
        path: "/api/admin-v2/real-users-readonly-preview",
        status: "json-ready",
        source: "local readonly contract",
      },
      {
        path: "/api/admin-v2/stage7-schema-contract",
        status: "json-ready",
        source: "local schema contract",
      },
    ],
    realDatabaseConnected: false,
    writeEnabled: false,
    productionDeployEnabled: false,
    readOnly: true,
  };
}

function buildStage9PrReadiness(data) {
  return {
    ...(data.stage9PrReadiness || {}),
    canCommit: false,
    canPush: false,
    canDeployProduction: false,
    canMergeMain: false,
    readOnly: true,
  };
}

function buildStage10FinalAcceptance(data) {
  return {
    ...(data.stage10FinalAcceptance || {}),
    canCommit: false,
    canPush: false,
    canCreatePr: false,
    canDeployProduction: false,
    requiresBossApproval: true,
    readOnly: true,
  };
}

function handleAdminV2Api(req, res, requested) {
  if (req.method !== "GET") {
    sendJson(res, 405, {
      ok: false,
      reason: "read-only-local-preview",
      writeEnabled: false,
    });
    return true;
  }

  const data = readLocalData();
  if (requested === "/api/admin-v2/local-preview") {
    sendJson(res, 200, {
      ...data,
      meta: {
        ...data.meta,
        apiMode: "local-preview",
        readOnly: true,
        databaseConnected: false,
        paymentWritesEnabled: false,
      },
    });
    return true;
  }

  if (requested === "/api/admin-v2/real-users-readonly-preview") {
    sendJson(res, 200, buildRealReadonlyPreview(data));
    return true;
  }

  if (requested === "/api/admin-v2/stage7-schema-contract") {
    sendJson(res, 200, buildStage7SchemaContract(data));
    return true;
  }

  if (requested === "/api/admin-v2/stage8-local-api-handoff") {
    sendJson(res, 200, buildStage8LocalApiHandoff(data));
    return true;
  }

  if (requested === "/api/admin-v2/stage9-pr-readiness") {
    sendJson(res, 200, buildStage9PrReadiness(data));
    return true;
  }

  if (requested === "/api/admin-v2/stage10-final-acceptance") {
    sendJson(res, 200, buildStage10FinalAcceptance(data));
    return true;
  }

  return false;
}

function resolveStaticFile(requested) {
  const hasExtension = Boolean(path.extname(requested));
  if (hasExtension) {
    const rootFile = path.resolve(root, `.${requested}`);
    if (fs.existsSync(rootFile)) return rootFile;
    return path.resolve(root, "public", `.${requested}`);
  }

  if (requested === "/") return path.resolve(root, "./index.html");

  if (requested.startsWith("/listening-app")) {
    const normalized = requested.endsWith("/") ? requested.slice(0, -1) : requested;
    const candidates = [
      path.resolve(root, `.${normalized}.html`),
      path.resolve(root, `.${normalized}/index.html`),
    ];
    const match = candidates.find((candidate) => fs.existsSync(candidate));
    if (match) return match;
  }

  return path.resolve(root, "./index.html");
}

http
  .createServer((req, res) => {
    const url = new URL(req.url || "/", `http://localhost:${port}`);
    const requested = decodeURIComponent(url.pathname === "/" ? "/index.html" : url.pathname);

    if (requested.startsWith("/api/admin-v2/") && handleAdminV2Api(req, res, requested)) {
      return;
    }

    const filePath = resolveStaticFile(requested);

    if (!filePath.startsWith(root)) {
      send(res, 403, "Forbidden");
      return;
    }

    const contentType = types[path.extname(filePath).toLowerCase()] || "application/octet-stream";
    const range = req.headers.range;
    if (range) {
      fs.stat(filePath, (statError, stats) => {
        if (statError) {
          send(res, 404, "Not found");
          return;
        }

        const match = range.match(/bytes=(\d*)-(\d*)/);
        if (!match) {
          send(res, 416, "Range Not Satisfiable");
          return;
        }

        const start = match[1] ? Number(match[1]) : 0;
        const end = match[2] ? Number(match[2]) : stats.size - 1;
        if (Number.isNaN(start) || Number.isNaN(end) || start > end || end >= stats.size) {
          send(res, 416, "Range Not Satisfiable", {
            "Content-Range": `bytes */${stats.size}`,
          });
          return;
        }

        res.writeHead(206, {
          "Content-Type": contentType,
          "Content-Length": end - start + 1,
          "Content-Range": `bytes ${start}-${end}/${stats.size}`,
          "Accept-Ranges": "bytes",
          "Cache-Control": "no-store",
        });
        fs.createReadStream(filePath, { start, end }).pipe(res);
      });
      return;
    }

    fs.readFile(filePath, (error, data) => {
      if (error) {
        send(res, 404, "Not found");
        return;
      }

      send(res, 200, data, {
        "Content-Type": contentType,
        "Accept-Ranges": "bytes",
        "Cache-Control": "no-store",
      });
    });
  })
  .listen(port, "127.0.0.1", () => {
    console.log(`Serving ${root} at http://localhost:${port}`);
  });
