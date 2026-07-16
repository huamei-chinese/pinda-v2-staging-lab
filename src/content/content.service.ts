import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { createRequire } from 'node:module';
import * as fs from 'node:fs';
import * as path from 'node:path';

export interface HskLessonLockRow {
  lessonId: string;
  level: string;
  lessonNo: number;
  titleVi: string;
  freeItemLimit: number;
  freeWordLimit?: number;
  freeSentenceLimit?: number;
  lockedForFree: boolean;
  updatedAt?: string;
}

export interface DailyThemeLockRow {
  themeId: string;
  titleVi: string;
  sortOrder: number;
  freeItemLimit: number;
  freeWordLimit?: number;
  freeSentenceLimit?: number;
  lockedForFree: boolean;
  updatedAt?: string;
}

export interface ListeningTopicLockRow {
  topicId: string;
  titleVi: string;
  titleZh?: string;
  sortOrder: number;
  lockedForFree: boolean;
  updatedAt?: string;
}

export interface ListeningLessonLockRow {
  lessonId: string;
  topicId: string;
  titleVi: string;
  titleZh?: string;
  sortOrder: number;
  lockedForFree: boolean;
  updatedAt?: string;
}

@Injectable()
export class ContentService {
  private readonly localRequire = createRequire(__filename);
  private staticHskCatalogCache: HskLessonLockRow[] | null = null;
  private staticDailyThemeCatalogCache: DailyThemeLockRow[] | null = null;
  private dailyThemeLegacyAliasCache: Map<string, string> | null = null;
  private staticListeningCatalogCache: { topics: ListeningTopicLockRow[]; lessons: ListeningLessonLockRow[] } | null = null;

  constructor(private readonly db: DatabaseService) {}

  private sortHskLocks(locks: HskLessonLockRow[]) {
    return [...locks].sort((a, b) => {
      const levelOrder = Number(String(a.level || '').replace(/\D/g, '')) - Number(String(b.level || '').replace(/\D/g, ''));
      if (levelOrder !== 0) return levelOrder;
      if (a.lessonNo !== b.lessonNo) return a.lessonNo - b.lessonNo;
      return a.lessonId.localeCompare(b.lessonId);
    });
  }

  private resolveWordSentenceLimits(row: any) {
    const legacyLimit = Math.max(0, Number(row.free_item_limit || 0));
    const explicitWordLimit = Math.max(0, Number(row.free_word_limit || 0));
    const explicitSentenceLimit = Math.max(0, Number(row.free_sentence_limit || 0));
    const hasSpecificLimits = explicitWordLimit > 0 || explicitSentenceLimit > 0;
    return {
      freeItemLimit: legacyLimit,
      freeWordLimit: hasSpecificLimits ? explicitWordLimit : legacyLimit,
      freeSentenceLimit: hasSpecificLimits ? explicitSentenceLimit : legacyLimit,
    };
  }

  private addStaticHskLesson(
    catalog: Map<string, HskLessonLockRow>,
    lesson: any,
    fallbackLevel = '',
  ) {
    const lessonId = String(lesson?.id || lesson?.lessonId || '').trim();
    if (!lessonId) return;

    const inferred = lessonId.match(/^hsk([1-6])-l0?(\d+)/i);
    const level = String(lesson?.level || fallbackLevel || (inferred ? `HSK${inferred[1]}` : '')).trim().toUpperCase();
    if (!/^HSK[1-6]$/.test(level)) return;

    const lessonNo = Math.max(0, Number(lesson?.no || lesson?.lessonNo || lesson?.lesson_number || inferred?.[2] || 0));
    const titleVi = String(lesson?.titleVi || lesson?.title_vi || lesson?.topic || lesson?.title || lesson?.titleZh || lesson?.title_zh || '').trim();
    const current = catalog.get(lessonId);
    catalog.set(lessonId, {
      lessonId,
      level,
      lessonNo: current?.lessonNo || lessonNo,
      titleVi: current?.titleVi || titleVi,
      freeItemLimit: current?.freeItemLimit || 0,
      freeWordLimit: current?.freeWordLimit || 0,
      freeSentenceLimit: current?.freeSentenceLimit || 0,
      lockedForFree: current?.lockedForFree === true,
      updatedAt: current?.updatedAt,
    });
  }

  private listStaticHskLessonCatalog(): HskLessonLockRow[] {
    if (this.staticHskCatalogCache) return this.staticHskCatalogCache;

    const publicDir = path.join(process.cwd(), 'public');
    const catalog = new Map<string, HskLessonLockRow>();
    if (!fs.existsSync(publicDir)) {
      this.staticHskCatalogCache = [];
      return this.staticHskCatalogCache;
    }

    const files = fs.readdirSync(publicDir)
      .filter((file) => /^lesson-hsk.*\.js$/i.test(file))
      .sort();

    for (const file of files) {
      const filePath = path.join(publicDir, file);
      const previousLessonContent = (globalThis as any).lessonContent;
      (globalThis as any).lessonContent = {};
      try {
        delete this.localRequire.cache[this.localRequire.resolve(filePath)];
        const data = this.localRequire(filePath);
        if (Array.isArray(data?.lessons)) {
          for (const lesson of data.lessons) this.addStaticHskLesson(catalog, lesson, data.level);
        } else {
          this.addStaticHskLesson(catalog, data, data?.level);
        }

        const globalLessonContent = (globalThis as any).lessonContent || {};
        for (const [level, lessons] of Object.entries(globalLessonContent)) {
          for (const lesson of Object.values(lessons as Record<string, any>)) {
            this.addStaticHskLesson(catalog, lesson, String(level));
          }
        }
      } catch {
        // Some audit-only browser bundles are not valid Node modules; they are not lesson catalogs.
      } finally {
        if (previousLessonContent === undefined) {
          delete (globalThis as any).lessonContent;
        } else {
          (globalThis as any).lessonContent = previousLessonContent;
        }
      }
    }

    this.staticHskCatalogCache = this.sortHskLocks([...catalog.values()]);
    return this.staticHskCatalogCache;
  }

  private mergeHskLocksWithStaticCatalog(rows: any[]): HskLessonLockRow[] {
    const merged = new Map<string, HskLessonLockRow>();
    for (const item of this.listStaticHskLessonCatalog()) merged.set(item.lessonId, item);

    for (const row of rows) {
      const lessonId = String(row.lesson_id || '').trim();
      if (!lessonId) continue;
      const base = merged.get(lessonId);
      const limits = this.resolveWordSentenceLimits(row);
      merged.set(lessonId, {
        lessonId,
        level: row.level || base?.level || '',
        lessonNo: Number(row.lesson_no || base?.lessonNo || 0),
        titleVi: row.title_vi || base?.titleVi || '',
        ...limits,
        lockedForFree: row.locked_for_free === true,
        updatedAt: row.updated_at,
      });
    }

    return this.sortHskLocks([...merged.values()]);
  }

  private loadHighFrequencyTopicsFromPublicScript(fileName: string, seed: any[] = []): any[] {
    const filePath = path.join(process.cwd(), 'public', fileName);
    if (!fs.existsSync(filePath)) return [];

    const previousTopics = (globalThis as any).highFrequencyTopics;
    (globalThis as any).highFrequencyTopics = [...seed];
    try {
      delete this.localRequire.cache[this.localRequire.resolve(filePath)];
      const exported = this.localRequire(filePath);
      if (Array.isArray((globalThis as any).highFrequencyTopics)) {
        return (globalThis as any).highFrequencyTopics;
      }
      if (Array.isArray(exported?.topics)) return exported.topics;
      if (Array.isArray(exported)) return exported;
      return [];
    } catch {
      return [];
    } finally {
      if (previousTopics === undefined) {
        delete (globalThis as any).highFrequencyTopics;
      } else {
        (globalThis as any).highFrequencyTopics = previousTopics;
      }
    }
  }

  private dailyThemeTitle(theme: any): string {
    return String(theme?.vi || theme?.lesson_title_vi || theme?.title_vi || theme?.title || theme?.zh || theme?.lesson_title_cn || '').trim();
  }

  private listStaticDailyThemeCatalog(): DailyThemeLockRow[] {
    if (this.staticDailyThemeCatalogCache) return this.staticDailyThemeCatalogCache;

    let themes = this.loadHighFrequencyTopicsFromPublicScript('lesson-high-frequency-v1-27-topics.js');
    if (!themes.length) {
      themes = this.loadHighFrequencyTopicsFromPublicScript('lesson-high-frequency-topics.js');
      themes = this.loadHighFrequencyTopicsFromPublicScript('lesson-high-frequency-topic-unit.js', themes);
    }

    const catalog = new Map<string, DailyThemeLockRow>();
    themes.forEach((theme, index) => {
      const themeId = String(theme?.id || '').trim();
      if (!themeId || catalog.has(themeId)) return;
      catalog.set(themeId, {
        themeId,
        titleVi: this.dailyThemeTitle(theme),
        sortOrder: index + 1,
        freeItemLimit: 0,
        freeWordLimit: 0,
        freeSentenceLimit: 0,
        lockedForFree: false,
      });
    });

    this.staticDailyThemeCatalogCache = [...catalog.values()]
      .sort((a, b) => a.sortOrder - b.sortOrder || a.themeId.localeCompare(b.themeId));
    return this.staticDailyThemeCatalogCache;
  }

  private getDailyThemeLegacyAliasMap(): Map<string, string> {
    if (this.dailyThemeLegacyAliasCache) return this.dailyThemeLegacyAliasCache;

    const aliasMap = new Map<string, string>();
    const modern = this.listStaticDailyThemeCatalog();
    const legacyThemes = this.loadHighFrequencyTopicsFromPublicScript('lesson-high-frequency-topics.js');
    const modernByTitle = new Map(
      modern.map((theme) => [this.normalizeComparableTitle(theme.titleVi), theme.themeId]),
    );

    legacyThemes.forEach((theme, index) => {
      const legacyId = String(theme?.id || '').trim();
      if (!legacyId || modern.some((item) => item.themeId === legacyId)) return;

      const byTitle = modernByTitle.get(this.normalizeComparableTitle(this.dailyThemeTitle(theme)));
      const byTopicUnitOrder = modern.find((item) => item.themeId === `hf-topic-unit-bai${String(index + 1).padStart(2, '0')}`);
      const targetId = byTitle || byTopicUnitOrder?.themeId || '';
      if (targetId) aliasMap.set(legacyId, targetId);
    });

    this.dailyThemeLegacyAliasCache = aliasMap;
    return aliasMap;
  }

  private normalizeComparableTitle(value: string): string {
    return String(value || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '');
  }

  private mergeDailyLocksWithStaticCatalog(rows: any[]): DailyThemeLockRow[] {
    const staticCatalog = this.listStaticDailyThemeCatalog();
    const merged = new Map<string, DailyThemeLockRow>();
    const priorities = new Map<string, number>();
    const aliases = this.getDailyThemeLegacyAliasMap();

    for (const item of staticCatalog) {
      merged.set(item.themeId, item);
      priorities.set(item.themeId, 0);
    }

    for (const row of rows) {
      const sourceId = String(row.theme_id || '').trim();
      if (!sourceId) continue;
      const targetId = merged.has(sourceId) ? sourceId : aliases.get(sourceId);
      if (!targetId || !merged.has(targetId)) continue;

      const priority = targetId === sourceId ? 2 : 1;
      if ((priorities.get(targetId) || 0) > priority) continue;

      const base = merged.get(targetId)!;
      const limits = this.resolveWordSentenceLimits(row);
      merged.set(targetId, {
        ...base,
        ...limits,
        lockedForFree: row.locked_for_free === true,
        updatedAt: row.updated_at,
      });
      priorities.set(targetId, priority);
    }

    return [...merged.values()].sort((a, b) => a.sortOrder - b.sortOrder || a.themeId.localeCompare(b.themeId));
  }

  private listStaticListeningLockCatalog(): { topics: ListeningTopicLockRow[]; lessons: ListeningLessonLockRow[] } {
    if (this.staticListeningCatalogCache) return this.staticListeningCatalogCache;

    const catalogPath = path.join(process.cwd(), 'public', 'listening-app', 'data', 'listening-catalog.json');
    const topics = new Map<string, ListeningTopicLockRow>();
    const lessons = new Map<string, ListeningLessonLockRow>();

    if (fs.existsSync(catalogPath)) {
      try {
        const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
        let topicOrder = 0;
        const addTopic = (topic: any) => {
          const topicId = String(topic?.id || '').trim();
          if (!topicId) return;
          topicOrder += 1;
          const existingTopic = topics.get(topicId);
          topics.set(topicId, {
            topicId,
            titleVi: existingTopic?.titleVi || String(topic?.label_vi || topic?.label_zh || topicId).trim(),
            titleZh: existingTopic?.titleZh || String(topic?.label_zh || topic?.label_vi || topicId).trim(),
            sortOrder: existingTopic?.sortOrder || topicOrder,
            lockedForFree: existingTopic?.lockedForFree === true,
            updatedAt: existingTopic?.updatedAt,
          });

          let lessonOrder = 0;
          for (const lesson of topic?.lessons || []) {
            const lessonId = String(lesson?.id || '').trim();
            if (!lessonId) continue;
            lessonOrder += 1;
            const existingLesson = lessons.get(lessonId);
            lessons.set(lessonId, {
              lessonId,
              topicId,
              titleVi: existingLesson?.titleVi || String(lesson?.title_vi || lesson?.title_zh || lesson?.title || lessonId).trim(),
              titleZh: existingLesson?.titleZh || String(lesson?.title_zh || lesson?.title_vi || lesson?.title || lessonId).trim(),
              sortOrder: existingLesson?.sortOrder || lessonOrder,
              lockedForFree: existingLesson?.lockedForFree === true,
              updatedAt: existingLesson?.updatedAt,
            });
          }
        };

        for (const track of catalog?.tracks || []) {
          for (const level of track?.levels || []) {
            for (const topic of level?.topics || []) {
              addTopic(topic);
            }
          }
          for (const topic of track?.topics || []) {
            addTopic(topic);
          }
        }
      } catch {
        // Keep admin usable even if a local catalog file is temporarily malformed.
      }
    }

    this.staticListeningCatalogCache = {
      topics: [...topics.values()].sort((a, b) => a.sortOrder - b.sortOrder || a.topicId.localeCompare(b.topicId)),
      lessons: [...lessons.values()].sort((a, b) => a.topicId.localeCompare(b.topicId) || a.sortOrder - b.sortOrder || a.lessonId.localeCompare(b.lessonId)),
    };
    return this.staticListeningCatalogCache;
  }

  private mergeListeningLocksWithStaticCatalog(topicRows: any[], lessonRows: any[]) {
    const staticCatalog = this.listStaticListeningLockCatalog();
    const topics = new Map<string, ListeningTopicLockRow>();
    const lessons = new Map<string, ListeningLessonLockRow>();
    for (const item of staticCatalog.topics) topics.set(item.topicId, item);
    for (const item of staticCatalog.lessons) lessons.set(item.lessonId, item);

    for (const row of topicRows) {
      const topicId = String(row.topic_id || '').trim();
      if (!topicId) continue;
      const base = topics.get(topicId);
      topics.set(topicId, {
        topicId,
        titleVi: base?.titleVi || row.title_vi || '',
        titleZh: base?.titleZh || base?.titleVi || row.title_vi || '',
        sortOrder: Number(base?.sortOrder || row.sort_order || 0),
        lockedForFree: row.locked_for_free === true,
        updatedAt: row.updated_at,
      });
    }

    for (const row of lessonRows) {
      const lessonId = String(row.lesson_id || '').trim();
      if (!lessonId) continue;
      const base = lessons.get(lessonId);
      lessons.set(lessonId, {
        lessonId,
        topicId: row.topic_id || base?.topicId || '',
        titleVi: base?.titleVi || row.title_vi || '',
        titleZh: base?.titleZh || base?.titleVi || row.title_vi || '',
        sortOrder: Number(base?.sortOrder || row.sort_order || 0),
        lockedForFree: row.locked_for_free === true,
        updatedAt: row.updated_at,
      });
    }

    return {
      topics: [...topics.values()].sort((a, b) => a.sortOrder - b.sortOrder || a.topicId.localeCompare(b.topicId)),
      lessons: [...lessons.values()].sort((a, b) => a.topicId.localeCompare(b.topicId) || a.sortOrder - b.sortOrder || a.lessonId.localeCompare(b.lessonId)),
    };
  }

  private async ensureDailyThemeLocksSchema() {
    await this.db.query(`
      CREATE TABLE IF NOT EXISTS hsk_lesson_locks (
        lesson_id TEXT PRIMARY KEY,
        level TEXT NOT NULL DEFAULT '',
        lesson_no INTEGER NOT NULL DEFAULT 0,
        title_vi TEXT NOT NULL DEFAULT '',
        free_item_limit INTEGER NOT NULL DEFAULT 0,
        locked_for_free BOOLEAN NOT NULL DEFAULT FALSE,
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);
    await this.db.query(`ALTER TABLE hsk_lesson_locks ADD COLUMN IF NOT EXISTS free_word_limit INTEGER NOT NULL DEFAULT 0;`);
    await this.db.query(`ALTER TABLE hsk_lesson_locks ADD COLUMN IF NOT EXISTS free_sentence_limit INTEGER NOT NULL DEFAULT 0;`);
    await this.db.query(`
      CREATE TABLE IF NOT EXISTS daily_theme_locks (
        theme_id TEXT PRIMARY KEY,
        title_vi TEXT NOT NULL DEFAULT '',
        sort_order INTEGER NOT NULL DEFAULT 0,
        free_item_limit INTEGER NOT NULL DEFAULT 0,
        locked_for_free BOOLEAN NOT NULL DEFAULT FALSE,
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);
    await this.db.query(`
      ALTER TABLE daily_theme_locks
      ADD COLUMN IF NOT EXISTS free_item_limit INTEGER NOT NULL DEFAULT 0;
    `);
    await this.db.query(`ALTER TABLE daily_theme_locks ADD COLUMN IF NOT EXISTS free_word_limit INTEGER NOT NULL DEFAULT 0;`);
    await this.db.query(`ALTER TABLE daily_theme_locks ADD COLUMN IF NOT EXISTS free_sentence_limit INTEGER NOT NULL DEFAULT 0;`);
    await this.db.query(`
      CREATE TABLE IF NOT EXISTS listening_topic_locks (
        topic_id TEXT PRIMARY KEY, title_vi TEXT NOT NULL DEFAULT '', sort_order INTEGER NOT NULL DEFAULT 0,
        locked_for_free BOOLEAN NOT NULL DEFAULT FALSE, updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
      CREATE TABLE IF NOT EXISTS listening_lesson_locks (
        lesson_id TEXT PRIMARY KEY, topic_id TEXT NOT NULL DEFAULT '', title_vi TEXT NOT NULL DEFAULT '', sort_order INTEGER NOT NULL DEFAULT 0,
        locked_for_free BOOLEAN NOT NULL DEFAULT FALSE, updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);
  }

  async listLocks(): Promise<HskLessonLockRow[]> {
    await this.ensureDailyThemeLocksSchema();
    const result = await this.db.query(
      `SELECT lesson_id, level, lesson_no, title_vi, free_item_limit, free_word_limit, free_sentence_limit, locked_for_free, updated_at
       FROM hsk_lesson_locks
       ORDER BY level ASC, lesson_no ASC, lesson_id ASC`,
    );
    return this.mergeHskLocksWithStaticCatalog(result.rows);
  }

  async listPublicHskLocks(): Promise<Array<{
    lessonId: string;
    freeItemLimit: number;
    freeWordLimit: number;
    freeSentenceLimit: number;
    lockedForFree: boolean;
  }>> {
    await this.ensureDailyThemeLocksSchema();
    const result = await this.db.query(
      `SELECT lesson_id, free_item_limit, free_word_limit, free_sentence_limit, locked_for_free
       FROM hsk_lesson_locks
       ORDER BY lesson_id ASC`,
    );
    return result.rows.map((row) => ({
      lessonId: row.lesson_id,
      ...this.resolveWordSentenceLimits(row),
      lockedForFree: row.locked_for_free === true,
    }));
  }

  async saveLocks(lessons: Array<{
    lessonId: string;
    level: string;
    lessonNo?: number;
    titleVi?: string;
    freeItemLimit?: number;
    freeWordLimit?: number;
    freeSentenceLimit?: number;
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
        const freeWordLimit = Math.max(0, Number(lesson.freeWordLimit ?? freeItemLimit));
        const freeSentenceLimit = Math.max(0, Number(lesson.freeSentenceLimit ?? freeItemLimit));
        const effectiveLockedForFree = lockedForFree;

        if (!lessonId || !level) continue;

        await client.query(
          `INSERT INTO hsk_lesson_locks (lesson_id, level, lesson_no, title_vi, free_item_limit, free_word_limit, free_sentence_limit, locked_for_free, updated_at)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW())
           ON CONFLICT (lesson_id) DO UPDATE
           SET level = EXCLUDED.level,
               lesson_no = EXCLUDED.lesson_no,
               title_vi = EXCLUDED.title_vi,
               free_item_limit = EXCLUDED.free_item_limit,
               free_word_limit = EXCLUDED.free_word_limit,
               free_sentence_limit = EXCLUDED.free_sentence_limit,
               locked_for_free = EXCLUDED.locked_for_free,
               updated_at = NOW()`,
          [lessonId, level, lessonNo, titleVi, freeItemLimit, freeWordLimit, freeSentenceLimit, effectiveLockedForFree],
        );
      }
      await client.query('COMMIT');
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }

    return { locks: await this.listLocks() };
  }

  async listDailyLocks(): Promise<DailyThemeLockRow[]> {
    await this.ensureDailyThemeLocksSchema();
    const result = await this.db.query(
      `SELECT theme_id, title_vi, sort_order, free_item_limit, free_word_limit, free_sentence_limit, locked_for_free, updated_at
       FROM daily_theme_locks
       ORDER BY sort_order ASC, theme_id ASC`,
    );
    return this.mergeDailyLocksWithStaticCatalog(result.rows);
  }

  async listPublicDailyLocks(): Promise<Array<{ themeId: string; freeItemLimit: number; lockedForFree: boolean }>> {
    await this.ensureDailyThemeLocksSchema();
    const result = await this.db.query(
      `SELECT theme_id, free_item_limit, free_word_limit, free_sentence_limit, locked_for_free
       FROM daily_theme_locks
       WHERE locked_for_free = TRUE OR free_item_limit > 0 OR free_word_limit > 0 OR free_sentence_limit > 0
       ORDER BY theme_id ASC`,
    );
    return this.mergeDailyLocksWithStaticCatalog(result.rows)
      .filter((row) => row.lockedForFree || Number(row.freeItemLimit || row.freeWordLimit || row.freeSentenceLimit || 0) > 0)
      .map((row) => ({
        themeId: row.themeId,
        freeItemLimit: Math.max(0, Number(row.freeItemLimit || row.freeSentenceLimit || row.freeWordLimit || 0)),
        lockedForFree: row.lockedForFree === true,
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
    freeWordLimit?: number;
    freeSentenceLimit?: number;
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
        const freeWordLimit = Math.max(0, Number(theme.freeWordLimit ?? freeItemLimit));
        const freeSentenceLimit = Math.max(0, Number(theme.freeSentenceLimit ?? freeItemLimit));
        const lockedForFree = theme.lockedForFree === true;

        if (!themeId) continue;

        await client.query(
          `INSERT INTO daily_theme_locks (theme_id, title_vi, sort_order, free_item_limit, free_word_limit, free_sentence_limit, locked_for_free, updated_at)
           VALUES ($1, $2, $3, $4, $5, $6, $7, NOW())
           ON CONFLICT (theme_id) DO UPDATE
           SET title_vi = EXCLUDED.title_vi,
               sort_order = EXCLUDED.sort_order,
               free_item_limit = EXCLUDED.free_item_limit,
               free_word_limit = EXCLUDED.free_word_limit,
               free_sentence_limit = EXCLUDED.free_sentence_limit,
               locked_for_free = EXCLUDED.locked_for_free,
               updated_at = NOW()`,
          [themeId, titleVi, sortOrder, freeItemLimit, freeWordLimit, freeSentenceLimit, lockedForFree],
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

  async listPublicLearningAccessRules() {
    await this.ensureDailyThemeLocksSchema();
    const [hsk, daily, topics, lessons] = await Promise.all([
      this.db.query(`SELECT lesson_id, free_item_limit, free_word_limit, free_sentence_limit, locked_for_free FROM hsk_lesson_locks ORDER BY lesson_id ASC`),
      this.db.query(`SELECT theme_id, free_item_limit, free_word_limit, free_sentence_limit, locked_for_free FROM daily_theme_locks ORDER BY sort_order ASC, theme_id ASC`),
      this.db.query(`SELECT topic_id, locked_for_free FROM listening_topic_locks ORDER BY sort_order ASC, topic_id ASC`),
      this.db.query(`SELECT lesson_id, topic_id, locked_for_free FROM listening_lesson_locks ORDER BY sort_order ASC, lesson_id ASC`),
    ]);
    return {
      hskLessonLocks: hsk.rows.map((row) => ({ lessonId: row.lesson_id, lockedForFree: row.locked_for_free === true, freeWordLimit: this.resolveWordSentenceLimits(row).freeWordLimit, freeSentenceLimit: this.resolveWordSentenceLimits(row).freeSentenceLimit })),
      dailyThemeLocks: this.mergeDailyLocksWithStaticCatalog(daily.rows).map((row) => ({ themeId: row.themeId, lockedForFree: row.lockedForFree === true, freeWordLimit: Math.max(0, Number(row.freeWordLimit || 0)), freeSentenceLimit: Math.max(0, Number(row.freeSentenceLimit || 0)) })),
      listeningTopicLocks: topics.rows.map((row) => ({ topicId: row.topic_id, lockedForFree: row.locked_for_free === true })),
      listeningLessonLocks: lessons.rows.map((row) => ({ lessonId: row.lesson_id, topicId: row.topic_id, lockedForFree: row.locked_for_free === true })),
    };
  }

  async listListeningLocks() {
    await this.ensureDailyThemeLocksSchema();
    const [topics, lessons] = await Promise.all([
      this.db.query(`SELECT topic_id, title_vi, sort_order, locked_for_free, updated_at FROM listening_topic_locks ORDER BY sort_order ASC, topic_id ASC`),
      this.db.query(`SELECT lesson_id, topic_id, title_vi, sort_order, locked_for_free, updated_at FROM listening_lesson_locks ORDER BY sort_order ASC, lesson_id ASC`),
    ]);
    return this.mergeListeningLocksWithStaticCatalog(topics.rows, lessons.rows);
  }

  async saveListeningLocks(topics: any[], lessons: any[]) {
    if ((!Array.isArray(topics) || topics.length === 0) && (!Array.isArray(lessons) || lessons.length === 0)) {
      throw new HttpException('Danh sách khóa nghe không hợp lệ.', HttpStatus.BAD_REQUEST);
    }
    await this.ensureDailyThemeLocksSchema();
    const client = await this.db.getPool()!.connect();
    try {
      await client.query('BEGIN');
      for (const topic of topics || []) {
        const topicId = String(topic.topicId || '').trim();
        if (!topicId) continue;
        await client.query(`INSERT INTO listening_topic_locks (topic_id, title_vi, sort_order, locked_for_free, updated_at) VALUES ($1, $2, $3, $4, NOW()) ON CONFLICT (topic_id) DO UPDATE SET title_vi = EXCLUDED.title_vi, sort_order = EXCLUDED.sort_order, locked_for_free = EXCLUDED.locked_for_free, updated_at = NOW()`, [topicId, String(topic.titleVi || '').trim(), Number(topic.sortOrder || 0), topic.lockedForFree === true]);
      }
      for (const lesson of lessons || []) {
        const lessonId = String(lesson.lessonId || '').trim();
        if (!lessonId) continue;
        await client.query(`INSERT INTO listening_lesson_locks (lesson_id, topic_id, title_vi, sort_order, locked_for_free, updated_at) VALUES ($1, $2, $3, $4, $5, NOW()) ON CONFLICT (lesson_id) DO UPDATE SET topic_id = EXCLUDED.topic_id, title_vi = EXCLUDED.title_vi, sort_order = EXCLUDED.sort_order, locked_for_free = EXCLUDED.locked_for_free, updated_at = NOW()`, [lessonId, String(lesson.topicId || '').trim(), String(lesson.titleVi || '').trim(), Number(lesson.sortOrder || 0), lesson.lockedForFree === true]);
      }
      await client.query('COMMIT');
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
    return this.listListeningLocks();
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
