import { Controller, Get, NotFoundException, Param, Res } from '@nestjs/common';
import type { Response } from 'express';
import * as fs from 'fs';
import * as path from 'path';

@Controller('listening-app')
export class ListeningController {
  private readonly listeningRoot = path.join(process.cwd(), 'public', 'listening-app');

  @Get()
  showHome(@Res() res: Response) {
    return this.sendListeningFile(res, 'listening.html');
  }

  @Get('listening')
  showListeningDashboard(@Res() res: Response) {
    return this.sendListeningFile(res, 'listening.html');
  }

  @Get('listening/:episodeId')
  showListeningEpisode(@Param('episodeId') episodeId: string, @Res() res: Response) {
    return this.sendEpisodeFile(res, 'listening', episodeId);
  }

  @Get('typing')
  showTypingDashboard(@Res() res: Response) {
    return this.sendListeningFile(res, 'typing.html');
  }

  @Get('typing/:episodeId')
  showTypingEpisode(@Param('episodeId') episodeId: string, @Res() res: Response) {
    return this.sendEpisodeFile(res, 'typing', episodeId);
  }

  @Get('review')
  showReview(@Res() res: Response) {
    return this.sendListeningFile(res, 'review.html');
  }

  @Get('favorites')
  showFavorites(@Res() res: Response) {
    return this.sendListeningFile(res, 'favorites.html');
  }

  @Get('member')
  showMember(@Res() res: Response) {
    return this.sendListeningFile(res, 'member.html');
  }

  private sendEpisodeFile(res: Response, folder: 'listening' | 'typing', episodeId: string) {
    if (!/^ep-\d{3}$/.test(episodeId)) {
      throw new NotFoundException('Listening episode not found');
    }

    return this.sendListeningFile(res, folder, `${episodeId}.html`);
  }

  private sendListeningFile(res: Response, ...segments: string[]) {
    const filePath = path.resolve(this.listeningRoot, ...segments);
    const relativePath = path.relative(this.listeningRoot, filePath);
    const isOutsideListeningRoot = relativePath.startsWith('..') || path.isAbsolute(relativePath);

    if (isOutsideListeningRoot || !fs.existsSync(filePath)) {
      throw new NotFoundException('Listening page not found');
    }

    if (/\.html$/i.test(filePath)) {
      res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
    }

    return res.sendFile(filePath);
  }
}
