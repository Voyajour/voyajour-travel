const express = require('express');

const router = express.Router();

const itineraryController = require('../controllers/itineraryController.js')

//itineray/location -> Giant ovbject 
//request with user id
//query database for select all from locations where userid = req.params
//select * from activites wehre userid = req.body.id...params
//Send all as one object with everything from first query in lcoations property in activities proeprty.
//res.locals locations, activities
//middleware -> combine both

router.post('/',
  itineraryController.newPlan,
  (req, res) => {
    console.log('posted into db @ iteneraryController');
    res.sendStatus(200);
  });

//router update update activity
//activities table columns: _id, location_id, user_id, link, notes, address, completed, description
//id is in params
router.put('/updateActivity',itineraryController.updateActivity, (req, res) => {
  //if res.locals.sucess is true then send the updatedActivity object back tot he client
  if(res.locals.sucess){
    res.status(200).json(res.locals.updatedActivity);
  } else {
    res.status(200).send('Sorry. Activity could not be updated at this time.');
  }
})

//router update location
router.put('/updateLocation', itineraryController.updateActivity,(req, res) => {
  res.sendStatus(200);

})

module.exports = router;
