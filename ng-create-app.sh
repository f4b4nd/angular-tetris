#!/bin/sh

app_name=angular-tetris

WORKDIR=/usr/src/app/

cd $WORKDIR

if [ ! -d "${app_name}" ]; then 
    echo "creating angular application ${app_name}..."
    npx ng new ${app_name}
fi

