const express = require('express');

const router = express.Router();
const formController = require('../controllers/formController.js');

// api router used to check login credentials
// returns boolean for whether or not username and password are correct
router.post('/user-validation',
  formController.findUser, //save id  and username in res.locals
  formController.checkPassword, formController.getData, //saves res.validated
  //middleware {validated: boolean, user_id: id number, username: username} //send all locations and all activies
  // /:key
  (req, res) => res.status(200).json(res.locals.getResponse));

module.exports = router;
