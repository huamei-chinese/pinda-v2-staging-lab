import { Body, Controller, Get, Headers, Put } from '@nestjs/common';
import { ReminderRulesService } from './reminder-rules.service';

@Controller('api/admin/reminder-rules')
export class ReminderRulesController {
  constructor(private readonly rulesService: ReminderRulesService) {}

  @Get()
  getRules(@Headers() headers: Record<string, string | string[] | undefined>) {
    return this.rulesService.getAdminRules(headers);
  }

  @Put()
  updateRules(
    @Body() body: any,
    @Headers() headers: Record<string, string | string[] | undefined>,
  ) {
    return this.rulesService.updateAdminRules(body, headers);
  }
}
