const bcrypt = require('bcrypt');

const saltRounds = 10;
const db = require('../models/mainModel');
const signupController = {};

signupController.hashPassword = (req, res, next) => {
  const { password } = req.body;
  bcrypt.hash(password, saltRounds).then((hashedPW) => {
    console.log('in hashing controller: ', hashedPW);
    res.locals.hashed = hashedPW;
    return next();
  });
};

signupController.addUser = (req, res, next) => {
  console.log('before update ', req.body.password);
  req.body.password = res.locals.hashed;
  console.log('after update ', req.body.password);
  res.locals.newUser = req.body;
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

  return next();
};

// signupController.verifyNoDuplicates = (req, res, next) => {};

module.exports = signupController;
