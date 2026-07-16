import { Body, Controller, Get, Headers, HttpCode, HttpStatus, Post, Query } from '@nestjs/common';
import { CoinsService } from './coins.service';

@Controller('api/coins')
export class CoinsController {
  constructor(private readonly coinsService: CoinsService) {}

  @Get('summary')
  async summary(@Headers() headers: Record<string, string | string[] | undefined>) {
    return this.coinsService.summary(headers);
  }

  @Post('claim')
  @HttpCode(HttpStatus.OK)
  async claim(
    @Body() body: any,
    @Headers() headers: Record<string, string | string[] | undefined>,
  ) {
    return this.coinsService.claim(headers, body);
  }

  @Get('leaderboard')
  async leaderboard(
    @Headers() headers: Record<string, string | string[] | undefined>,
    @Query('period') period?: string,
    @Query('limit') limit?: string,
  ) {
    return this.coinsService.leaderboard(headers, period, limit);
  }
}
