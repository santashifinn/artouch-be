const {
  selectFavesByUser,
  addFave
} = require("../models/faves.model");

exports.getFavesByUser = (req, res, next) => {
  const username = req.params.username;
  selectFavesByUser(username)
    .then((faves) => {
      return res.status(200).send({ faves });
    })
    .catch(next);
};

exports.postFave = (req, res, next) => {
  const username = req.params.username;
  const collection = req.params.collection;
  const newFave = req.params.work_id;

  addFave(username, collection, newFave)
    .then((fave) => {
      res.status(201).send({ fave });
    })
    .catch(next);
};