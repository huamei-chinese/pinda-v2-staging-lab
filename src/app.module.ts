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
import { CoinsModule } from './coins/coins.module';
import { AdminV2LocalPreviewModule } from './admin-v2-local-preview/admin-v2-local-preview.module';
import { RemindersModule } from './reminders/reminders.module';

const NO_STORE_CACHE_CONTROL = 'no-store, no-cache, must-revalidate, proxy-revalidate';
const LONG_LIVED_STATIC_CACHE_CONTROL = 'public, max-age=31536000, immutable';
const SHORT_LIVED_RUNTIME_CACHE_CONTROL = 'public, max-age=0, must-revalidate';

function setNoStoreHeaders(res: any) {
  res.setHeader('Cache-Control', NO_STORE_CACHE_CONTROL);
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
}

function setLongLivedStaticHeaders(res: any) {
  res.setHeader('Cache-Control', LONG_LIVED_STATIC_CACHE_CONTROL);
}

function setShortLivedRuntimeHeaders(res: any) {
  res.setHeader('Cache-Control', SHORT_LIVED_RUNTIME_CACHE_CONTROL);
}

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.join(process.cwd(), 'public'),
      exclude: ['/api/*path'],
      serveStaticOptions: {
        setHeaders: (res, filePath) => {
          const fileName = path.basename(filePath).toLowerCase();
          if (fileName === 'asset-config.js' || /\.html$/i.test(filePath)) {
            setNoStoreHeaders(res);
            return;
          }

          if (['app.js', 'styles.css', 'subscriptions.js', 'admin-v2.js'].includes(fileName)) {
            setShortLivedRuntimeHeaders(res);
            return;
          }

          if (/\.(?:js|css|json|png|jpe?g|webp|svg|mp3|wav|ogg|ttf|woff2?)$/i.test(filePath)) {
            setLongLivedStaticHeaders(res);
          }
        },
      },
    }),
    DatabaseModule,
    AuthModule,
    AdminModule,
    PaymentModule,
    ContentModule,
    ListeningModule,
    EventsModule,
    CoinsModule,
    AdminV2LocalPreviewModule,
    RemindersModule,
  ],
})
export class AppModule {}
