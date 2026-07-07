import { Module } from '@nestjs/common';
import { AdminV2LocalPreviewController } from './admin-v2-local-preview.controller';
import { AdminV2RealReadonlyService } from './admin-v2-real-readonly.service';

@Module({
  controllers: [AdminV2LocalPreviewController],
  providers: [AdminV2RealReadonlyService],
})
export class AdminV2LocalPreviewModule {}
