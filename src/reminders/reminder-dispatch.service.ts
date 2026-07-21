import { Injectable, Logger, OnApplicationBootstrap, OnModuleDestroy } from '@nestjs/common';

const VIETNAM_UTC_OFFSET_HOURS = 7;
const DEFAULT_DISPATCH_HOUR_VIETNAM = 7;

@Injectable()
export class ReminderDispatchService implements OnApplicationBootstrap, OnModuleDestroy {
  private readonly logger = new Logger(ReminderDispatchService.name);
  private timer: NodeJS.Timeout | null = null;
  private dispatching = false;

  onApplicationBootstrap() {
    if (!this.isEnabled()) {
      this.logger.log('Daily reminder dispatcher is disabled.');
      return;
    }

    const now = new Date();
    if (this.vietnamHour(now) >= this.dispatchHour()) {
      void this.dispatch('startup-catch-up');
    }
    this.scheduleNext();
  }

  onModuleDestroy() {
    if (this.timer) clearTimeout(this.timer);
    this.timer = null;
  }

  private isEnabled() {
    return process.env.REMINDER_DISPATCH_ENABLED === 'true'
      && Boolean(process.env.REMINDER_SERVICE_URL)
      && Boolean(process.env.REMINDER_SERVICE_SECRET);
  }

  private dispatchHour() {
    const value = Number(process.env.REMINDER_DISPATCH_HOUR_VIETNAM);
    return Number.isInteger(value) && value >= 0 && value <= 23
      ? value
      : DEFAULT_DISPATCH_HOUR_VIETNAM;
  }

  private vietnamHour(date: Date) {
    return (date.getUTCHours() + VIETNAM_UTC_OFFSET_HOURS) % 24;
  }

  private nextDispatchAt(now = new Date()) {
    const utcHour = (this.dispatchHour() - VIETNAM_UTC_OFFSET_HOURS + 24) % 24;
    const next = new Date(now);
    next.setUTCHours(utcHour, 0, 0, 0);
    if (next.getTime() <= now.getTime()) next.setUTCDate(next.getUTCDate() + 1);
    return next;
  }

  private scheduleNext() {
    const next = this.nextDispatchAt();
    const delay = Math.max(1000, next.getTime() - Date.now());
    this.logger.log(`Next daily reminder dispatch: ${next.toISOString()} (${this.dispatchHour()}:00 Asia/Ho_Chi_Minh).`);
    this.timer = setTimeout(async () => {
      try {
        await this.dispatch('daily-schedule');
      } finally {
        this.scheduleNext();
      }
    }, delay);
    this.timer.unref?.();
  }

  private async dispatch(reason: string) {
    if (this.dispatching) {
      this.logger.warn(`Skipped overlapping reminder dispatch (${reason}).`);
      return;
    }

    this.dispatching = true;
    try {
      const response = await fetch(String(process.env.REMINDER_SERVICE_URL), {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.REMINDER_SERVICE_SECRET}`,
          'Content-Type': 'application/json',
          'X-HuaMei-Trigger': reason,
        },
        body: JSON.stringify({ reason, requestedAt: new Date().toISOString() }),
        signal: AbortSignal.timeout(15000),
      });
      if (response.status !== 202 && !response.ok) {
        throw new Error(`Netlify reminder service returned HTTP ${response.status}.`);
      }
      this.logger.log(`Netlify accepted reminder dispatch (${reason}), HTTP ${response.status}.`);
    } catch (error) {
      this.logger.error(
        `Cannot trigger Netlify reminder service (${reason}): ${error instanceof Error ? error.message : String(error)}`,
      );
    } finally {
      this.dispatching = false;
    }
  }
}
