import { Module, Logger } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HealthController } from './health.controller';
import { defaultMongoUrl } from '../../packages/shared-config';
import { OrganizationsModule } from './organizations/organizations.module';

@Module({
  imports: [
    MongooseModule.forRoot(defaultMongoUrl, {
      serverSelectionTimeoutMS: 5000
    }),
    OrganizationsModule
  ],
  controllers: [HealthController]
})
export class AppModule {
  constructor() {
    Logger.log(`Connected to MongoDB at ${defaultMongoUrl}`);
  }
}
