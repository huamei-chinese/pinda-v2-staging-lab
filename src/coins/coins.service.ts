import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

const HOME_COIN_TASK_REWARDS = {
  vocab: 10,
  listening: 15,
  write: 15,
} as const;

const HOME_COIN_TASK_REQUIREMENTS = {
  vocab: { progressKey: 'savedVocabCount', minimum: 20 },
  listening: { progressKey: 'listenSeconds', minimum: 30 * 60 },
  write: { progressKey: 'writeSeconds', minimum: 30 * 60 },
} as const;

const HOME_COIN_TIME_ZONE = 'Asia/Ho_Chi_Minh';

type CoinSource = keyof typeof HOME_COIN_TASK_REWARDS;
type CoinPeriod = 'week' | 'month';

@Injectable()
export class CoinsService {
  constructor(private readonly db: DatabaseService) {}

  private normalizeUuid(value: unknown): string {
    const text = String(value || '').trim();
    return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(text)
      ? text
      : '';
  }

  private headerValue(headers: Record<string, string | string[] | undefined>, name: string): string {
    const value = headers[name] || headers[name.toLowerCase()] || headers[name.toUpperCase()];
    return Array.isArray(value) ? String(value[0] || '') : String(value || '');
  }

  private getVietnamDateKey(date = new Date()): string {
    const formatter = new Intl.DateTimeFormat('en-CA', {
      timeZone: HOME_COIN_TIME_ZONE,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    return formatter.format(date);
  }

  private normalizeCoinSource(source: unknown): CoinSource | '' {
    const normalized = String(source || '').trim().toLowerCase().replace(/^daily[-_:]/, '');
    return Object.prototype.hasOwnProperty.call(HOME_COIN_TASK_REWARDS, normalized)
      ? normalized as CoinSource
      : '';
  }

  private isCoinClaimProgressEligible(source: CoinSource, progress: any): boolean {
    const requirement = HOME_COIN_TASK_REQUIREMENTS[source];
    return Number(progress?.[requirement.progressKey] || 0) >= requirement.minimum;
  }

  private normalizeCoinPeriod(period: unknown): CoinPeriod {
    return String(period || '').trim().toLowerCase() === 'month' ? 'month' : 'week';
  }

  private coinPeriodSql(period: CoinPeriod): string {
    return period === 'month'
      ? `date_trunc('month', timezone('${HOME_COIN_TIME_ZONE}', now())) AT TIME ZONE '${HOME_COIN_TIME_ZONE}'`
      : `date_trunc('week', timezone('${HOME_COIN_TIME_ZONE}', now())) AT TIME ZONE '${HOME_COIN_TIME_ZONE}'`;
  }

  private coinWalletFromRows(rows: any[]) {
    const getAmount = (period: string) => Number(rows.find((row) => row.period === period)?.amount || 0);
    return {
      coins: getAmount('total'),
      weeklyCoins: getAmount('week'),
      monthlyCoins: getAmount('month'),
      updatedAt: Date.now(),
    };
  }

  private publicCoinEntry(row: any) {
    const displayName = row.full_name || row.email || 'Hoc vien HuaMei';
    return {
      userId: row.user_id,
      displayName,
      avatarInitial: String(displayName || 'H').trim().charAt(0).toUpperCase() || 'H',
      avatarUrl: row.avatar_url || '',
      score: Number(row.score || 0),
      coins: Number(row.total_coins || row.score || 0),
      rank: Number(row.rank || 0),
      updatedAt: row.last_awarded_at || null,
    };
  }

  private async getCoinRequester(headers: Record<string, string | string[] | undefined>) {
    const userId = this.normalizeUuid(this.headerValue(headers, 'x-user-id'));
    if (!userId) return null;
    const result = await this.db.query(
      'SELECT id, full_name, email, avatar_url, is_active FROM users WHERE id = $1',
      [userId],
    );
    const user = result.rows[0];
    return user?.is_active === true ? user : null;
  }

  private async getCoinWallet(userId: string) {
    const result = await this.db.query(
      `SELECT period, COALESCE(SUM(amount), 0)::int AS amount
       FROM (
         SELECT 'total' AS period, amount
         FROM coin_transactions
         WHERE user_id = $1
         UNION ALL
         SELECT 'week' AS period, amount
         FROM coin_transactions
         WHERE user_id = $1
           AND created_at >= ${this.coinPeriodSql('week')}
         UNION ALL
         SELECT 'month' AS period, amount
         FROM coin_transactions
         WHERE user_id = $1
           AND created_at >= ${this.coinPeriodSql('month')}
       ) scoped
       GROUP BY period`,
      [userId],
    );
    return this.coinWalletFromRows(result.rows);
  }

  private async getTodayCoinClaims(userId: string) {
    const periodKey = `daily:${this.getVietnamDateKey()}`;
    const result = await this.db.query(
      `SELECT source, amount, created_at
       FROM coin_transactions
       WHERE user_id = $1
         AND period_key = $2
         AND source = ANY($3::text[])
       ORDER BY created_at ASC`,
      [userId, periodKey, Object.keys(HOME_COIN_TASK_REWARDS)],
    );
    return {
      periodKey,
      claimedSources: result.rows.map((row) => row.source),
      claims: result.rows.map((row) => ({
        source: row.source,
        amount: Number(row.amount || 0),
        createdAt: row.created_at,
      })),
    };
  }

  async summary(headers: Record<string, string | string[] | undefined>) {
    const requester = await this.getCoinRequester(headers);
    if (!requester) {
      throw new HttpException('Vui long dang nhap de dung xu HuaMei.', HttpStatus.UNAUTHORIZED);
    }
    const wallet = await this.getCoinWallet(requester.id);
    const today = await this.getTodayCoinClaims(requester.id);
    return {
      wallet,
      today,
      rewards: HOME_COIN_TASK_REWARDS,
      user: {
        id: requester.id,
        fullName: requester.full_name,
        email: requester.email,
        avatarUrl: requester.avatar_url || '',
      },
      generatedAt: new Date().toISOString(),
    };
  }

  async claim(headers: Record<string, string | string[] | undefined>, body: any) {
    const requester = await this.getCoinRequester(headers);
    if (!requester) {
      throw new HttpException('Vui long dang nhap de nhan xu.', HttpStatus.UNAUTHORIZED);
    }
    const source = this.normalizeCoinSource(body?.source || body?.taskId);
    if (!source) {
      throw new HttpException('Nhiem vu nhan xu khong hop le.', HttpStatus.BAD_REQUEST);
    }
    if (!this.isCoinClaimProgressEligible(source, body?.progress)) {
      throw new HttpException('Nhiem vu chua du dieu kien nhan xu.', HttpStatus.BAD_REQUEST);
    }
    const amount = HOME_COIN_TASK_REWARDS[source];
    const periodKey = `daily:${this.getVietnamDateKey()}`;
    const metadata = {
      claimedFrom: 'home_coin_hunt',
      clientProgress: body?.progress && typeof body.progress === 'object' ? body.progress : null,
    };
    const inserted = await this.db.query(
      `INSERT INTO coin_transactions (user_id, source, period_key, amount, metadata)
       VALUES ($1, $2, $3, $4, $5::jsonb)
       ON CONFLICT (user_id, source, period_key) DO NOTHING
       RETURNING id, source, period_key, amount, created_at`,
      [requester.id, source, periodKey, amount, JSON.stringify(metadata)],
    );
    const wallet = await this.getCoinWallet(requester.id);
    const today = await this.getTodayCoinClaims(requester.id);
    return {
      claimed: inserted.rowCount > 0,
      transaction: inserted.rows[0] ? {
        id: inserted.rows[0].id,
        source: inserted.rows[0].source,
        periodKey: inserted.rows[0].period_key,
        amount: Number(inserted.rows[0].amount || 0),
        createdAt: inserted.rows[0].created_at,
      } : null,
      wallet,
      today,
      generatedAt: new Date().toISOString(),
    };
  }

  async leaderboard(headers: Record<string, string | string[] | undefined>, periodInput?: string, limitInput?: string) {
    const requester = await this.getCoinRequester(headers);
    const currentUserId = requester?.id || null;
    const period = this.normalizeCoinPeriod(periodInput);
    const limit = Math.max(1, Math.min(50, Number(limitInput || 10) || 10));
    const result = await this.db.query(
      `WITH period_scores AS (
         SELECT user_id,
                COALESCE(SUM(amount), 0)::int AS score,
                MAX(created_at) AS last_awarded_at
         FROM coin_transactions
         WHERE created_at >= ${this.coinPeriodSql(period)}
         GROUP BY user_id
       ),
       total_scores AS (
         SELECT user_id, COALESCE(SUM(amount), 0)::int AS total_coins
         FROM coin_transactions
         GROUP BY user_id
       ),
       ranked AS (
         SELECT u.id AS user_id,
                u.full_name,
                u.email,
                u.avatar_url,
                COALESCE(ps.score, 0)::int AS score,
                COALESCE(ts.total_coins, 0)::int AS total_coins,
                ps.last_awarded_at,
                ROW_NUMBER() OVER (
                  ORDER BY COALESCE(ps.score, 0) DESC,
                           ps.last_awarded_at ASC NULLS LAST,
                           lower(u.full_name) ASC
                ) AS rank
         FROM users u
         LEFT JOIN period_scores ps ON ps.user_id = u.id
         LEFT JOIN total_scores ts ON ts.user_id = u.id
         WHERE u.is_active = TRUE
           AND (COALESCE(ps.score, 0) > 0 OR u.id = $1::uuid)
       )
       SELECT *
       FROM ranked
       WHERE rank <= $2 OR user_id = $1::uuid
       ORDER BY rank ASC`,
      [currentUserId, limit],
    );
    const entries = result.rows.map((row) => this.publicCoinEntry(row));
    return {
      period,
      entries: entries.filter((entry) => entry.rank <= limit),
      current: currentUserId ? entries.find((entry) => entry.userId === currentUserId) || null : null,
      generatedAt: new Date().toISOString(),
    };
  }
}
