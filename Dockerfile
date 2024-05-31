FROM node:20.9-alpine3.18

ARG WORKDIR=/usr/src/app/

RUN apk update && apk upgrade --no-cache

RUN npm install -g @angular/cli@17.3.8

RUN mkdir -p $WORKDIR

WORKDIR $WORKDIR

EXPOSE 4200
