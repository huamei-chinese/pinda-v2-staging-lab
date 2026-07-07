import { Injectable } from '@nestjs/common';
import { Pool, PoolClient } from 'pg';

type ColumnMap = Record<string, Set<string>>;

const readonlyTables = [
  'users',
  'payment_orders',
  'payment_plans',
  'hsk_lesson_locks',
  'daily_theme_locks',
  'sepay_webhook_events',
  'learning_records',
  'learning_events',
  'agent_commissions',
];

const readonlyColumnContracts: Record<string, string[]> = {
  users: [
    'id',
    'full_name',
    'email',
    'role',
    'is_active',
    'current_level',
    'is_premium',
    'premium_until',
    'vip_plan_id',
    'created_at',
    'last_login_at',
  ],
  payment_orders: ['id', 'user_id', 'plan_id', 'amount', 'status', 'created_at', 'paid_at', 'expires_at'],
  payment_plans: ['id', 'amount', 'name_vi', 'name_zh', 'is_active', 'duration_unit', 'months', 'sort_order'],
  hsk_lesson_locks: ['lesson_id', 'level', 'lesson_no', 'title_vi', 'free_item_limit', 'locked_for_free', 'updated_at'],
  daily_theme_locks: ['theme_id', 'title_vi', 'sort_order', 'free_item_limit', 'locked_for_free', 'updated_at'],
  sepay_webhook_events: ['sepay_id', 'order_id', 'processed', 'received_at'],
  learning_records: ['id', 'user_id', 'module', 'lesson', 'questions_answered', 'wrong_answers', 'last_studied_at'],
  learning_events: ['id', 'user_id', 'event_name', 'module', 'lesson', 'created_at'],
  agent_commissions: ['id', 'agent_id', 'user_id', 'order_id', 'amount', 'status', 'created_at'],
};

const blockedColumnContracts: Record<string, string[]> = {
  users: ['password_hash', 'email_verification_code_hash', 'email_verification_expires_at'],
  payment_orders: ['transfer_code'],
  sepay_webhook_events: ['payload'],
};

const v1MissingSourceNotes: Record<string, { currentStatus: string; nextAction: string }> = {
  learning_records: {
    currentStatus: 'V1 后台没有学习数据后台；这不是连接失败。',
    nextAction: '后续如果要做真实学习数据，需要作为 V2 新增能力单独设计采集表和权限边界。',
  },
  learning_events: {
    currentStatus: 'V1 后台没有学习事件后台；这不是连接失败。',
    nextAction: '后续如果要做学习事件流，需要先定义事件采集契约，不能把 mock 当真实数据。',
  },
  agent_commissions: {
    currentStatus: 'V1 后台没有代理/直播后台和佣金结算后台；这不是连接失败。',
    nextAction: '后续如果要做代理/直播/佣金，需要作为 V2 新增业务闭环单独建表、审计和权限。',
  },
  agent_referrals: {
    currentStatus: 'V1 后台没有代理/直播后台和代理归因后台；这不是连接失败。',
    nextAction: '后续如果要做代理归因，需要作为 V2 新增业务闭环单独设计绑定、审计和权限。',
  },
};

@Injectable()
export class AdminV2RealReadonlyService {
  async getPreview(localData: any) {
    const fallback = this.buildFallbackPreview(localData);

    if (process.env.ADMIN_V2_REAL_READONLY_ENABLED !== 'true') {
      return this.withMeta(fallback, {
        source: 'local-contract-preview',
        realReadonlyEnabled: false,
        realDatabaseConnected: false,
        disabledReason: 'ADMIN_V2_REAL_READONLY_ENABLED is not true',
      });
    }

    const connectionString = process.env.ADMIN_V2_REAL_READONLY_PGURL;
    if (!connectionString) {
      return this.withMeta(fallback, {
        source: 'missing-readonly-connection',
        realReadonlyEnabled: true,
        realDatabaseConnected: false,
        disabledReason: 'ADMIN_V2_REAL_READONLY_PGURL is missing',
      });
    }

    const pool = new Pool({
      connectionString,
      ssl: { rejectUnauthorized: false },
      max: 1,
      connectionTimeoutMillis: 3000,
      idleTimeoutMillis: 1000,
    });

    let client: PoolClient | null = null;
    try {
      client = await pool.connect();
      await client.query('BEGIN READ ONLY');
      await client.query("SET LOCAL statement_timeout = '3000ms'");

      const columns = await this.loadColumns(client);
      const users = await this.loadUsers(client, columns);
      const contracts = this.buildContracts(columns);
      const gaps = this.buildGaps(columns, localData);

      await client.query('COMMIT');

      return this.withMeta(
        {
          users: users.length ? users : fallback.users,
          contracts,
          gaps,
        },
        {
          source: 'real-readonly-database',
          realReadonlyEnabled: true,
          realDatabaseConnected: true,
          connectedTables: Object.keys(columns),
        },
      );
    } catch (error) {
      if (client) {
        try {
          await client.query('ROLLBACK');
        } catch {
          // Best effort rollback only; the endpoint still returns a safe fallback.
        }
      }

      return this.withMeta(fallback, {
        source: 'real-readonly-error-fallback',
        realReadonlyEnabled: true,
        realDatabaseConnected: false,
        error: this.sanitizeError(error),
      });
    } finally {
      client?.release();
      await pool.end().catch(() => undefined);
    }
  }

  private async loadColumns(client: PoolClient): Promise<ColumnMap> {
    const result = await client.query<{ table_name: string; column_name: string }>(
      `
        SELECT table_name, column_name
        FROM information_schema.columns
        WHERE table_schema = 'public'
          AND table_name = ANY($1::text[])
        ORDER BY table_name, ordinal_position
      `,
      [readonlyTables],
    );

    return result.rows.reduce<ColumnMap>((map, row) => {
      map[row.table_name] ||= new Set<string>();
      map[row.table_name].add(row.column_name);
      return map;
    }, {});
  }

  private async loadUsers(client: PoolClient, columns: ColumnMap) {
    const available = columns.users;
    if (!available) return [];

    const selectedColumns = readonlyColumnContracts.users.filter((column) => available.has(column));
    if (!selectedColumns.length) return [];

    const orderColumn = this.firstExistingColumn(available, ['created_at', 'last_login_at', 'id']);
    const orderClause = orderColumn ? ` ORDER BY ${this.quoteIdentifier(orderColumn)} DESC NULLS LAST` : '';
    const result = await client.query(
      `SELECT ${selectedColumns.map((column) => this.quoteIdentifier(column)).join(', ')}
       FROM ${this.quoteIdentifier('users')}${orderClause}
       LIMIT $1`,
      [50],
    );

    return result.rows.map((row) => ({
      id: this.value(row, 'id'),
      fullName: this.value(row, 'full_name') || 'unknown',
      email: this.value(row, 'email') || '',
      role: this.value(row, 'role') || 'user',
      currentLevel: this.value(row, 'current_level') || 'HSK2',
      vipStatus: this.value(row, 'is_premium') === true ? 'VIP' : 'Free',
      premiumUntil: this.value(row, 'premium_until') || 'N/A',
      isActive: this.value(row, 'is_active') !== false,
      sourceTable: 'users',
      readOnly: true,
    }));
  }

  private buildContracts(columns: ColumnMap) {
    return readonlyTables.map((table) => {
      const actualFields = Array.from(columns[table] || []);
      const expectedFields = readonlyColumnContracts[table] || [];
      const blockedFields = blockedColumnContracts[table] || [];
      return {
        sourceTable: table,
        realFields: actualFields.filter((field) => !blockedFields.includes(field)),
        experimentFields: expectedFields,
        blockedFields: actualFields.filter((field) => blockedFields.includes(field)),
        riskBoundary: actualFields.length ? 'read-only-select-only' : 'table-not-found',
      };
    });
  }

  private buildGaps(columns: ColumnMap, localData: any) {
    const baseGaps = Array.isArray(localData.realReadonlyGaps) ? localData.realReadonlyGaps : [];
    const tableGaps = readonlyTables
      .filter((table) => !columns[table])
      .map((table) => ({
        key: table,
        label: table,
        currentStatus: v1MissingSourceNotes[table]?.currentStatus || 'real-table-not-found',
        nextAction:
          v1MissingSourceNotes[table]?.nextAction || '确认真实后台是否已有该表，缺失时继续保留 mock 或后续设计新表。',
      }));

    const merged = [...tableGaps];
    for (const gap of baseGaps) {
      if (!merged.some((item) => item.key === gap.key)) {
        merged.push({
          ...gap,
          currentStatus: v1MissingSourceNotes[gap.key]?.currentStatus || gap.currentStatus || gap.status,
          nextAction: v1MissingSourceNotes[gap.key]?.nextAction || gap.nextAction,
        });
      }
    }
    return merged;
  }

  private buildFallbackPreview(data: any) {
    const users = Array.isArray(data.realReadonlyUsers)
      ? data.realReadonlyUsers
      : this.buildFallbackUsers(Array.isArray(data.users) ? data.users : []);

    return {
      users,
      contracts: Array.isArray(data.realReadonlyContracts) ? data.realReadonlyContracts : [],
      gaps: Array.isArray(data.realReadonlyGaps) ? data.realReadonlyGaps : [],
    };
  }

  private buildFallbackUsers(users: any[]) {
    return users.map((user) => ({
      id: user.id,
      fullName: user.name || user.fullName || 'unknown',
      email: user.email,
      role: user.role || '普通用户',
      currentLevel: user.level || user.currentLevel || 'HSK2',
      vipStatus: user.vipStatus || user.plan || 'Free',
      premiumUntil: user.vipExpiresAt || user.premiumUntil || 'N/A',
      isActive: true,
      sourceTable: 'users',
      readOnly: true,
    }));
  }

  private withMeta(
    payload: { users: any[]; contracts: any[]; gaps: any[] },
    meta: Record<string, any>,
  ) {
    return {
      ...payload,
      meta: {
        apiMode: 'real-readonly-contract-preview',
        readOnly: true,
        writeEnabled: false,
        paymentWritesEnabled: false,
        vipWritesEnabled: false,
        ...meta,
      },
    };
  }

  private firstExistingColumn(available: Set<string>, columns: string[]) {
    return columns.find((column) => available.has(column)) || '';
  }

  private quoteIdentifier(identifier: string) {
    if (!/^[a-z_][a-z0-9_]*$/i.test(identifier)) {
      throw new Error('Unsafe SQL identifier blocked');
    }
    return `"${identifier}"`;
  }

  private value(row: Record<string, any>, key: string) {
    return Object.prototype.hasOwnProperty.call(row, key) ? row[key] : undefined;
  }

  private sanitizeError(error: unknown) {
    if (error instanceof Error) return error.message.slice(0, 180);
    return 'unknown read-only connection error';
  }
}
