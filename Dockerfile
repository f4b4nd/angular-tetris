FROM node:20.9-alpine3.18

ENV CHROME_BIN=/usr/bin/chromium

ARG WORKDIR=/usr/src/app/

RUN apk update && apk upgrade --no-cache

RUN apk add chromium

RUN mkdir -p $WORKDIR

WORKDIR $WORKDIR

EXPOSE 4200
