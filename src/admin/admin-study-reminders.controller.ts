import { Body, Controller, Get, Headers, Param, Post, Put } from '@nestjs/common';
import { StudyReminderService } from './study-reminder.service';

@Controller('api/admin/study-reminders')
export class AdminStudyRemindersController {
  constructor(private readonly studyReminders: StudyReminderService) {}

  @Get('overview')
  getOverview(@Headers() headers: Record<string, string | string[] | undefined>) {
    return this.studyReminders.getOverview(headers);
  }

  @Put('settings')
  updateSettings(
    @Headers() headers: Record<string, string | string[] | undefined>,
    @Body() body: Record<string, unknown>,
  ) {
    return this.studyReminders.updateSettings(headers, body);
  }

  @Post('send/:userId')
  sendOne(
    @Headers() headers: Record<string, string | string[] | undefined>,
    @Param('userId') userId: string,
  ) {
    return this.studyReminders.sendOne(headers, userId, 'manual');
  }

  @Post('run')
  runBatch(
    @Headers() headers: Record<string, string | string[] | undefined>,
    @Body() body: { dryRun?: boolean },
  ) {
    return this.studyReminders.runBatch(headers, body?.dryRun !== false);
  }
}
