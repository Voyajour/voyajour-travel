const db = require('../models/mainModel.js');

const itineraryController = {};

itineraryController.newPlan = (req, res, next) => {
  console.log(req.body);
  return next();
  // we're being sent an array of objects, with keys location and contry
  // destructure the country and location from req
  // declare an array that will hold our location and country variables
  // declare a variable that will hold the SQL query, to PUT or INSERT
  // [ Los Angeles, USA ]
  // `INSERT INTO location
  // VALUES ${location}
  // ;`
  // db.query( queryString, array of variables )
};

module.exports = itineraryController;
