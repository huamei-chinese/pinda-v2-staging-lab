import { Controller, Get, Post, Patch, Body, Param, Headers } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('api')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() body: any) {
    const fullName = String(body.fullName || body.name || '').trim();
    const email = String(body.email || '').trim().toLowerCase();
    const password = String(body.password || '');
    return this.authService.register(fullName, email, password);
  }

  @Post('login')
  async login(@Body() body: any) {
    const email = String(body.email || '').trim().toLowerCase();
    const password = String(body.password || '');
    return this.authService.login(email, password);
  }

  @Get('users/:id/status')
  async getCurrentUser(
    @Param('id') id: string,
    @Headers() headers: Record<string, string | string[] | undefined>,
  ) {
    return this.authService.getCurrentUser(id, headers);
  }

  @Patch('users/:id/profile')
  async updateOwnProfile(
    @Param('id') id: string,
    @Body() body: any,
    @Headers() headers: Record<string, string | string[] | undefined>,
  ) {
    return this.authService.updateOwnProfile(id, body, headers);
  }

  @Patch('users/:id/avatar')
  async updateOwnAvatar(
    @Param('id') id: string,
    @Body() body: any,
    @Headers() headers: Record<string, string | string[] | undefined>,
  ) {
    return this.authService.updateOwnAvatar(id, body, headers);
  }

  @Patch('users/:id/password')
  async changeOwnPassword(
    @Param('id') id: string,
    @Body() body: any,
    @Headers() headers: Record<string, string | string[] | undefined>,
  ) {
    return this.authService.changeOwnPassword(id, body, headers);
  }

  @Post('users/:id/email-verification/send')
  async sendEmailVerificationCode(
    @Param('id') id: string,
    @Headers() headers: Record<string, string | string[] | undefined>,
  ) {
    return this.authService.sendEmailVerificationCode(id, headers);
  }

  @Post('users/:id/email-verification/confirm')
  async confirmEmailVerificationCode(
    @Param('id') id: string,
    @Body() body: any,
    @Headers() headers: Record<string, string | string[] | undefined>,
  ) {
    return this.authService.confirmEmailVerificationCode(id, body, headers);
  }

  @Patch('users/:id/reminder-settings')
  async updateOwnReminderSettings(
    @Param('id') id: string,
    @Body() body: any,
    @Headers() headers: Record<string, string | string[] | undefined>,
  ) {
    return this.authService.updateOwnReminderSettings(id, body, headers);
  }
}
