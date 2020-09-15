const express = require('express');

const router = express.Router();

const itineraryController = require('../controllers/itineraryController.js')

router.post('/',
  itineraryController.newPlan,
  (req, res) => {
    console.log('posted into db @ iteneraryController');
    res.sendStatus(200);
  });

module.exports = router;
