import { Module, Logger } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HealthController } from './health.controller';
import { defaultMongoUrl } from '../../packages/shared-config';

@Module({
  imports: [
    MongooseModule.forRoot(defaultMongoUrl, {
      serverSelectionTimeoutMS: 5000
    })
  ],
  controllers: [HealthController]
})
export class AppModule {
  constructor() {
    Logger.log(`Connected to MongoDB at ${defaultMongoUrl}`);
  }
}
