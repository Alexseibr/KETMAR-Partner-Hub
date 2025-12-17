# Install dependencies
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json tsconfig.base.json nx.json ./
COPY apps apps
COPY packages packages
RUN npm install --no-package-lock

# Build Next.js app
FROM node:20-alpine AS builder
WORKDIR /app
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps ./apps
COPY --from=deps /app/packages ./packages
COPY --from=deps /app/package.json ./
COPY --from=deps /app/tsconfig.base.json ./
COPY --from=deps /app/nx.json ./
RUN npm run public-web:build

# Production runner
FROM node:20-alpine AS runner
WORKDIR /app/standalone
ENV NODE_ENV=production
ENV PORT=3002
COPY --from=builder /app/apps/public-web/.next/standalone ./
COPY --from=builder /app/apps/public-web/.next/static ./apps/public-web/.next/static
COPY --from=builder /app/apps/public-web/public ./apps/public-web/public
EXPOSE 3002
CMD ["node", "server.js"]
