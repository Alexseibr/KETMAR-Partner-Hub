import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const apiTarget = process.env.PARTNER_API_TARGET ?? 'http://localhost:3001';

export default defineConfig({
  base: '/partner/',
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    proxy: {
      '/api/partner': {
        target: apiTarget,
        changeOrigin: true,
      },
    },
  },
});
