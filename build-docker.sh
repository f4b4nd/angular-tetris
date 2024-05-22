#!/bin/sh

IMAGE_NAME=angular:node20

docker build . -t $IMAGE_NAME
