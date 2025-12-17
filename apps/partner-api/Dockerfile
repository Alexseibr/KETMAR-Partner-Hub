FROM node:22-alpine
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --omit=dev || true
COPY . .
WORKDIR /app/apps/partner-api
CMD ["npm", "run", "start:partner-api"]
