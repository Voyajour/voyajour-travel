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
                VALUES($1, $2, $3, $4) RETURNING *;`;
  db.query(QUERY, values)
    .then((dbRes) => {
      console.log(dbRes);
      res.locals.success = true;
      res.locals.response = dbRes.rows[0];
      res.locals.username = dbRes.rows[0].username;
      res.locals.user_id = dbRes.rows[0]._id;
    
      return next();
    })
    .catch((err) => {
      console.log('query error', err.stack);
      res.locals.success = false;
      return next();
    });
};

// signupController.verifyNoDuplicates = (req, res, next) => {};

module.exports = signupController;
