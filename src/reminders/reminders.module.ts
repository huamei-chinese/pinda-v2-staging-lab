import { Module } from '@nestjs/common';
import { ReminderDispatchService } from './reminder-dispatch.service';

@Module({
  providers: [ReminderDispatchService],
})
export class RemindersModule {}
