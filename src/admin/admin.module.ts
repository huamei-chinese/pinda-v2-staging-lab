import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminPlansController } from './admin-plans.controller';
import { AdminContentController } from './admin-content.controller';
import { AdminAnalyticsController } from './admin-analytics.controller';
import { AdminVipController } from './admin-vip.controller';
import { AdminStudyRemindersController } from './admin-study-reminders.controller';
import { AdminService } from './admin.service';
import { StudyReminderService } from './study-reminder.service';
import { PaymentModule } from '../payment/payment.module';
import { ContentModule } from '../content/content.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [PaymentModule, ContentModule, AuthModule],
  controllers: [AdminController, AdminPlansController, AdminContentController, AdminAnalyticsController, AdminVipController, AdminStudyRemindersController],
  providers: [AdminService, StudyReminderService],
})
export class AdminModule {}
