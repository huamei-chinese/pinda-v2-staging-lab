import { Body, Controller, Post } from '@nestjs/common';
import { PronunciationAssessmentService } from './pronunciation-assessment.service';

@Controller('api/listening')
export class PronunciationAssessmentController {
  constructor(private readonly pronunciationAssessmentService: PronunciationAssessmentService) {}

  @Post('pronunciation-assessment')
  assess(@Body() body: { referenceText?: string; pinyin?: string; audioBase64?: string; mimeType?: string }) {
    return this.pronunciationAssessmentService.assess(body);
  }
}
