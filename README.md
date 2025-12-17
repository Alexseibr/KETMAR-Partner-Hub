# KETMAR Partner Hub

Day 1 bootstrap for Partner Hub monorepo powered by Nx. Partner and Courier hubs are Vite SPAs, partner-api is NestJS. MongoDB is used as the backing database.

## Apps
- `apps/partner-api` — NestJS API served under `/api/partner`
- `apps/partner-web` — Partner web SPA (Vite)
- `apps/courier-web` — Courier web SPA (Vite)
- `apps/public-web` — placeholder for future Next.js storefront (will be implemented on Day 2)

## Packages
- `packages/shared-auth`
- `packages/shared-types`
- `packages/shared-config`

## Getting started
Install dependencies (npm is the default package manager):

```bash
npm install
```

### Local development
Run API and both SPAs in parallel:

```bash
npm run dev
```

Health check URL: `http://localhost:3001/api/partner/health`

Frontends (when proxied through nginx/docker):
- Partner: `http://localhost/partner/`
- Courier: `http://localhost/courier/`

### Docker workflow
Build and start the stack:

```bash
npm run docker:up
```

Stop containers:

```bash
npm run docker:down
```

Exposed endpoints via nginx:
- Partner web: http://localhost/partner/
- Courier web: http://localhost/courier/
- Partner API health: http://localhost/api/partner/health

> Note: apps/public-web is reserved for a future Next.js storefront.
