import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { Pool, QueryResult } from 'pg';

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  private pool: Pool | null = null;

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
      throw new Error('DATABASE_URL chưa được cấu hình. Hãy đặt Neon PostgreSQL connection string rồi chạy lại server.');
    }
    return this.pool.query<T>(text, params);
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
        role TEXT NOT NULL DEFAULT 'student',
        is_active BOOLEAN NOT NULL DEFAULT TRUE,
        current_level TEXT NOT NULL DEFAULT 'HSK2',
        avatar_url TEXT,
        is_premium BOOLEAN NOT NULL DEFAULT FALSE,
        premium_until TIMESTAMPTZ,
        daily_reminder_enabled BOOLEAN NOT NULL DEFAULT TRUE,
        daily_reminder_last_sent_on DATE,
        email_verified_at TIMESTAMPTZ,
        email_verification_code_hash TEXT,
        email_verification_expires_at TIMESTAMPTZ,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        last_login_at TIMESTAMPTZ
      );
    `);
    await this.pool.query(`
      ALTER TABLE users ADD COLUMN IF NOT EXISTS current_level TEXT NOT NULL DEFAULT 'HSK2';
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
      INSERT INTO payment_plans (id, months, amount, name_vi, name_zh, is_active, sort_order)
      VALUES
        ('1m', 1, 149000, '1 Tháng', '1 个月', TRUE, 1),
        ('3m', 3, 399000, '3 Tháng', '3 个月', TRUE, 2),
        ('6m', 6, 699000, '6 Tháng', '6 个月', TRUE, 3)
      ON CONFLICT (id) DO NOTHING;
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
      CREATE TABLE IF NOT EXISTS hsk_level_covers (
        level TEXT PRIMARY KEY,
        cover_url TEXT NOT NULL DEFAULT '',
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);
  }
}
