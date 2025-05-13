const bcrypt = require("bcrypt");

const {
  selectUsers,
  selectUserByUsername,
  addUser,
} = require("../models/users.model");

exports.getUsers = (req, res, next) => {
  selectUsers()
    .then((users) => {
      res.status(200).send({ users });
    })
    .catch(next);
};

exports.getUserByUsername = (req, res, next) => {
  const username = req.params.username;
  selectUserByUsername(username)
    .then((user) => {
      return res.status(200).send({ user });
    })
    .catch(next);
};

exports.createUser = (req, res, next) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res
      .status(400)
      .send({ msg: "Please enter username, email and password." });
  }
  bcrypt.hash(password, 10).then((password_hashed) => {
    addUser(username, email, password_hashed)
      .then((user) => {
        res
          .status(201)
          .send({ user });
      })
      .catch(next);
  });
};

exports.confirmUser = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .send({ msg: "Please enter your username and password." });
  }
  selectUserByUsername(username)
    .then((user) => {
      if (user) {
        bcrypt.compare(password, user.password_hashed).then(() => {
          return res
            .status(201)
            .send({ msg: "Login successful.", user: { username } });
        });
      }
    })
    .catch(next);
};