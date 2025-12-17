import 'server-only';
import { cache } from 'react';
import { OrganizationPublicResponse } from '../../packages/shared-types';

const defaultBase =
  process.env.PUBLIC_API_BASE ||
  (process.env.NODE_ENV === 'production' ? 'http://partner-api:3001' : 'http://localhost:3001');
const apiBase = defaultBase.replace(/\/$/, '');

export const fetchOrganization = cache(async (slug: string): Promise<OrganizationPublicResponse | null> => {
  const response = await fetch(`${apiBase}/api/partner/public/orgs/${slug}`, {
    next: { revalidate: 60 }
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(`Failed to fetch organization ${slug}: ${response.statusText}`);
  }

  return response.json();
});
