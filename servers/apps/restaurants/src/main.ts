import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as express from 'express';
import { restaurantModule } from './restaurants.module';

async function bootstrap() {
  const app =
    await NestFactory.create<NestExpressApplication>(restaurantModule);

  app.use(express.json({ limit: '50mb' }));
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'servers/email-templates'));
  app.setViewEngine('ejs');

  app.enableCors({
    origin: '*',
  });

  await app.listen(4002);
}
bootstrap();
