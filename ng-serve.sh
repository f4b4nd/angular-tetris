#!/bin/sh

app_name=angular-tetris

WORKDIR=/usr/src/app/

cd "$WORKDIR/$app_name"

ng serve --host 0.0.0.0

