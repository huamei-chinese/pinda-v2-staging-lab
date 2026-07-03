import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { PaymentModule } from './payment/payment.module';
import { ContentModule } from './content/content.module';
import { ListeningModule } from './listening/listening.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.join(process.cwd(), 'public'),
      exclude: ['/api/(.*)'],
    }),
    DatabaseModule,
    AuthModule,
    AdminModule,
    PaymentModule,
    ContentModule,
    ListeningModule,
  ],
})
export class AppModule {}
