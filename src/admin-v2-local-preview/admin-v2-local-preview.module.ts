import { Module } from '@nestjs/common';
import { AdminV2LocalPreviewController } from './admin-v2-local-preview.controller';

@Module({
  controllers: [AdminV2LocalPreviewController],
})
export class AdminV2LocalPreviewModule {}
