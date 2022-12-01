#! /bin/bash
# example ./deployment.sh -b master
while getopts "b:" opt; do
  case $opt in
    b) BRANCH=$OPTARG  ;;
    *) echo 'Error: required all parameters' >&2
       exit 1
  esac
done
git checkout $BRANCH
git pull
docker ps
docker rm -f http-service
docker images
docker rmi http-service
docker build -t http-service:latest .
docker-compose up -d
