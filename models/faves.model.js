const db = require("../db/connection");

exports.selectFavesByUser = (username) => {
  return db
    .query(
      `SELECT * FROM faves
      WHERE username = $1;`,
      [username]
    )
    .then(({ rows }) => {
      return rows;
    });
};

exports.addFave = (username, collection, work_id) => {
  return db
    .query(
      `INSERT INTO faves (username, collection, work_id) VALUES ($1, $2, $3) RETURNING *;`,
      [username, collection, work_id]
    )
    .then(({ rows }) => {
      return rows[0];
    });
};