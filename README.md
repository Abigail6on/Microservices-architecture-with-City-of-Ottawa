# Revamping-the-City-of-Ottawa
Revamping the city of Ottawa app using microservice architecture.

This is server 2.0

I changed to yarn...


Basic dependency installation:

1. yarn init -y

2. Watch out code (local changes)
    
    yarn add -D babel-watch


3. Basic dependecies:

    yarn add @babel/core @babel/polyfill @babel/preset-env babel-plugin-module-resolver

4. add env vars control dependency

    yarn add dotenv

Set up docker-compose.yaml file and run container

    docker-compose up

THEN we set up database!

We are using MYSQL and Squel Pro

    yarn add mysql2 sequelize sequelize-cli

control d 

    exite docker container


If your docker container running have issue, run 

    docker-compose down -v

Then run 

    docker-compose up