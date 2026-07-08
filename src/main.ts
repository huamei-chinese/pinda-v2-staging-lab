import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json, urlencoded } from 'express';
import * as fs from 'fs';
import * as path from 'path';

function loadEnvFile() {
  const envPath = path.join(process.cwd(), '.env');
  if (!fs.existsSync(envPath)) return;

  const lines = fs.readFileSync(envPath, 'utf8').split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    const equalsIndex = trimmed.indexOf('=');
    if (equalsIndex === -1) continue;

    const key = trimmed.slice(0, equalsIndex).trim();
    let value = trimmed.slice(equalsIndex + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (key && process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

async function bootstrap() {
  // Load environment variables before initializing the app
  loadEnvFile();

  const app = await NestFactory.create(AppModule, { bodyParser: false });
  app.use(json({ limit: '30mb' }));
  app.use(urlencoded({ extended: true, limit: '30mb' }));
  app.use('/admin', (req: any, res: any, next: any) => {
    if (req.method !== 'GET') return next();
    return res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
  });

  // Enable CORS for frontend API calls
  app.enableCors();

  const port = process.env.PORT || 4173;
  await app.listen(port);
  console.log(`Listening on http://localhost:${port}`);
}
bootstrap();
