const {
  selectFavesByUser,
  addFave,
  removeFave,
  checkFaveExists
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

exports.deleteFave = (req, res, next) => {
  const username = req.params.username;
  const collection = req.params.collection;
  const work_id = req.params.work_id;

  const promises = [];
  if (work_id) {
    promises.push(checkFaveExists(collection, work_id));
    promises.push(removeFave(username, collection, work_id));
  }
  Promise.all(promises)
    .then(() => {
      res.status(204).send();
    })
    .catch(next);
};