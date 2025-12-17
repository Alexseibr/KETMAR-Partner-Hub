import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Organization, OrganizationSchema } from './organization.schema';
import { OrganizationsService } from './organizations.service';
import { PublicOrganizationsController } from './public-organizations.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Organization.name, schema: OrganizationSchema }])],
  providers: [OrganizationsService],
  controllers: [PublicOrganizationsController]
})
export class OrganizationsModule {}
