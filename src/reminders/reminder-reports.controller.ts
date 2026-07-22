import { Controller, Get, Headers, Param, Query } from '@nestjs/common';
import { ReminderReportsService } from './reminder-reports.service';

@Controller('api/admin/reminder-reports')
export class ReminderReportsController {
  constructor(private readonly reportsService: ReminderReportsService) {}

  @Get()
  listReports(
    @Query('limit') limit: string | undefined,
    @Headers() headers: Record<string, string | string[] | undefined>,
  ) {
    return this.reportsService.listReports(limit, headers);
  }

  @Get(':dispatchId')
  getReport(
    @Param('dispatchId') dispatchId: string,
    @Headers() headers: Record<string, string | string[] | undefined>,
  ) {
    return this.reportsService.getReport(dispatchId, headers);
  }
}
