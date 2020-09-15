// used bcrypt to decrypt passwords that were encrypted during signup
const bcrypt = require('bcrypt');
const db = require('../models/mainModel.js');

const formController = {};

// find user based in SQL database on username and store password
formController.findUser = (req, res, next) => {
  const { username, password } = req.body;
  res.locals.password = password;
  const values = [username];
  const queryString = `
    SELECT * FROM users
    WHERE username = $1;
  `;
  db.query(queryString, values, (err, result) => {
    if (err) return next(err);
    console.log('SQL DB Result', result.rows);

    // store user data from SQL database in the form of an array of objects
    // this includes their hashed password
    res.locals.user = result.rows;
    return next();
  });
};

// decrypts password from SQL database and compares it with inputted password from login
formController.checkPassword = (req, res, next) => {
  const { password, user } = res.locals;
  // if 'user' array of objects from database is empty,
  // then the user does not exist in our db; return validated false
  res.locals.validated = false;
  if (user.length === 0) return next();
  // save the hashed password from the database in a variable
  const dBHashedPassword = user[0].password;
  // compare plaintext password with decrypted password
  bcrypt.compare(password, dBHashedPassword)
  // result is a boolean
    .then((result) => {
      res.locals.validated = result;
      return next();
    })
    .catch((err) => next(err));
};

module.exports = formController;
