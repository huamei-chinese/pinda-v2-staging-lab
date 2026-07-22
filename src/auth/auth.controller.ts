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
    const ref = String(body.ref || '').trim();
    const src = String(body.src || '').trim();
    return this.authService.register(fullName, email, password, ref, src);
  }

  @Post('login')
  async login(@Body() body: any) {
    const email = String(body.email || '').trim().toLowerCase();
    const password = String(body.password || '');
    return this.authService.login(email, password);
  }

  @Get('auth/firebase-config')
  firebaseConfig() {
    return this.authService.firebaseConfig();
  }

  @Post('auth/firebase-session')
  async syncFirebaseSession(
    @Body() body: any,
    @Headers() headers: Record<string, string | string[] | undefined>,
  ) {
    return this.authService.syncFirebaseSession(body, headers);
  }

  @Post('auth/firebase-can-register')
  async canRegisterFirebase(@Body() body: any) {
    const email = String(body.email || '').trim().toLowerCase();
    return this.authService.canRegisterFirebase(email);
  }

  @Post('auth/firebase-migrate')
  async migrateLegacyUserToFirebase(@Body() body: any) {
    const email = String(body.email || '').trim().toLowerCase();
    const password = String(body.password || '');
    return this.authService.migrateLegacyUserToFirebase(email, password);
  }

  @Post('password-reset/request')
  async requestPasswordReset(@Body() body: any) {
    const email = String(body.email || '').trim().toLowerCase();
    return this.authService.requestPasswordReset(email);
  }

  @Post('password-reset/verify')
  async verifyPasswordResetCode(@Body() body: any) {
    const email = String(body.email || '').trim().toLowerCase();
    const code = String(body.code || '');
    return this.authService.verifyPasswordResetCode(email, code);
  }

  @Post('password-reset/confirm')
  async confirmPasswordReset(@Body() body: any) {
    const email = String(body.email || '').trim().toLowerCase();
    const code = String(body.code || '');
    const newPassword = String(body.newPassword || body.password || '');
    const confirmPassword = String(body.confirmPassword || '');
    return this.authService.confirmPasswordReset(email, code, newPassword, confirmPassword);
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

  @Patch('users/:id/study-reminder-settings')
  async updateOwnStudyReminderSettings(
    @Param('id') id: string,
    @Body() body: any,
    @Headers() headers: Record<string, string | string[] | undefined>,
  ) {
    return this.authService.updateOwnStudyReminderSettings(id, body, headers);
  }
}
