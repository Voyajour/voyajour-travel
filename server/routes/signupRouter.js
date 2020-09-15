const express = require('express');
const db = require('../models/mainModel');
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
                  VALUES($1, $2, $3, $4);`;
    db.query(QUERY, values)
      .then((dbRes) => {
        console.log(dbRes);
      })
      .catch((err) => {
        console.log(err.stack);
      });

    res.status(200).send('signup router');
  }
);

module.exports = router;
