import { Module } from '@nestjs/common';
import { ListeningController } from './listening.controller';
import { PronunciationAssessmentController } from './pronunciation-assessment.controller';
import { PronunciationAssessmentService } from './pronunciation-assessment.service';
import { RealtimePronunciationService } from './realtime-pronunciation.service';

@Module({
  controllers: [ListeningController, PronunciationAssessmentController],
  providers: [PronunciationAssessmentService, RealtimePronunciationService],
})
export class ListeningModule {}
