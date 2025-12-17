import React, { useEffect, useState } from 'react';
import type { PartnerHealth } from '@ketmar/shared-types';

function App() {
  const [health, setHealth] = useState<PartnerHealth | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/partner/health')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }
        return res.json();
      })
      .then((json: PartnerHealth) => setHealth(json))
      .catch((err: Error) => setError(err.message));
  }, []);

  return (
    <div className="page">
      <header className="banner">Powered by KETMAR</header>
      <main>
        <h1>Courier</h1>
        <section className="card">
          <h2>Очередь задач</h2>
          <p>пока пусто</p>
        </section>
        <section className="card">
          <h3>Проверка связи с Partner API</h3>
          {health && <pre>{JSON.stringify(health, null, 2)}</pre>}
          {error && <p className="error">Ошибка: {error}</p>}
          {!health && !error && <p>Загрузка...</p>}
        </section>
      </main>
      <footer className="footer">Работает на платформе KETMAR</footer>
    </div>
  );
}

export default App;
