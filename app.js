const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const apiRouter = require("./routes/api-router");
const usersRouter = require("./routes/users-router");
const {
  customErrorHandler,
} = require("./errors");

app.use(express.json());

app.use("/api", apiRouter);

app.use("/api/users", usersRouter);

app.use(customErrorHandler);

module.exports = app;