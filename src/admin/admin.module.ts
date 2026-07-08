import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminPlansController } from './admin-plans.controller';
import { AdminContentController } from './admin-content.controller';
import { AdminService } from './admin.service';
import { PaymentModule } from '../payment/payment.module';
import { ContentModule } from '../content/content.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [PaymentModule, ContentModule, AuthModule],
  controllers: [AdminController, AdminPlansController, AdminContentController],
  providers: [AdminService],
})
export class AdminModule {}
