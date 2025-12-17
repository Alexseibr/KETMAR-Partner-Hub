import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { apiPrefix, partnerApiPort } from '../../packages/shared-config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: ['log', 'error', 'warn'] });
  app.setGlobalPrefix(apiPrefix.replace(/^\//, ''));
  await app.listen(partnerApiPort, '0.0.0.0');
  Logger.log(`Partner API listening on ${partnerApiPort} with prefix ${apiPrefix}`);
}
bootstrap();
