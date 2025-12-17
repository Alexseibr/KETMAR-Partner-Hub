FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
EXPOSE 3001
ENV PORT=3001
ENV MONGO_URL=mongodb://mongo:27017/ketmar_partner_hub
CMD ["npm", "run", "start:partner-api"]
