import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found">
      <h2>Витрина не найдена</h2>
      <p className="meta">Мы не смогли найти такую организацию. Проверьте ссылку или вернитесь на главную.</p>
      <div className="card-actions" style={{ justifyContent: 'center' }}>
        <Link className="secondary-button" href="/">
          На главную
        </Link>
        <Link className="secondary-button" href="/partner/">
          Открыть Partner Hub
        </Link>
      </div>
    </div>
  );
}
