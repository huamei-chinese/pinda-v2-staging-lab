import { Controller, Get, Put, Body, Headers, Header } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('api/admin/content')
export class AdminContentController {
  constructor(private readonly adminService: AdminService) {}

  @Get('hsk-locks')
  @Header('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
  @Header('Pragma', 'no-cache')
  @Header('Expires', '0')
  async getHskLocks(@Headers() headers: Record<string, string>) {
    return this.adminService.getHskLessonLocks(headers);
  }

  @Put('hsk-locks')
  @Header('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
  async saveHskLocks(@Body() body: any, @Headers() headers: Record<string, string>) {
    return this.adminService.saveHskLessonLocks(body, headers);
  }

  @Get('daily-locks')
  @Header('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
  @Header('Pragma', 'no-cache')
  @Header('Expires', '0')
  async getDailyLocks(@Headers() headers: Record<string, string>) {
    return this.adminService.getDailyThemeLocks(headers);
  }

  @Put('daily-locks')
  @Header('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
  async saveDailyLocks(@Body() body: any, @Headers() headers: Record<string, string>) {
    return this.adminService.saveDailyThemeLocks(body, headers);
  }

  @Get('hsk-level-covers')
  @Header('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
  @Header('Pragma', 'no-cache')
  @Header('Expires', '0')
  async getHskLevelCovers(@Headers() headers: Record<string, string>) {
    return this.adminService.getHskLevelCovers(headers);
  }

  @Put('hsk-level-covers')
  @Header('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
  async saveHskLevelCovers(@Body() body: any, @Headers() headers: Record<string, string>) {
    return this.adminService.saveHskLevelCovers(body, headers);
  }

  @Get('listening-locks')
  @Header('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
  @Header('Pragma', 'no-cache')
  @Header('Expires', '0')
  async getListeningLocks(@Headers() headers: Record<string, string>) {
    return this.adminService.getListeningLocks(headers);
  }

  @Put('listening-locks')
  @Header('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
  async saveListeningLocks(@Body() body: any, @Headers() headers: Record<string, string>) {
    return this.adminService.saveListeningLocks(body, headers);
  }
}
