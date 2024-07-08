FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

# frozen lockfile
RUN npm ci

COPY . .

CMD ["node", "index.js"]

