const usersRouter = require("express").Router();

const {
  getUsers,
  getUserByUsername,
  createUser,
  confirmUser,
} = require("../controllers/users.controller");

usersRouter.get("/", getUsers);

usersRouter.get("/:username", getUserByUsername);

usersRouter.post("/signup", createUser);

usersRouter.post("/signin", confirmUser);

module.exports = usersRouter;