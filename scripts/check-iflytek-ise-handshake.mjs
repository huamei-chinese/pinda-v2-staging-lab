import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import tls from "node:tls";

const envPath = path.resolve(".env");
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, "utf8").split(/\r?\n/)) {
    const match = line.match(/^([^#=]+)=(.*)$/);
    if (match && process.env[match[1]] === undefined) {
      process.env[match[1]] = match[2].trim();
    }
  }
}

const host = process.env.IFLYTEK_ISE_HOST || "ise-api-sg.xf-yun.com";
const pathname = process.env.IFLYTEK_ISE_PATH || "/v2/ise";
const date = new Date().toUTCString();
const signatureOrigin = `host: ${host}\ndate: ${date}\nGET ${pathname} HTTP/1.1`;
const signature = crypto
  .createHmac("sha256", process.env.IFLYTEK_API_SECRET || "")
  .update(signatureOrigin)
  .digest("base64");
const authorizationOrigin = `api_key="${process.env.IFLYTEK_API_KEY || ""}", algorithm="hmac-sha256", headers="host date request-line", signature="${signature}"`;
const authorization = Buffer.from(authorizationOrigin).toString("base64");
const query = `authorization=${encodeURIComponent(authorization)}&date=${encodeURIComponent(date)}&host=${encodeURIComponent(host)}`;
const key = crypto.randomBytes(16).toString("base64");

const socket = tls.connect({ host, port: 443, servername: host, timeout: 10000 }, () => {
  socket.write([
    `GET ${pathname}?${query} HTTP/1.1`,
    `Host: ${host}`,
    "Connection: Upgrade",
    "Upgrade: websocket",
    "Sec-WebSocket-Version: 13",
    `Sec-WebSocket-Key: ${key}`,
    "\r\n",
  ].join("\r\n"));
});

let response = "";
socket.on("data", (chunk) => {
  response += chunk.toString("utf8");
  if (response.includes("\r\n\r\n")) {
    const [head, body = ""] = response.split("\r\n\r\n");
    const lines = head.split("\r\n");
    console.log(JSON.stringify({
      target: `wss://${host}${pathname}`,
      status: lines[0] || "",
      headers: lines.slice(1).filter((line) => /^(date|server|connection|upgrade|sec-websocket-accept|content-type|content-length):/i.test(line)),
      body: body.slice(0, 300),
    }));
    socket.end();
  }
});
socket.on("timeout", () => {
  console.log(JSON.stringify({ target: `wss://${host}${pathname}`, status: "timeout" }));
  socket.destroy();
  process.exitCode = 1;
});
socket.on("error", (error) => {
  console.log(JSON.stringify({ target: `wss://${host}${pathname}`, status: "error", detail: error.message }));
  process.exitCode = 1;
});
