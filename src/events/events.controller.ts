import { Controller, Post, Body, Headers, HttpCode, HttpStatus } from '@nestjs/common';
import { EventsService } from './events.service';

@Controller('api/events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  @HttpCode(HttpStatus.ACCEPTED)
  async record(
    @Body() body: any,
    @Headers() headers: Record<string, string | string[] | undefined>,
  ) {
    return this.eventsService.recordEvents(body, headers);
  }
}
