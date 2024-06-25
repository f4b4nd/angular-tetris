#!/bin/sh


IMAGE_NAME=angular17:node20
CONTAINER_NAME=angular17-node20-tetris
WORKDIR=/usr/src/app/

docker run --rm \
  -d \
  --name $CONTAINER_NAME \
  -v $(pwd):$WORKDIR \
  -p 4200:4200 \
  -p 9876:9876 \
  $IMAGE_NAME \
  tail -f /dev/null
  

docker exec -it $CONTAINER_NAME /bin/sh

docker stop $CONTAINER_NAME