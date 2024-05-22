#!/bin/sh

APP_NAME=angular-tetris
REPO_NAME=angular-tetris
WORKDIR=/usr/src/app/$APP_NAME/

if [ -d "./docs" ]; then
    rm -r ./docs
fi

cd $WORKDIR

ng build --output-path ./docs/ --base-href /$REPO_NAME/ && \ 
    mv ./docs/browser/ ../docs/ && \
    rm -r ./docs/ && \
    cp ../docs/index.html ../docs/404.html