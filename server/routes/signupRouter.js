const express = require('express');

const signupController = require('../controllers/signupController');
const formController = require('../controllers/formController');

const router = express.Router();

router.post(
  '/',
  signupController.hashPassword,
  signupController.addUser,
  formController.getData,
  (req, res, next) => {
    if(res.locals.success){
      console.log('Signup Response: ', res.locals.getResponse);
      res.status(200).json(res.locals.getResponse);
    } else {
      res.sendStatus(418);
    }
  },
);

module.exports = router;
