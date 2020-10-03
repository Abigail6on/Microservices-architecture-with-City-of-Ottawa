1. Add script watch to watch and pick up local changes

"scripts": {
    "watch": "babel-watch -L src/index.js"
  },

2. Build babel config file 

3. Dockerfile 

4. Add src/index.js to test yarn watch runing 

5. docker build .

6. Check which container is running and get container ID

    docker ps 

7. Excecute docker container with their ID

    docker exec -it c1 bash 

8. yarn add express cors body-parser