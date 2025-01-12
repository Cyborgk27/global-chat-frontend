# Fase 1: Construcción de la aplicación Angular
FROM node:22 AS build

RUN  mkdir -p /app

COPY  package.json  /app

RUN npm isntall

COPY . /app

RUN npm run build --prod

FROM nginx:latest

COPY --from=build-step /app/dist/global-chat-frontend /usr/share/ngingx/html