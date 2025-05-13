const usersRouter = require("express").Router();

const {
  getUsers,
  getUserByUsername,
  createUser,
  confirmUser,
} = require("../controllers/users.controller");

const { getFavesByUser, postFave } = require("../controllers/faves.controller");

usersRouter.get("/", getUsers);

usersRouter.get("/:username", getUserByUsername);

usersRouter.post("/signup", createUser);

usersRouter.post("/signin", confirmUser);

usersRouter.get("/:username/faves", getFavesByUser);

usersRouter.post("/:username/:collection/:work_id", postFave);

module.exports = usersRouter;