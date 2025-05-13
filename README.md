# ARTouch ☜ ReadMe - Backend

## What is ARTouch?

ARTouch is a web app designed to make finding your new favourite artworks a fun - and painless! - experience.

### Deployed versions

- You can access the deployed **front-end** version [here](https://pipmurphy.com/artouch).
- You can access the deployed **back-end** version [here](https://artouch.onrender.com/api).

### GitHub repositories

- This is the **back-end** repository.
- You can find the **front-end** repository [here](https://github.com/santashifinn/artouch-fe).

## Tech used

This back-end portion of the project was written in JavaScript and used:

### Backend:

- Node.js
- Jest
- SuperTest
- Express
- CORS
- Nodemon
- PostgreSQL
- dotenv
- bcrypt

## Endpoints

Please enter the request `GET /api` to see a list of all available endpoints.

Available requests:

- getting a list of all users
- getting a specific user by username
- creating a new user
- logging in
- getting a list of favourite works by username
- adding a new favourite work
- removing a favourite work
- deleting an entire collection of favourite works

## Run this project locally

### How to clone

- If you'd like to try running this repository on your local machine, you can clone it by entering the following command in your terminal: `git clone https://github.com/santashifinn/artouch-be`.
- Then navigate into the folder using the command `cd artouch-be`.
- After that please install:

- **Node.js** - v22.8.0 [install using the command `npm install`]

### Required dependencies - minimum versions needed to run project

### Backend:

- **Node.js** - v22.8.0
- **PostgreSQL** - v8.16.0
- **Express** - v5.1.0
- **CORS** - v2.8.5
- **DotEnv** - v16.5.0
- **bcrypt** - v6.0.0
- **Jest** - v29.7.0
- **SuperTest** - v7.1.1
- **PG format** - v1.0.4
- **Nodemon** - v3.1.10

\*These will all be installed through the command `npm install` and don't need to be installed separately.

### Required files

Please create the following files in order to connect to the **test-data** and **development-data** databases locally:

- **.env.test** [Please add the text `PGDATABASE=artouch_test` to the file.]
- **.env.development** [Please add the text `PGDATABASE=artouch` to the file.]

## How to seed the local database

- Please enter the command `npm run seed`.

## How to run tests

- Please enter the command `npm run test` to run all  tests.

## Thank-yous

Thank you firstly to Northcoders/Launchpad for requesting this project, to you for taking the time to check it out, and to my cat Amber for her unwavering support and snuggles while bringing ARTouch to life.