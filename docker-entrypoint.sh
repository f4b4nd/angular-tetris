#!/bin/sh


app_name=angular-tetris

WORKDIR=/usr/src/app/

cd $WORKDIR

if [ ! -d "${app_name}" ]; then 
    echo "creating angular application ${app_name}..."
    ng new ${app_name}
fi

cd $app_name

ng serve --host 0.0.0.0

