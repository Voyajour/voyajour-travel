const db = require('../models/mainModel.js');

const itineraryController = {};

itineraryController.newLocation = (req, res, next) => {
  // req.body contains the object below.
  // newLocation: {
  //   country: str,
  //   location: str
  //   }

  const { country, location } = req.body;

  const values = [country, location];
  const QUERY =
    'INSERT INTO locations (name, country) VALUES ($1, $2) RETURNING *;';
  db.query(QUERY, values)
    .then((newLocation) => {
      res.locals.success = true;
      const { _id, name, country } = newLocation.rows[0];
      const resObj = { location: name, country, id: _id };
      res.locals.newLocation = resObj;
      return next();
    })
    .catch((err) => {
      console.log('query ', err.stack);
      res.locals.success = false;
      return next();
    });
  // we're being sent an array of objects, with keys location and country
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
