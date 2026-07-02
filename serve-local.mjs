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

http
  .createServer((req, res) => {
    const url = new URL(req.url || "/", `http://localhost:${port}`);
    const requested = decodeURIComponent(url.pathname === "/" ? "/index.html" : url.pathname);
    const hasExtension = Boolean(path.extname(requested));
    const filePath = path.resolve(root, hasExtension ? `.${requested}` : "./index.html");

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
