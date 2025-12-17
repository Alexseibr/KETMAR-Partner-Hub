# KETMAR Partner Hub

Day 1 bootstrap for the KETMAR Partner Hub monorepo built with Nx, NestJS, React (Vite), MongoDB, and Docker.

## Структура
- `apps/partner-api` — NestJS сервис Partner API (`/api/partner`).
- `apps/partner-web` — Vite/React фронтенд для партнёров (`/partner`).
- `apps/courier-web` — Vite/React фронтенд для курьеров (`/courier`).
- `packages/shared-*` — общие пакеты (auth, types, config).
- `infra/nginx` — конфигурация nginx реверс-прокси.

## Быстрый старт (локально)
1. Установите зависимости (`npm install`).
2. Запустите все приложения: `npm run dev`.
3. Откройте:
   - http://localhost/partner/
   - http://localhost/courier/
   - http://localhost/api/partner/health

## Docker Compose
1. Собрать и поднять стек: `npm run docker:up`.
2. Остановить: `npm run docker:down`.

### Порты и маршруты
- partner-api: `3001`, маршрут `/api/partner/health`.
- partner-web: `5173`, доступ через `/partner/` (nginx делает redirect с `/partner`).
- courier-web: `5174`, доступ через `/courier/` (redirect с `/courier`).
- MongoDB: `mongo` сервис с volume `mongo-data`.

## Проверки
- Health чек: `curl http://localhost/api/partner/health`.
- UI с брендингом: header "Powered by KETMAR", footer "Работает на платформе KETMAR".
