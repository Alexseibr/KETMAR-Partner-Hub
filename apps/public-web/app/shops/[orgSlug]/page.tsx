import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { fetchOrganization } from '../../../lib/organizations';

interface PageProps {
  params: { orgSlug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const organization = await fetchOrganization(params.orgSlug);

  if (!organization) {
    return {
      title: 'Магазин не найден — KETMAR'
    };
  }

  return {
    title: `${organization.name} — магазин на KETMAR`,
    description: organization.description
  };
}

export default async function ShopPage({ params }: PageProps) {
  const organization = await fetchOrganization(params.orgSlug);

  if (!organization) {
    notFound();
  }

  const hasContacts = Boolean(
    organization.contacts &&
      (organization.contacts.phone || organization.contacts.telegram || organization.contacts.address)
  );

  return (
    <div className="section">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
        <div>
          <h1 style={{ margin: '0 0 8px' }}>{organization.name}</h1>
          <p className="meta">{organization.description}</p>
          <div style={{ marginTop: 12 }}>
            <span className="badge">Storefront</span>
            <span className="badge">SSR</span>
          </div>
        </div>
        <Link className="cta-button" href="/partner/">
          Перейти в KETMAR
        </Link>
      </div>

      {hasContacts && organization.contacts && (
        <div style={{ marginTop: 24 }}>
          <h3>Контакты</h3>
          <ul className="contact-list">
            {organization.contacts.phone && (
              <li>
                <strong>Телефон:</strong> <span>{organization.contacts.phone}</span>
              </li>
            )}
            {organization.contacts.telegram && (
              <li>
                <strong>Telegram:</strong> <span>{organization.contacts.telegram}</span>
              </li>
            )}
            {organization.contacts.address && (
              <li>
                <strong>Адрес:</strong> <span>{organization.contacts.address}</span>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
