exports.generalErrorHandler = (req, res) => {
  res.status(404).send({ msg: "Not found" });
};

exports.customErrorHandler = (err, req, res, next) => {
  if (err.status && err.msg) {
    res.status(err.status).send({ msg: err.msg });
  } else {
    console.log(err);
    next(err);
  }
};

exports.serverErrorHandler = (err, req, res, next) => {
  res.status(500).send({ msg: "Internal server error" });
};