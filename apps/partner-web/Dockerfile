FROM node:22-alpine
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --omit=dev || true
COPY . .
WORKDIR /app/apps/partner-web
CMD ["npx", "vite", "--host", "0.0.0.0", "--port", "5173"]
