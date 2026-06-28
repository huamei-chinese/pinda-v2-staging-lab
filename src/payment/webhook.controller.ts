import { Controller, Post, Body, Headers, HttpException, HttpStatus } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('api/webhooks')
export class WebhookController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('sepay')
  async handleSepay(
    @Body() body: any,
    @Headers('authorization') authorization?: string,
  ) {
    if (!this.paymentService.verifyWebhookAuthorization(authorization)) {
      throw new HttpException({ success: false, error: 'Unauthorized' }, HttpStatus.UNAUTHORIZED);
    }

    try {
      const result = await this.paymentService.handleSepayWebhook(body);
      return { success: true, ...result };
    } catch (error: any) {
      if (error instanceof HttpException) throw error;
      throw new HttpException(
        { success: false, error: error.message || 'Webhook processing failed' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
