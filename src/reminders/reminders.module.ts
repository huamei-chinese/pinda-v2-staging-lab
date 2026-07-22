import { Module } from '@nestjs/common';
import { ReminderDispatchService } from './reminder-dispatch.service';
import { ReminderReportsController } from './reminder-reports.controller';
import { ReminderReportsService } from './reminder-reports.service';
import { ReminderRulesController } from './reminder-rules.controller';
import { ReminderRulesService } from './reminder-rules.service';

@Module({
  controllers: [ReminderRulesController, ReminderReportsController],
  providers: [ReminderDispatchService, ReminderRulesService, ReminderReportsService],
})
export class RemindersModule {}
