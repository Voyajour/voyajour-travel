const bcrypt = require('bcrypt');

const saltRounds = 10;

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
  req.body.password = res.locals.hashed;
  res.locals.newUser = req.body;
  return next();
};

// signupController.verifyNoDuplicates = (req, res, next) => {};

module.exports = signupController;
