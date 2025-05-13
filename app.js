const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const apiRouter = require("./routes/api-router");

app.use(express.json());

app.use("/api", apiRouter);

module.exports = app;