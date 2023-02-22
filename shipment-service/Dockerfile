FROM node:alpine as node

COPY . /app
WORKDIR /app

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["node", "dist/main"]
