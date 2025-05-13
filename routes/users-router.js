const usersRouter = require("express").Router();

const {
  getUsers,
  getUserByUsername,
  createUser,
} = require("../controllers/users.controller");

usersRouter.get("/", getUsers);

usersRouter.get("/:username", getUserByUsername);

usersRouter.post("/signup", createUser);

module.exports = usersRouter;