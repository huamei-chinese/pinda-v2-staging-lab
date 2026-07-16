import { HttpException, HttpStatus, Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { Pool, QueryResult } from 'pg';

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  private pool: Pool | null = null;
  private readonly seededStaffEmails = ['kamini01@gmail.com', 'theanh.tuyendung3332@gmail.com'];

  async onModuleInit() {
    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
      console.warn('DATABASE_URL is missing. API database routes will return 503.');
      return;
    }

    this.pool = new Pool({
      connectionString: databaseUrl,
      ssl: { rejectUnauthorized: false },
    });

    try {
      await this.ensureUserCompatibilityColumns();
    } catch (error) {
      console.error('Cannot initialize user compatibility columns:', error);
    }

    if (process.env.NODE_ENV === 'production' && process.env.ENABLE_DB_SCHEMA_INIT !== 'true') {
      console.warn('Database schema initialization skipped in production.');
      return;
    }

    try {
      await this.ensureSchema();
      console.log('Database schema initialization successful.');
    } catch (error) {
      console.error('Cannot initialize database schema:', error);
    }
  }

  async onModuleDestroy() {
    if (this.pool) {
      await this.pool.end();
    }
  }

  getPool(): Pool | null {
    return this.pool;
  }

  async query<T extends any = any>(text: string, params?: any[]): Promise<QueryResult<T>> {
    if (!this.pool) {
      throw new HttpException(
        { error: 'DATABASE_URL chưa được cấu hình. Hãy đặt Neon PostgreSQL connection string rồi chạy lại server.' },
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
    return this.pool.query<T>(text, params);
  }

  private async ensureUserCompatibilityColumns() {
    if (!this.pool) return;
    await this.pool.query('CREATE EXTENSION IF NOT EXISTS pgcrypto;');
    await this.pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        full_name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password_hash TEXT NOT NULL,
        role TEXT NOT NULL DEFAULT 'user',
        is_active BOOLEAN NOT NULL DEFAULT TRUE,
        current_level TEXT NOT NULL DEFAULT 'HSK2',
        avatar_url TEXT,
        is_premium BOOLEAN NOT NULL DEFAULT FALSE,
        premium_until TIMESTAMPTZ,
        vip_plan_id TEXT,
        vip_trial_used BOOLEAN NOT NULL DEFAULT FALSE,
        daily_reminder_enabled BOOLEAN NOT NULL DEFAULT TRUE,
        daily_reminder_last_sent_on DATE,
        email_verified_at TIMESTAMPTZ,
        email_verification_code_hash TEXT,
        email_verification_expires_at TIMESTAMPTZ,
        ref TEXT,
        src TEXT,
        vip INTEGER NOT NULL DEFAULT 0,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        last_login_at TIMESTAMPTZ
      );
    `);
    await this.pool.query(`
      ALTER TABLE IF EXISTS users ADD COLUMN IF NOT EXISTS current_level TEXT NOT NULL DEFAULT 'HSK2';
    `);
    await this.pool.query(`
      ALTER TABLE IF EXISTS users ADD COLUMN IF NOT EXISTS avatar_url TEXT;
    `);
    await this.pool.query(`
      ALTER TABLE IF EXISTS users ADD COLUMN IF NOT EXISTS is_premium BOOLEAN NOT NULL DEFAULT FALSE;
    `);
    await this.pool.query(`
      ALTER TABLE IF EXISTS users ADD COLUMN IF NOT EXISTS premium_until TIMESTAMPTZ;
    `);
    await this.pool.query(`
      ALTER TABLE IF EXISTS users ADD COLUMN IF NOT EXISTS vip_plan_id TEXT;
    `);
    await this.pool.query(`
      ALTER TABLE IF EXISTS users ADD COLUMN IF NOT EXISTS vip_trial_used BOOLEAN NOT NULL DEFAULT FALSE;
    `);
    await this.pool.query(`
      ALTER TABLE IF EXISTS users ADD COLUMN IF NOT EXISTS daily_reminder_enabled BOOLEAN NOT NULL DEFAULT TRUE;
    `);
    await this.pool.query(`
      ALTER TABLE IF EXISTS users ADD COLUMN IF NOT EXISTS daily_reminder_last_sent_on DATE;
    `);
    await this.pool.query(`
      ALTER TABLE IF EXISTS users ADD COLUMN IF NOT EXISTS email_verified_at TIMESTAMPTZ;
    `);
    await this.pool.query(`
      ALTER TABLE IF EXISTS users ADD COLUMN IF NOT EXISTS email_verification_code_hash TEXT;
    `);
    await this.pool.query(`
      ALTER TABLE IF EXISTS users ADD COLUMN IF NOT EXISTS email_verification_expires_at TIMESTAMPTZ;
    `);
    await this.pool.query(`
      ALTER TABLE IF EXISTS users ADD COLUMN IF NOT EXISTS ref TEXT;
    `);
    await this.pool.query(`
      ALTER TABLE IF EXISTS users ADD COLUMN IF NOT EXISTS src TEXT;
    `);
    await this.pool.query(`
      ALTER TABLE IF EXISTS users ADD COLUMN IF NOT EXISTS vip INTEGER NOT NULL DEFAULT 0;
    `);
    await this.pool.query(`
      CREATE TABLE IF NOT EXISTS coin_transactions (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        source TEXT NOT NULL,
        period_key TEXT NOT NULL,
        amount INTEGER NOT NULL CHECK (amount > 0),
        metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);
    await this.pool.query(`
      CREATE UNIQUE INDEX IF NOT EXISTS idx_coin_transactions_unique_claim
      ON coin_transactions(user_id, source, period_key);
    `);
    await this.pool.query(`
      CREATE INDEX IF NOT EXISTS idx_coin_transactions_user_created
      ON coin_transactions(user_id, created_at DESC);
    `);
    await this.pool.query(`
      CREATE INDEX IF NOT EXISTS idx_coin_transactions_created
      ON coin_transactions(created_at DESC);
    `);
    await this.seedStaffAccounts();
  }

  private async ensureSchema() {
    if (!this.pool) return;
    await this.pool.query('CREATE EXTENSION IF NOT EXISTS pgcrypto;');
    await this.pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        full_name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password_hash TEXT NOT NULL,
        role TEXT NOT NULL DEFAULT 'user',
        is_active BOOLEAN NOT NULL DEFAULT TRUE,
        current_level TEXT NOT NULL DEFAULT 'HSK2',
        avatar_url TEXT,
        is_premium BOOLEAN NOT NULL DEFAULT FALSE,
        premium_until TIMESTAMPTZ,
        vip_plan_id TEXT,
        vip_trial_used BOOLEAN NOT NULL DEFAULT FALSE,
        daily_reminder_enabled BOOLEAN NOT NULL DEFAULT TRUE,
        daily_reminder_last_sent_on DATE,
        email_verified_at TIMESTAMPTZ,
        email_verification_code_hash TEXT,
        email_verification_expires_at TIMESTAMPTZ,
        ref TEXT,
        src TEXT,
        vip INTEGER NOT NULL DEFAULT 0,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        last_login_at TIMESTAMPTZ
      );
    `);
    await this.pool.query(`
      ALTER TABLE users ADD COLUMN IF NOT EXISTS current_level TEXT NOT NULL DEFAULT 'HSK2';
    `);
    await this.pool.query(`
      ALTER TABLE users ALTER COLUMN role SET DEFAULT 'user';
    `);
    await this.pool.query(`
      ALTER TABLE users ADD COLUMN IF NOT EXISTS avatar_url TEXT;
    `);
    await this.pool.query(`
      ALTER TABLE users ADD COLUMN IF NOT EXISTS is_premium BOOLEAN NOT NULL DEFAULT FALSE;
    `);
    await this.pool.query(`
      ALTER TABLE users ADD COLUMN IF NOT EXISTS premium_until TIMESTAMPTZ;
    `);
    await this.pool.query(`
      ALTER TABLE users ADD COLUMN IF NOT EXISTS vip_plan_id TEXT;
    `);
    await this.pool.query(`
      ALTER TABLE users ADD COLUMN IF NOT EXISTS vip_trial_used BOOLEAN NOT NULL DEFAULT FALSE;
    `);
    await this.pool.query(`
      ALTER TABLE users ADD COLUMN IF NOT EXISTS daily_reminder_enabled BOOLEAN NOT NULL DEFAULT TRUE;
    `);
    await this.pool.query(`
      ALTER TABLE users ADD COLUMN IF NOT EXISTS daily_reminder_last_sent_on DATE;
    `);
    await this.pool.query(`
      ALTER TABLE users ADD COLUMN IF NOT EXISTS email_verified_at TIMESTAMPTZ;
    `);
    await this.pool.query(`
      ALTER TABLE users ADD COLUMN IF NOT EXISTS email_verification_code_hash TEXT;
    `);
    await this.pool.query(`
      ALTER TABLE users ADD COLUMN IF NOT EXISTS email_verification_expires_at TIMESTAMPTZ;
    `);
    await this.pool.query(`
      ALTER TABLE users ADD COLUMN IF NOT EXISTS ref TEXT;
    `);
    await this.pool.query(`
      ALTER TABLE users ADD COLUMN IF NOT EXISTS src TEXT;
    `);
    await this.pool.query(`
      ALTER TABLE users ADD COLUMN IF NOT EXISTS vip INTEGER NOT NULL DEFAULT 0;
    `);
    await this.seedStaffAccounts();
    await this.pool.query(`
      CREATE TABLE IF NOT EXISTS payment_orders (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        plan_id TEXT NOT NULL,
        amount INTEGER NOT NULL,
        transfer_code TEXT NOT NULL UNIQUE,
        status TEXT NOT NULL DEFAULT 'pending',
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        paid_at TIMESTAMPTZ,
        expires_at TIMESTAMPTZ NOT NULL
      );
    `);
    await this.pool.query(`
      CREATE INDEX IF NOT EXISTS idx_payment_orders_user_id ON payment_orders(user_id);
    `);
    await this.pool.query(`
      CREATE INDEX IF NOT EXISTS idx_payment_orders_transfer_code ON payment_orders(transfer_code);
    `);
    await this.pool.query(`
      CREATE INDEX IF NOT EXISTS idx_payment_orders_status ON payment_orders(status);
    `);
    await this.pool.query(`
      CREATE TABLE IF NOT EXISTS sepay_webhook_events (
        sepay_id BIGINT PRIMARY KEY,
        order_id UUID REFERENCES payment_orders(id) ON DELETE SET NULL,
        payload JSONB NOT NULL,
        processed BOOLEAN NOT NULL DEFAULT FALSE,
        received_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);
    await this.pool.query(`
      CREATE TABLE IF NOT EXISTS payment_plans (
        id TEXT PRIMARY KEY,
        months INTEGER NOT NULL,
        duration_unit TEXT NOT NULL DEFAULT 'months',
        amount INTEGER NOT NULL,
        name_vi TEXT NOT NULL,
        name_zh TEXT NOT NULL,
        is_active BOOLEAN NOT NULL DEFAULT TRUE,
        sort_order INTEGER NOT NULL DEFAULT 0,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);
    await this.pool.query(`
      ALTER TABLE payment_plans
      ADD COLUMN IF NOT EXISTS duration_unit TEXT NOT NULL DEFAULT 'months';
    `);
    await this.pool.query(`
      INSERT INTO payment_plans (id, months, duration_unit, amount, name_vi, name_zh, is_active, sort_order)
      VALUES
        ('3d', 3, 'days', 29000, 'Gói VIP 3 ngày', '3天 VIP', TRUE, 1),
        ('30d', 30, 'days', 129000, 'Gói VIP 1 tháng', '1个月 VIP', TRUE, 2),
        ('90d', 90, 'days', 329000, 'Gói VIP 3 tháng', '3个月 VIP', TRUE, 3),
        ('1m', 1, 'months', 149000, '1 Tháng', '1 个月', TRUE, 4),
        ('3m', 3, 'months', 399000, '3 Tháng', '3 个月', TRUE, 5),
        ('6m', 6, 'months', 699000, '6 Tháng', '6 个月', TRUE, 6)
      ON CONFLICT (id) DO UPDATE SET
        months = EXCLUDED.months,
        duration_unit = EXCLUDED.duration_unit,
        amount = EXCLUDED.amount,
        name_vi = EXCLUDED.name_vi,
        name_zh = EXCLUDED.name_zh,
        is_active = EXCLUDED.is_active,
        sort_order = EXCLUDED.sort_order,
        updated_at = NOW();
    `);
    await this.pool.query(`
      UPDATE payment_plans
      SET is_active = FALSE,
          updated_at = NOW()
      WHERE id = '7d';
    `);
    await this.pool.query(`
      UPDATE users
      SET vip_trial_used = TRUE,
          vip_plan_id = CASE WHEN lower(coalesce(vip_plan_id, '')) = '7d' THEN '3d' ELSE vip_plan_id END,
          updated_at = NOW()
      WHERE EXISTS (
        SELECT 1
        FROM payment_orders
        WHERE payment_orders.user_id = users.id
          AND payment_orders.status = 'paid'
          AND lower(payment_orders.plan_id) IN ('3d', '7d')
      );
    `);
    await this.pool.query(`
      WITH first_trial AS (
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
        AND users.premium_until > first_trial.paid_at + interval '3 days';
    `);
    await this.pool.query(`
      UPDATE users
      SET vip_plan_id = '3d',
          updated_at = NOW()
      WHERE lower(coalesce(vip_plan_id, '')) = '7d';
    `);
    await this.pool.query(`
      UPDATE payment_orders
      SET plan_id = '3d'
      WHERE lower(plan_id) = '7d';
    `);
    await this.pool.query(`
      CREATE TABLE IF NOT EXISTS hsk_lesson_locks (
        lesson_id TEXT PRIMARY KEY,
        level TEXT NOT NULL,
        lesson_no INTEGER NOT NULL DEFAULT 0,
        title_vi TEXT NOT NULL DEFAULT '',
        free_item_limit INTEGER NOT NULL DEFAULT 0,
        locked_for_free BOOLEAN NOT NULL DEFAULT FALSE,
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);
    await this.pool.query(`
      ALTER TABLE hsk_lesson_locks
      ADD COLUMN IF NOT EXISTS free_item_limit INTEGER NOT NULL DEFAULT 0;
    `);
    await this.pool.query(`
      ALTER TABLE hsk_lesson_locks
      ADD COLUMN IF NOT EXISTS free_word_limit INTEGER NOT NULL DEFAULT 0;
    `);
    await this.pool.query(`
      ALTER TABLE hsk_lesson_locks
      ADD COLUMN IF NOT EXISTS free_sentence_limit INTEGER NOT NULL DEFAULT 0;
    `);
    await this.pool.query(`
      CREATE TABLE IF NOT EXISTS daily_theme_locks (
        theme_id TEXT PRIMARY KEY,
        title_vi TEXT NOT NULL DEFAULT '',
        sort_order INTEGER NOT NULL DEFAULT 0,
        free_item_limit INTEGER NOT NULL DEFAULT 0,
        locked_for_free BOOLEAN NOT NULL DEFAULT FALSE,
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);
    await this.pool.query(`
      ALTER TABLE daily_theme_locks
      ADD COLUMN IF NOT EXISTS free_item_limit INTEGER NOT NULL DEFAULT 0;
    `);
    await this.pool.query(`
      ALTER TABLE daily_theme_locks
      ADD COLUMN IF NOT EXISTS free_word_limit INTEGER NOT NULL DEFAULT 0;
    `);
    await this.pool.query(`
      ALTER TABLE daily_theme_locks
      ADD COLUMN IF NOT EXISTS free_sentence_limit INTEGER NOT NULL DEFAULT 0;
    `);
    await this.pool.query(`
      CREATE TABLE IF NOT EXISTS hsk_level_covers (
        level TEXT PRIMARY KEY,
        cover_url TEXT NOT NULL DEFAULT '',
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);
    await this.pool.query(`
      CREATE TABLE IF NOT EXISTS listening_topic_locks (
        topic_id TEXT PRIMARY KEY,
        title_vi TEXT NOT NULL DEFAULT '',
        sort_order INTEGER NOT NULL DEFAULT 0,
        locked_for_free BOOLEAN NOT NULL DEFAULT FALSE,
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);
    await this.pool.query(`
      CREATE TABLE IF NOT EXISTS listening_lesson_locks (
        lesson_id TEXT PRIMARY KEY,
        topic_id TEXT NOT NULL DEFAULT '',
        title_vi TEXT NOT NULL DEFAULT '',
        sort_order INTEGER NOT NULL DEFAULT 0,
        locked_for_free BOOLEAN NOT NULL DEFAULT FALSE,
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);
    await this.pool.query(`
      CREATE TABLE IF NOT EXISTS learning_events (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID REFERENCES users(id) ON DELETE SET NULL,
        event_type TEXT NOT NULL,
        module TEXT,
        level TEXT,
        lesson_id TEXT,
        topic_id TEXT,
        question_id TEXT,
        is_correct BOOLEAN,
        source TEXT,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);
    await this.pool.query(`
      CREATE INDEX IF NOT EXISTS idx_learning_events_created_at ON learning_events(created_at);
    `);
    await this.pool.query(`
      CREATE INDEX IF NOT EXISTS idx_learning_events_type_created ON learning_events(event_type, created_at);
    `);
    await this.pool.query(`
      CREATE INDEX IF NOT EXISTS idx_learning_events_lesson ON learning_events(lesson_id);
    `);
    await this.pool.query(`
      CREATE INDEX IF NOT EXISTS idx_learning_events_source ON learning_events(source);
    `);
    await this.pool.query(`
      CREATE INDEX IF NOT EXISTS idx_learning_events_user ON learning_events(user_id);
    `);
    await this.pool.query(`
      CREATE TABLE IF NOT EXISTS coin_transactions (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        source TEXT NOT NULL,
        period_key TEXT NOT NULL,
        amount INTEGER NOT NULL CHECK (amount > 0),
        metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);
    await this.pool.query(`
      CREATE UNIQUE INDEX IF NOT EXISTS idx_coin_transactions_unique_claim
      ON coin_transactions(user_id, source, period_key);
    `);
    await this.pool.query(`
      CREATE INDEX IF NOT EXISTS idx_coin_transactions_user_created
      ON coin_transactions(user_id, created_at DESC);
    `);
    await this.pool.query(`
      CREATE INDEX IF NOT EXISTS idx_coin_transactions_created
      ON coin_transactions(created_at DESC);
    `);
  }

  private async seedStaffAccounts() {
    if (!this.pool) return;
    await this.pool.query(
      `UPDATE users
       SET role = 'staff',
           updated_at = NOW()
       WHERE lower(email) = ANY($1::text[])
         AND role <> 'admin'
         AND role <> 'staff'`,
      [this.seededStaffEmails],
    );
  }
}
