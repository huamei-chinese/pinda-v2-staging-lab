import { Controller, Post, Get, Body, Param, Query, HttpException, HttpStatus } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('api/payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Get('plans')
  listPlans() {
    return this.paymentService.listPlans();
  }

  @Post('orders')
  createOrder(@Body() body: any) {
    const userId = String(body.userId || '').trim();
    const email = String(body.email || '').trim().toLowerCase();
    const planId = String(body.planId || '').trim();
    if (!userId || !email || !planId) {
      throw new HttpException({ error: 'Thiếu thông tin tạo đơn thanh toán.' }, HttpStatus.BAD_REQUEST);
    }
    return this.paymentService.createOrder(userId, email, planId);
  }

  @Get('orders/:orderId/status')
  getOrderStatus(
    @Param('orderId') orderId: string,
    @Query('userId') userId?: string,
  ) {
    return this.paymentService.getOrderStatus(orderId, userId || undefined);
  }
}
