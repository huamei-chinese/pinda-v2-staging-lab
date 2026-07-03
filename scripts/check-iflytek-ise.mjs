import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const envPath = path.resolve(".env");
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, "utf8").split(/\r?\n/)) {
    const match = line.match(/^([^#=]+)=(.*)$/);
    if (match && process.env[match[1]] === undefined) {
      process.env[match[1]] = match[2].trim();
    }
  }
}

const protocol = (process.env.IFLYTEK_ISE_PROTOCOL || "wss").replace(/:$/, "");
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
const url = `${protocol}://${host}${pathname}?authorization=${encodeURIComponent(authorization)}&date=${encodeURIComponent(date)}&host=${encodeURIComponent(host)}`;

const socket = new WebSocket(url);
let settled = false;

function finish(status, detail = "") {
  if (settled) return;
  settled = true;
  console.log(JSON.stringify({ status, target: `${protocol}://${host}${pathname}`, detail }));
  try {
    socket.close();
  } catch {}
  setTimeout(() => process.exit(status === "open" ? 0 : 1), 100);
}

setTimeout(() => finish("timeout"), 10000);
socket.addEventListener("open", () => finish("open"));
socket.addEventListener("error", (event) => finish("error", event?.message || event?.error?.message || ""));
socket.addEventListener("close", (event) => finish("close", `${event?.code || ""} ${event?.reason || ""}`.trim()));
