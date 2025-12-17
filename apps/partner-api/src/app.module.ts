import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HealthController } from './health.controller';

const mongoUrl = process.env.MONGO_URL ?? 'mongodb://mongo:27017/ketmar_partner_hub';

@Module({
  imports: [
    MongooseModule.forRoot(mongoUrl, {
      serverSelectionTimeoutMS: 5000,
    }),
  ],
  controllers: [HealthController],
})
export class AppModule {
  constructor() {
    console.log(`Connecting to MongoDB at ${mongoUrl}`);
  }
}
