import { Controller, Get, Post, Patch, Delete, Body, Param, Headers } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('api/admin/plans')
export class AdminPlansController {
  constructor(private readonly adminService: AdminService) {}

  @Get('stats')
  async getPlanStats(@Headers() headers: Record<string, string>) {
    return this.adminService.getPlanStats(headers);
  }

  @Get()
  async getAllPlans(@Headers() headers: Record<string, string>) {
    return this.adminService.getAllPlans(headers);
  }

  @Post()
  async createPlan(@Body() body: any, @Headers() headers: Record<string, string>) {
    return this.adminService.createPlan(body, headers);
  }

  @Patch(':id')
  async updatePlan(
    @Param('id') id: string,
    @Body() body: any,
    @Headers() headers: Record<string, string>,
  ) {
    return this.adminService.updatePlan(id, body, headers);
  }

  @Delete(':id')
  async deletePlan(@Param('id') id: string, @Headers() headers: Record<string, string>) {
    return this.adminService.deletePlan(id, headers);
  }
}
