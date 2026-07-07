import { Pool } from "pg";

const connectionString = process.env.ADMIN_V2_REAL_READONLY_PGURL;

if (!connectionString) {
  console.error("ADMIN_V2_REAL_READONLY_PGURL is missing.");
  process.exit(1);
}

const targetTables = [
  "users",
  "payment_orders",
  "payment_plans",
  "learning_records",
  "learning_events",
  "agent_commissions",
  "sepay_webhook_events",
  "hsk_lesson_locks",
  "daily_theme_locks",
];

function quoteIdentifier(identifier) {
  if (!/^[a-z_][a-z0-9_]*$/i.test(identifier)) {
    throw new Error(`Unsafe identifier blocked: ${identifier}`);
  }
  return `"${identifier}"`;
}

const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
  max: 1,
  connectionTimeoutMillis: 5000,
  idleTimeoutMillis: 1000,
});

let client;

try {
  client = await pool.connect();
  await client.query("BEGIN READ ONLY");
  await client.query("SET LOCAL statement_timeout = '5000ms'");

  const columns = await client.query(
    `
      SELECT table_name, column_name, data_type
      FROM information_schema.columns
      WHERE table_schema = 'public'
        AND table_name = ANY($1::text[])
      ORDER BY table_name, ordinal_position
    `,
    [targetTables],
  );

  const tableNames = [...new Set(columns.rows.map((row) => row.table_name))];
  const counts = [];

  for (const tableName of tableNames) {
    const countResult = await client.query(`SELECT COUNT(*)::int AS total FROM ${quoteIdentifier(tableName)}`);
    counts.push({ table: tableName, total: countResult.rows[0].total });
  }

  const userSummary = tableNames.includes("users")
    ? await client.query(`
        SELECT
          COUNT(*)::int AS total,
          COUNT(*) FILTER (WHERE is_premium = true)::int AS vip,
          COUNT(*) FILTER (WHERE is_active = true)::int AS active
        FROM users
      `)
    : { rows: [] };

  const orderStatus = tableNames.includes("payment_orders")
    ? await client.query(`
        SELECT status, COUNT(*)::int AS total
        FROM payment_orders
        GROUP BY status
        ORDER BY status
      `)
    : { rows: [] };

  await client.query("COMMIT");

  const report = {
    connected: true,
    readOnly: true,
    writeEnabled: false,
    tables: tableNames,
    columns: tableNames.map((tableName) => ({
      table: tableName,
      columns: columns.rows
        .filter((row) => row.table_name === tableName)
        .map((row) => `${row.column_name}:${row.data_type}`),
    })),
    counts,
    userSummary: userSummary.rows[0] || null,
    orderStatus: orderStatus.rows,
    missingExpectedTables: targetTables.filter((tableName) => !tableNames.includes(tableName)),
  };

  console.log(JSON.stringify(report, null, 2));
} catch (error) {
  if (client) {
    try {
      await client.query("ROLLBACK");
    } catch {
      // Ignore rollback errors; this script never writes.
    }
  }
  console.error(
    JSON.stringify(
      {
        connected: false,
        readOnly: true,
        writeEnabled: false,
        error: error instanceof Error ? error.message.slice(0, 180) : "unknown readonly audit error",
      },
      null,
      2,
    ),
  );
  process.exit(1);
} finally {
  client?.release();
  await pool.end().catch(() => undefined);
}
