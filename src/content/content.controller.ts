import { Controller, Get } from '@nestjs/common';
import { ContentService } from './content.service';

@Controller('api/content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Get('hsk-locks')
  async getHskLocks() {
    const lessonLocks = await this.contentService.listPublicHskLocks();
    return { lessonLocks };
  }

  @Get('daily-locks')
  async getDailyLocks() {
    const themeLocks = await this.contentService.listPublicDailyLocks();
    const lockedThemeIds = themeLocks
      .filter((item) => item.lockedForFree && Number(item.freeItemLimit || 0) <= 0)
      .map((item) => item.themeId);
    return { lockedThemeIds, themeLocks };
  }

  @Get('hsk-level-covers')
  async getHskLevelCovers() {
    const covers = await this.contentService.listHskLevelCovers();
    return { covers };
  }
}
