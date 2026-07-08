import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

const ALLOWED_EVENT_TYPES = new Set([
  'lesson_opened',
  'question_answered',
  'paywall_shown',
  'vip_modal_opened',
]);

const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

interface NormalizedEvent {
  userId: string | null;
  eventType: string;
  module: string | null;
  level: string | null;
  lessonId: string | null;
  topicId: string | null;
  questionId: string | null;
  isCorrect: boolean | null;
  source: string | null;
}

@Injectable()
export class EventsService {
  constructor(private readonly db: DatabaseService) {}

  private text(value: unknown, maxLength = 120): string | null {
    const normalized = String(value ?? '').trim();
    if (!normalized) return null;
    return normalized.slice(0, maxLength);
  }

  private normalizeSource(value: unknown): string | null {
    const normalized = String(value ?? '')
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9_-]/g, '')
      .slice(0, 40);
    return normalized || null;
  }

  private normalizeUserId(value: unknown): string | null {
    const normalized = String(value ?? '').trim();
    return UUID_REGEX.test(normalized) ? normalized : null;
  }

  private normalizeBoolean(value: unknown): boolean | null {
    if (value === true || value === false) return value;
    if (value === 'true') return true;
    if (value === 'false') return false;
    return null;
  }

  private normalizeEvent(raw: any, fallbackUserId: string | null): NormalizedEvent | null {
    const eventType = String(raw?.eventType ?? raw?.event_type ?? '').trim();
    if (!ALLOWED_EVENT_TYPES.has(eventType)) return null;

    return {
      userId: this.normalizeUserId(raw?.userId ?? raw?.user_id ?? fallbackUserId),
      eventType,
      module: this.text(raw?.module),
      level: this.text(raw?.level, 20),
      lessonId: this.text(raw?.lessonId ?? raw?.lesson_id),
      topicId: this.text(raw?.topicId ?? raw?.topic_id),
      questionId: this.text(raw?.questionId ?? raw?.question_id),
      isCorrect: this.normalizeBoolean(raw?.isCorrect ?? raw?.is_correct),
      source: this.normalizeSource(raw?.source),
    };
  }

  async recordEvents(body: any, headers: Record<string, string | string[] | undefined>) {
    const headerUserRaw = headers['x-user-id'];
    const fallbackUserId = this.normalizeUserId(
      Array.isArray(headerUserRaw) ? headerUserRaw[0] : headerUserRaw,
    );

    const rawEvents = Array.isArray(body?.events)
      ? body.events
      : Array.isArray(body)
        ? body
        : [body];

    const events = rawEvents
      .map((raw: any) => this.normalizeEvent(raw, fallbackUserId))
      .filter((event: NormalizedEvent | null): event is NormalizedEvent => event !== null)
      .slice(0, 100);

    if (events.length === 0) {
      return { ok: true, inserted: 0 };
    }

    const values: any[] = [];
    const placeholders = events.map((event, index) => {
      const base = index * 9;
      values.push(
        event.userId,
        event.eventType,
        event.module,
        event.level,
        event.lessonId,
        event.topicId,
        event.questionId,
        event.isCorrect,
        event.source,
      );
      // user_id resolved via subquery so unknown/stale ids become NULL instead of FK errors
      return `((SELECT id FROM users WHERE id = $${base + 1}::uuid), $${base + 2}, $${base + 3}, $${base + 4}, $${base + 5}, $${base + 6}, $${base + 7}, $${base + 8}, $${base + 9})`;
    });

    try {
      await this.db.query(
        `INSERT INTO learning_events
           (user_id, event_type, module, level, lesson_id, topic_id, question_id, is_correct, source)
         VALUES ${placeholders.join(', ')}`,
        values,
      );
      return { ok: true, inserted: events.length };
    } catch (error: any) {
      throw new HttpException(error.message || 'Không thể ghi sự kiện học tập.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
