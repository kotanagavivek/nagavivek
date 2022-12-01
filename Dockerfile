FROM node:16.17.0-bullseye-slim

WORKDIR /usr/src/http-service

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY dist/http-service .

EXPOSE 9500

ENTRYPOINT [ "./http-service" ]