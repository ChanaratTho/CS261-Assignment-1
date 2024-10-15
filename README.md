## CS261-Assignment-1

### Commands for build image and run node.js container from image

> docker network create mynetwork

> docker build -f DockerContainer_NodeJS.dockerfile -t node-js-image .

> docker run -d --name node-server --network mynetwork -p 3000:3000 node-js-image
