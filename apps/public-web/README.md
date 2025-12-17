# Public Web (Next.js)

Next.js (App Router) storefront for public marketing pages and partner shops.

## Routes
- `/` — маркетинговая главная с CTA
- `/shops/[orgSlug]` — публичная витрина партнёра (SSR)

## Environment
- `PUBLIC_API_BASE` — базовый URL Partner API (по умолчанию `http://partner-api:3001` в docker)

## Scripts
- `npm run public-web:build`
- `npm run public-web:start`
- `nx run public-web:serve` для локального dev (`next dev` на порту 3002)
