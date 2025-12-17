FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
EXPOSE 5173
ENV PARTNER_API_TARGET=http://partner-api:3001
CMD ["npm", "run", "start:partner-web"]
