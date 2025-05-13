const db = require("../db/connection");

exports.selectFavesByUser = (username) => {
  return db
    .query(
      `SELECT * FROM faves
      WHERE username = $1;`,
      [username]
    )
    .then(({ rows }) => {
      // console.log(rows);
      return rows;
    });
};
