import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'KETMAR — Partner Hub',
  description: 'Маркетинговая витрина и магазины на платформе KETMAR Partner Hub.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <div className="page-shell">
          <header className="site-header">
            <div className="logo">Powered by KETMAR</div>
            <nav>
              <Link href="/">Главная</Link>
              <Link href="/shops/atools">Витрина</Link>
              <Link href="/partner/">Partner Hub</Link>
            </nav>
          </header>
          <main className="page-content">{children}</main>
          <footer className="site-footer">Работает на платформе KETMAR</footer>
        </div>
      </body>
    </html>
  );
}
