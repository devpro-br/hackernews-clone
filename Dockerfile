# Container com código para dev
FROM node:14.18 AS dev
WORKDIR /app
ENV NODE_ENV=development
COPY package*.json ./
RUN npm install
COPY . .

# Container que gera a pasta /dist
FROM dev AS build
ENV NODE_ENV=production
RUN npm run build

# Container para PROD sem código
FROM node:14.18 AS production
RUN npm install serve -g
COPY --from=build /app/dist .
EXPOSE 8080
CMD serve -s . -p 8080
