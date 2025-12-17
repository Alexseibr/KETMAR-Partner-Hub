export interface HealthResponse {
  ok: boolean;
  service: string;
  ts: string;
}

export interface OrganizationContacts {
  phone?: string;
  telegram?: string;
  address?: string;
}

export interface OrganizationPublicResponse {
  slug: string;
  name: string;
  description?: string;
  contacts?: OrganizationContacts;
  poweredBy: 'KETMAR';
}
