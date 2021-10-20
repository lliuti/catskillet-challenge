# catskillet-challenge

NodeJS + Typescript API from CatSkillet backend challenge

![Todo list](https://image.freepik.com/free-vector/people-making-list-illustration_53876-43029.jpg)

## How to install

Clone this repository: https://github.com/lliuti/catskillet-challenge.git

To run this project you need to have Node.JS installed on your computer. You can download it here: https://nodejs.org/en/

To install all the dependecies this project uses, run (on the cloned project directory):

```
npm install
```

or (if you have yarn)

```
yarn
```

## Database

This API is currently using Postgres to store data.
You can download it here: https://www.postgresql.org/download/

After downloaded, you can open the SQL SHELL and you will be prompted with some questions

> On "server", "database", "port" & "username" you can press enter without typing anything. If on Postgres setup you set any password, you will have to insert it in the shell in order to create the DB

The default postgres credentials are:

```
Server: localhost
> Database: postgres
> Port: 5432
> Username: postgres
> Password: postgres
```

After these questions, you will see a prompt with:

```
postgres=#
```

This means that you can already create the database with the command

```
CREATE DATABASE catskillet;
```

To manage the database I'm using Beekeeper-Studio. You can download it here: https://www.beekeeperstudio.io/

Or you can use any other DBMS of your choice.

After that, you can now open the project directory that you cloned and run:

```
yarn start
```

To run the tests:

```
yarn test
```

## API Documentation

To see the API Documentation, you can open: http://localhost:3000/api-docs on your browser (while the api is running, obviously).
