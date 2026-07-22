import { Body, Controller, Get, Headers, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { StudyReminderService } from './study-reminder.service';

@Controller('api/admin')
export class AdminStudyRemindersController {
  constructor(private readonly studyReminders: StudyReminderService) {}

  @Get('reminder-rules')
  getRules(@Headers() headers: Record<string, string | string[] | undefined>) {
    return this.studyReminders.getRules(headers);
  }

  @Put('reminder-rules')
  updateRules(
    @Headers() headers: Record<string, string | string[] | undefined>,
    @Body() body: Record<string, unknown>,
  ) {
    return this.studyReminders.updateRules(headers, body);
  }

  @Get('reminder-reports')
  getReports(
    @Headers() headers: Record<string, string | string[] | undefined>,
    @Query('limit') limit?: string,
  ) {
    return this.studyReminders.getReports(headers, limit);
  }

  @Get('reminder-reports/:dispatchId')
  getReport(
    @Headers() headers: Record<string, string | string[] | undefined>,
    @Param('dispatchId') dispatchId: string,
  ) {
    return this.studyReminders.getReport(headers, dispatchId);
  }

  @Post('reminder-dispatches')
  @HttpCode(HttpStatus.ACCEPTED)
  dispatchNow(@Headers() headers: Record<string, string | string[] | undefined>) {
    return this.studyReminders.dispatchNow(headers);
  }
}
