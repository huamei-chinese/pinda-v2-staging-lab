import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { PaymentModule } from './payment/payment.module';
import { ContentModule } from './content/content.module';
import { ListeningModule } from './listening/listening.module';
import { EventsModule } from './events/events.module';
import { AdminV2LocalPreviewModule } from './admin-v2-local-preview/admin-v2-local-preview.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.join(process.cwd(), 'public'),
      exclude: ['/api/*path'],
    }),
    DatabaseModule,
    AuthModule,
    AdminModule,
    PaymentModule,
    ContentModule,
    ListeningModule,
    EventsModule,
    AdminV2LocalPreviewModule,
  ],
})
export class AppModule {}
