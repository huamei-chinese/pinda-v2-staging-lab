import { Controller, Get, Header } from '@nestjs/common';
import { ContentService } from './content.service';

@Controller('api/content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Get('hsk-locks')
  @Header('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
  @Header('Pragma', 'no-cache')
  @Header('Expires', '0')
  async getHskLocks() {
    const lessonLocks = await this.contentService.listPublicHskLocks();
    return { lessonLocks };
  }

  @Get('daily-locks')
  @Header('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
  @Header('Pragma', 'no-cache')
  @Header('Expires', '0')
  async getDailyLocks() {
    const themeLocks = await this.contentService.listPublicDailyLocks();
    const lockedThemeIds = themeLocks
      .filter((item) => item.lockedForFree && Number(item.freeItemLimit || 0) <= 0)
      .map((item) => item.themeId);
    return { lockedThemeIds, themeLocks };
  }

  @Get('hsk-level-covers')
  @Header('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
  @Header('Pragma', 'no-cache')
  @Header('Expires', '0')
  async getHskLevelCovers() {
    const covers = await this.contentService.listHskLevelCovers();
    return { covers };
  }

  @Get('access-rules')
  @Header('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
  @Header('Pragma', 'no-cache')
  @Header('Expires', '0')
  async getAccessRules() {
    return this.contentService.listPublicLearningAccessRules();
  }
}
