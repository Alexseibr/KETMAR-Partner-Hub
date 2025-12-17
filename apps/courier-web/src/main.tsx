import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { HealthResponse } from '../../packages/shared-types';

const App = () => {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetch('/api/partner/health')
      .then((res) => res.json())
      .then((data) => setHealth(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '1.5rem' }}>
      <header style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Powered by KETMAR</header>
      <h1>Courier Hub</h1>
      <p>Очередь задач: пока пусто</p>
      <section style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', maxWidth: '480px' }}>
        <h2>Partner API check</h2>
        {health ? (
          <ul>
            <li>ok: {health.ok ? 'true' : 'false'}</li>
            <li>service: {health.service}</li>
            <li>ts: {health.ts}</li>
          </ul>
        ) : error ? (
          <p style={{ color: 'red' }}>Error: {error}</p>
        ) : (
          <p>Loading...</p>
        )}
      </section>
      <footer style={{ marginTop: '2rem', color: '#555' }}>Работает на платформе KETMAR</footer>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />);
