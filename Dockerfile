FROM node:20.9-alpine3.18

ARG WORKDIR=/usr/src/app/

RUN npm install -g @angular/cli

RUN mkdir -p $WORKDIR

WORKDIR $WORKDIR

EXPOSE 4200
