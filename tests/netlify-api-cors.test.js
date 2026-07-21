const test = require("node:test");
const assert = require("node:assert/strict");
const path = require("node:path");
const { pathToFileURL } = require("node:url");

const apiModuleUrl = pathToFileURL(
  path.join(__dirname, "..", "netlify", "functions", "api.mjs"),
).href;

test("Netlify API accepts localhost:4173 CORS preflight", async () => {
  const { default: handler } = await import(apiModuleUrl);
  const response = await handler(new Request(
    "https://servermail222.netlify.app/api/password-reset/request",
    {
      method: "OPTIONS",
      headers: {
        Origin: "http://localhost:4173",
        "Access-Control-Request-Method": "POST",
        "Access-Control-Request-Headers": "content-type",
      },
    },
  ));

  assert.equal(response.status, 204);
  assert.equal(response.headers.get("access-control-allow-origin"), "http://localhost:4173");
  assert.match(response.headers.get("access-control-allow-methods"), /POST/);
  assert.match(response.headers.get("access-control-allow-headers"), /Content-Type/i);
});

test("Netlify API adds CORS headers to error responses", async () => {
  const { default: handler } = await import(apiModuleUrl);
  const response = await handler(new Request(
    "https://servermail222.netlify.app/api/route-that-does-not-exist",
    { headers: { Origin: "http://localhost:4173" } },
  ));

  assert.equal(response.status, 404);
  assert.equal(response.headers.get("access-control-allow-origin"), "http://localhost:4173");
  assert.equal(response.headers.get("vary"), "Origin");
});

test("Netlify API does not reflect an untrusted origin", async () => {
  const { default: handler } = await import(apiModuleUrl);
  const response = await handler(new Request(
    "https://servermail222.netlify.app/api/password-reset/request",
    {
      method: "OPTIONS",
      headers: { Origin: "https://malicious.example" },
    },
  ));

  assert.equal(response.status, 204);
  assert.equal(response.headers.get("access-control-allow-origin"), null);
});
