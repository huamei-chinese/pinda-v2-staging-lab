const assert = require("node:assert/strict");
const test = require("node:test");

require("ts-node/register/transpile-only");

const { DatabaseService } = require("../src/database/database.service");

function makeTransientError(message = "read ECONNRESET") {
  const error = new Error(message);
  error.code = "ECONNRESET";
  return error;
}

test("database service retries transient SELECT connection resets", async () => {
  const db = new DatabaseService();
  let attempts = 0;
  db.pool = {
    async query() {
      attempts += 1;
      if (attempts === 1) throw makeTransientError();
      return { rows: [{ ok: true }], rowCount: 1 };
    },
  };

  const result = await db.query("SELECT 1 AS ok");

  assert.equal(attempts, 2);
  assert.deepEqual(result.rows, [{ ok: true }]);
});

test("database service retries readonly CTE connection resets", async () => {
  const db = new DatabaseService();
  let attempts = 0;
  db.pool = {
    async query() {
      attempts += 1;
      if (attempts === 1) throw makeTransientError("Connection terminated unexpectedly");
      return { rows: [{ score: 12 }], rowCount: 1 };
    },
  };

  const result = await db.query("WITH scores AS (SELECT 12 AS score) SELECT * FROM scores");

  assert.equal(attempts, 2);
  assert.deepEqual(result.rows, [{ score: 12 }]);
});

test("database service does not retry writes after transient resets", async () => {
  const db = new DatabaseService();
  let attempts = 0;
  db.pool = {
    async query() {
      attempts += 1;
      throw makeTransientError();
    },
  };

  await assert.rejects(() => db.query("INSERT INTO users(email) VALUES ($1)", ["a@example.com"]), /ECONNRESET/);
  assert.equal(attempts, 1);
});
