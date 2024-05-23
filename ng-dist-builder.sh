#!/bin/sh

APP_NAME=angular-tetris
REPO_NAME=angular-tetris

if [ -d "./docs" ]; then
    rm -r ./docs
fi

cd $APP_NAME

if [ -d "./dist" ]; then
    rm -r ./dist
fi


ng build --output-path ./dist/ --base-href /$REPO_NAME/ && \
    mv ./dist/browser/ ../docs/ && \
    rm -r ./dist/ && \
    cp ../docs/index.html ../docs/404.html