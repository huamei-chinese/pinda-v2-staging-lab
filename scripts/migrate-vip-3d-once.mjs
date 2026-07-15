import fs from "node:fs";
import path from "node:path";
import pg from "pg";

const { Pool } = pg;

function loadEnv() {
  const envPath = path.resolve(process.cwd(), ".env");
  if (!fs.existsSync(envPath)) return {};
  const env = {};
  for (const line of fs.readFileSync(envPath, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const equalsIndex = trimmed.indexOf("=");
    if (equalsIndex === -1) continue;
    const key = trimmed.slice(0, equalsIndex).trim();
    let value = trimmed.slice(equalsIndex + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    env[key] = value;
  }
  return env;
}

const localEnv = loadEnv();
const connectionString = process.env.DATABASE_URL || localEnv.DATABASE_URL;

if (!connectionString) {
  console.error("DATABASE_URL missing.");
  process.exit(1);
}

const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
});

const statements = [
  `ALTER TABLE users ADD COLUMN IF NOT EXISTS vip_trial_used BOOLEAN NOT NULL DEFAULT FALSE;`,
  `INSERT INTO payment_plans (id, months, duration_unit, amount, name_vi, name_zh, is_active, sort_order)
   VALUES
     ('3d', 3, 'days', 29000, 'Gói VIP 3 ngày', '3天 VIP', TRUE, 1),
     ('30d', 30, 'days', 129000, 'Gói VIP 1 tháng', '1个月 VIP', TRUE, 2),
     ('90d', 90, 'days', 329000, 'Gói VIP 3 tháng', '3个月 VIP', TRUE, 3)
   ON CONFLICT (id) DO UPDATE SET
     months = EXCLUDED.months,
     duration_unit = EXCLUDED.duration_unit,
     amount = EXCLUDED.amount,
     name_vi = EXCLUDED.name_vi,
     name_zh = EXCLUDED.name_zh,
     is_active = EXCLUDED.is_active,
     sort_order = EXCLUDED.sort_order,
     updated_at = NOW();`,
  `UPDATE payment_plans
   SET is_active = FALSE,
       updated_at = NOW()
   WHERE id = '7d';`,
  `UPDATE users
   SET vip_trial_used = TRUE,
       vip_plan_id = CASE WHEN lower(coalesce(vip_plan_id, '')) = '7d' THEN '3d' ELSE vip_plan_id END,
       updated_at = NOW()
   WHERE EXISTS (
     SELECT 1
     FROM payment_orders
     WHERE payment_orders.user_id = users.id
       AND payment_orders.status = 'paid'
       AND lower(payment_orders.plan_id) IN ('3d', '7d')
   );`,
  `WITH first_trial AS (
     SELECT DISTINCT ON (user_id)
            user_id,
            paid_at
     FROM payment_orders
     WHERE status = 'paid'
       AND paid_at IS NOT NULL
       AND lower(plan_id) IN ('3d', '7d')
     ORDER BY user_id, paid_at ASC
   )
   UPDATE users
   SET premium_until = first_trial.paid_at + interval '3 days',
       updated_at = NOW()
   FROM first_trial
   WHERE users.id = first_trial.user_id
     AND lower(coalesce(users.vip_plan_id, '')) IN ('3d', '7d')
     AND users.premium_until IS NOT NULL
     AND users.premium_until > first_trial.paid_at + interval '3 days';`,
  `UPDATE users
   SET vip_plan_id = '3d',
       updated_at = NOW()
   WHERE lower(coalesce(vip_plan_id, '')) = '7d';`,
  `UPDATE payment_orders
   SET plan_id = '3d'
   WHERE lower(plan_id) = '7d';`,
];

try {
  for (const sql of statements) {
    await pool.query(sql);
  }
  const plans = await pool.query(
    `SELECT id, months, duration_unit, amount, is_active
     FROM payment_plans
     WHERE id IN ('3d', '7d', '30d', '90d')
     ORDER BY id`,
  );
  const used = await pool.query(
    `SELECT COUNT(*)::int AS count
     FROM users
     WHERE vip_trial_used = TRUE`,
  );
  console.log(JSON.stringify({
    plans: plans.rows,
    vipTrialUsedUsers: used.rows[0]?.count || 0,
  }, null, 2));
} finally {
  await pool.end();
}
