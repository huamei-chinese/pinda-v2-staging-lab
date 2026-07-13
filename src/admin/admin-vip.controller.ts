import { Controller, Get, Query, Headers } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('api/admin/vip')
export class AdminVipController {
  constructor(private readonly adminService: AdminService) {}

  @Get('overview')
  async getOverview(
    @Query('days') days: string,
    @Query('from') from: string,
    @Query('to') to: string,
    @Headers() headers: Record<string, string | string[] | undefined>,
  ) {
    return this.adminService.getVipManagement(headers, { days, from, to });
  }
}
