const {
  selectFavesByUser,
} = require("../models/faves.model");

exports.getFavesByUser = (req, res, next) => {
  const username = req.params.username;
  selectFavesByUser(username)
    .then((faves) => {
      return res.status(200).send({ faves });
    })
    .catch(next);
};
