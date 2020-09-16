const express = require('express');

const signupController = require('../controllers/signupController');

const router = express.Router();

router.post(
  '/',
  signupController.hashPassword,
  signupController.addUser,
  (req, res, next) => {
    const { firstName, email, username, password } = res.locals.newUser;
    const values = [firstName, email, username, password];
    const QUERY = `INSERT INTO users (name, email, username, password)
                  VALUES($1, $2, $3, $4) RETURNING *;`;
    db.query(QUERY, values)
      .then((dbRes) => {
        console.log(dbRes);
        res.status(200).send(dbRes.rows[0]);
      })
      .catch((err) => {
        console.log('query error', err.stack);
        res.sendStatus(418);
      });
  },
);

module.exports = router;
