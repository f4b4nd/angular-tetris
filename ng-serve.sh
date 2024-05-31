#!/bin/sh

app_name=angular-tetris

WORKDIR=/usr/src/app/

cd "$WORKDIR/$app_name"


if [ ! -d "node_modules" ]; then 
    echo "installing dependencies..."
    npm install
fi


ng serve --host 0.0.0.0

