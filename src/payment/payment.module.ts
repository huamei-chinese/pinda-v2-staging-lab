import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentPlansService } from './payment-plans.service';
import { PaymentController } from './payment.controller';
import { WebhookController } from './webhook.controller';

@Module({
  controllers: [PaymentController, WebhookController],
  providers: [PaymentService, PaymentPlansService],
  exports: [PaymentService, PaymentPlansService],
})
export class PaymentModule {}
