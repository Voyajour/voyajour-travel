const express = require('express');

const signupController = require('../controllers/signupController');

const router = express.Router();

router.post(
  '/',
  signupController.hashPassword,
  signupController.addUser,
  (req, res, next) => {
    res.status(200).send('signup router');
  }
);

module.exports = router;
