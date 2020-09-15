const express = require('express');

const router = express.Router();
const formController = require('../controllers/formController.js');

// api router used to check login credentials
// returns boolean for whether or not username and password are correct
router.post('/user-validation',
  formController.findUser,
  formController.checkPassword,
  (req, res) => res.status(200).json(res.locals.validated));

module.exports = router;
