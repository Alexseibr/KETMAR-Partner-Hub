import Link from 'next/link';

export default function MarketingPage() {
  return (
    <div className="marketing">
      <section className="hero">
        <h1>Единая платформа для партнёров и доставки</h1>
        <p>
          KETMAR Partner Hub объединяет магазины, партнёров и курьеров в одном месте. Запускайте витрины,
          управляйте командами и растите быстрее.
        </p>
        <Link className="cta-button" href="/partner/">
          Открыть Partner Hub →
        </Link>
      </section>

      <section className="section">
        <h2>Почему KETMAR?</h2>
        <p className="meta">
          Быстрый старт, прозрачная аналитика и готовые витрины. Мы берём на себя инфраструктуру, чтобы вы могли
          сосредоточиться на развитии бизнеса.
        </p>
        <div className="card-actions">
          <Link className="secondary-button" href="/shops/atools">
            Посмотреть витрину Atools
          </Link>
          <Link className="secondary-button" href="/courier/">
            Курьерский портал
          </Link>
        </div>
      </section>
    </div>
  );
}
