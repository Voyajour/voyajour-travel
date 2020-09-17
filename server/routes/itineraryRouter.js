const express = require('express');

const router = express.Router();

const itineraryController = require('../controllers/itineraryController.js');

// creating a new location in the locations table.
router.post(
  '/newLocation?user_id=',
  itineraryController.newLocation,
  (req, res) => {
    if (res.locals.success) {
      console.log('posted into db @ itineraryController');
      res.status(200).json(res.locals.newLocation);
    } else {
      res.status(200).send('My apologies, could not update database');
    }
  },
);

// router.post with that of /newActivity
// router.post('/newActivity', itineraryController., (req, res) => {
//   // info needed for new activity _id, location_id, user_id, link, notes, address, completed, description
//   console.log('new activity created in DB @ itineraryController');
//   res.status(200).json(res.locals);
// });

module.exports = router;
