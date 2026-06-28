import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

export interface HskLessonLockRow {
  lessonId: string;
  level: string;
  lessonNo: number;
  titleVi: string;
  freeItemLimit: number;
  lockedForFree: boolean;
  updatedAt?: string;
}

export interface DailyThemeLockRow {
  themeId: string;
  titleVi: string;
  sortOrder: number;
  freeItemLimit: number;
  lockedForFree: boolean;
  updatedAt?: string;
}

@Injectable()
export class ContentService {
  private publicHskLocksCache: Promise<Array<{ lessonId: string; freeItemLimit: number }>> | null = null;

  constructor(private readonly db: DatabaseService) {}

  private async ensureDailyThemeLocksSchema() {
    await this.db.query(`
      ALTER TABLE daily_theme_locks
      ADD COLUMN IF NOT EXISTS free_item_limit INTEGER NOT NULL DEFAULT 0;
    `);
  }

  async listLocks(): Promise<HskLessonLockRow[]> {
    const result = await this.db.query(
      `SELECT lesson_id, level, lesson_no, title_vi, free_item_limit, locked_for_free, updated_at
       FROM hsk_lesson_locks
       ORDER BY level ASC, lesson_no ASC, lesson_id ASC`,
    );
    return result.rows.map((row) => ({
      lessonId: row.lesson_id,
      level: row.level,
      lessonNo: Number(row.lesson_no),
      titleVi: row.title_vi,
      freeItemLimit: Number(row.free_item_limit || 0),
      lockedForFree: row.locked_for_free,
      updatedAt: row.updated_at,
    }));
  }

  async listPublicHskLocks(): Promise<Array<{ lessonId: string; freeItemLimit: number }>> {
    if (!this.publicHskLocksCache) {
      this.publicHskLocksCache = this.db.query(
        `SELECT lesson_id, free_item_limit
         FROM hsk_lesson_locks
         WHERE free_item_limit > 0
         ORDER BY lesson_id ASC`,
      ).then((result) => result.rows.map((row) => ({
        lessonId: row.lesson_id,
        freeItemLimit: Math.max(0, Number(row.free_item_limit || 0)),
      })));
    }
    return this.publicHskLocksCache;
  }

  async saveLocks(lessons: Array<{
    lessonId: string;
    level: string;
    lessonNo?: number;
    titleVi?: string;
    freeItemLimit?: number;
    lockedForFree?: boolean;
  }>) {
    if (!Array.isArray(lessons) || lessons.length === 0) {
      throw new HttpException('Danh sách bài học không hợp lệ.', HttpStatus.BAD_REQUEST);
    }

    const client = await this.db.getPool()!.connect();
    try {
      await client.query('BEGIN');
      for (const lesson of lessons) {
        const lessonId = String(lesson.lessonId || '').trim();
        const level = String(lesson.level || '').trim().toUpperCase();
        const lessonNo = Number(lesson.lessonNo || 0);
        const titleVi = String(lesson.titleVi || '').trim();
        const lockedForFree = lesson.lockedForFree === true;
        const freeItemLimit = Math.max(0, Number(lesson.freeItemLimit || 0));
        const effectiveLockedForFree = lockedForFree || freeItemLimit > 0;

        if (!lessonId || !level) continue;

        await client.query(
          `INSERT INTO hsk_lesson_locks (lesson_id, level, lesson_no, title_vi, free_item_limit, locked_for_free, updated_at)
           VALUES ($1, $2, $3, $4, $5, $6, NOW())
           ON CONFLICT (lesson_id) DO UPDATE
           SET level = EXCLUDED.level,
               lesson_no = EXCLUDED.lesson_no,
               title_vi = EXCLUDED.title_vi,
               free_item_limit = EXCLUDED.free_item_limit,
               locked_for_free = EXCLUDED.locked_for_free,
               updated_at = NOW()`,
          [lessonId, level, lessonNo, titleVi, freeItemLimit, effectiveLockedForFree],
        );
      }
      await client.query('COMMIT');
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }

    this.publicHskLocksCache = null;
    return { locks: await this.listLocks() };
  }

  async listDailyLocks(): Promise<DailyThemeLockRow[]> {
    await this.ensureDailyThemeLocksSchema();
    const result = await this.db.query(
      `SELECT theme_id, title_vi, sort_order, free_item_limit, locked_for_free, updated_at
       FROM daily_theme_locks
       ORDER BY sort_order ASC, theme_id ASC`,
    );
    return result.rows.map((row) => ({
      themeId: row.theme_id,
      titleVi: row.title_vi,
      sortOrder: Number(row.sort_order),
      freeItemLimit: Math.max(0, Number(row.free_item_limit || 0)),
      lockedForFree: row.locked_for_free,
      updatedAt: row.updated_at,
    }));
  }

  async listPublicDailyLocks(): Promise<Array<{ themeId: string; freeItemLimit: number; lockedForFree: boolean }>> {
    await this.ensureDailyThemeLocksSchema();
    const result = await this.db.query(
      `SELECT theme_id, free_item_limit, locked_for_free
       FROM daily_theme_locks
       WHERE locked_for_free = TRUE OR free_item_limit > 0
       ORDER BY theme_id ASC`,
    );
    return result.rows.map((row) => ({
      themeId: row.theme_id,
      freeItemLimit: Math.max(0, Number(row.free_item_limit || 0)),
      lockedForFree: row.locked_for_free === true,
    }));
  }

  async listLockedDailyThemeIds(): Promise<string[]> {
    await this.ensureDailyThemeLocksSchema();
    const result = await this.db.query(
      `SELECT theme_id FROM daily_theme_locks WHERE locked_for_free = TRUE`,
    );
    return result.rows.map((row) => row.theme_id);
  }

  async saveDailyLocks(themes: Array<{
    themeId: string;
    titleVi?: string;
    sortOrder?: number;
    freeItemLimit?: number;
    lockedForFree?: boolean;
  }>) {
    if (!Array.isArray(themes) || themes.length === 0) {
      throw new HttpException('Danh sách chủ đề không hợp lệ.', HttpStatus.BAD_REQUEST);
    }

    await this.ensureDailyThemeLocksSchema();
    const client = await this.db.getPool()!.connect();
    try {
      await client.query('BEGIN');
      for (const theme of themes) {
        const themeId = String(theme.themeId || '').trim();
        const titleVi = String(theme.titleVi || '').trim();
        const sortOrder = Number(theme.sortOrder || 0);
        const freeItemLimit = Math.max(0, Number(theme.freeItemLimit || 0));
        const lockedForFree = theme.lockedForFree === true;

        if (!themeId) continue;

        await client.query(
          `INSERT INTO daily_theme_locks (theme_id, title_vi, sort_order, free_item_limit, locked_for_free, updated_at)
           VALUES ($1, $2, $3, $4, $5, NOW())
           ON CONFLICT (theme_id) DO UPDATE
           SET title_vi = EXCLUDED.title_vi,
               sort_order = EXCLUDED.sort_order,
               free_item_limit = EXCLUDED.free_item_limit,
               locked_for_free = EXCLUDED.locked_for_free,
               updated_at = NOW()`,
          [themeId, titleVi, sortOrder, freeItemLimit, lockedForFree],
        );
      }
      await client.query('COMMIT');
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }

    return { locks: await this.listDailyLocks() };
  }

  async listHskLevelCovers(): Promise<Array<{ level: string; coverUrl: string; updatedAt?: string }>> {
    const result = await this.db.query(
      `SELECT level, cover_url, updated_at
       FROM hsk_level_covers
       ORDER BY level ASC`,
    );
    return result.rows.map((row) => ({
      level: row.level,
      coverUrl: String(row.cover_url || ''),
      updatedAt: row.updated_at,
    }));
  }

  async saveHskLevelCovers(
    covers: Array<{ level: string; coverUrl?: string }>,
  ) {
    if (!Array.isArray(covers) || covers.length === 0) {
      throw new HttpException('Danh sách cấp HSK không hợp lệ.', HttpStatus.BAD_REQUEST);
    }

    const client = await this.db.getPool()!.connect();
    try {
      await client.query('BEGIN');
      for (const cover of covers) {
        const level = String(cover.level || '').trim().toUpperCase();
        const coverUrl = String(cover.coverUrl || '').trim();
        if (!/^HSK[1-6]$/.test(level)) continue;
        await client.query(
          `INSERT INTO hsk_level_covers (level, cover_url, updated_at)
           VALUES ($1, $2, NOW())
           ON CONFLICT (level) DO UPDATE
           SET cover_url = EXCLUDED.cover_url,
               updated_at = NOW()`,
          [level, coverUrl],
        );
      }
      await client.query('COMMIT');
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }

    return { covers: await this.listHskLevelCovers() };
  }
}
