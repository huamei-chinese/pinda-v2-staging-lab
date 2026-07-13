import { Controller, Get, Put, Body, Headers } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('api/admin/content')
export class AdminContentController {
  constructor(private readonly adminService: AdminService) {}

  @Get('hsk-locks')
  async getHskLocks(@Headers() headers: Record<string, string>) {
    return this.adminService.getHskLessonLocks(headers);
  }

  @Put('hsk-locks')
  async saveHskLocks(@Body() body: any, @Headers() headers: Record<string, string>) {
    return this.adminService.saveHskLessonLocks(body, headers);
  }

  @Get('daily-locks')
  async getDailyLocks(@Headers() headers: Record<string, string>) {
    return this.adminService.getDailyThemeLocks(headers);
  }

  @Put('daily-locks')
  async saveDailyLocks(@Body() body: any, @Headers() headers: Record<string, string>) {
    return this.adminService.saveDailyThemeLocks(body, headers);
  }

  @Get('hsk-level-covers')
  async getHskLevelCovers(@Headers() headers: Record<string, string>) {
    return this.adminService.getHskLevelCovers(headers);
  }

  @Put('hsk-level-covers')
  async saveHskLevelCovers(@Body() body: any, @Headers() headers: Record<string, string>) {
    return this.adminService.saveHskLevelCovers(body, headers);
  }

  @Get('listening-locks')
  async getListeningLocks(@Headers() headers: Record<string, string>) {
    return this.adminService.getListeningLocks(headers);
  }

  @Put('listening-locks')
  async saveListeningLocks(@Body() body: any, @Headers() headers: Record<string, string>) {
    return this.adminService.saveListeningLocks(body, headers);
  }
}
