import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { OrganizationPublicResponse } from '../../../packages/shared-types';
import { OrganizationsService } from './organizations.service';

@Controller('public/orgs')
export class PublicOrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Get(':slug')
  async getBySlug(@Param('slug') slug: string): Promise<OrganizationPublicResponse> {
    const organization = await this.organizationsService.findBySlug(slug);

    if (!organization) {
      throw new NotFoundException('Organization not found');
    }

    return {
      slug: organization.slug,
      name: organization.name,
      description: organization.description,
      contacts: organization.contacts,
      poweredBy: 'KETMAR'
    };
  }
}
