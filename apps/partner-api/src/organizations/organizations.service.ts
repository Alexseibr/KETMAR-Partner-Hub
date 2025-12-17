import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Organization, OrganizationDocument } from './organization.schema';

@Injectable()
export class OrganizationsService implements OnModuleInit {
  constructor(
    @InjectModel(Organization.name)
    private readonly organizationModel: Model<OrganizationDocument>
  ) {}

  async onModuleInit(): Promise<void> {
    await this.seedDefaultOrganization();
  }

  async findBySlug(slug: string): Promise<Organization | null> {
    return this.organizationModel.findOne({ slug }).lean().exec();
  }

  private async seedDefaultOrganization(): Promise<void> {
    const existingCount = await this.organizationModel.countDocuments().exec();
    if (existingCount > 0) {
      return;
    }

    await this.organizationModel.create({
      slug: 'atools',
      name: 'Atools',
      description: 'Онлайн-площадка цифровых инструментов и сервисов.',
      contacts: {
        phone: '+7 (900) 000-00-00',
        telegram: '@atools_support',
        address: 'Москва, ул. Примерная, 1'
      }
    });

    Logger.log('Seeded default organization "atools"');
  }
}
