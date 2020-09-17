const db = require('../models/mainModel.js');

const itineraryController = {};

itineraryController.newLocation = (req, res, next) => {
  const { location, country } = req.body;

  const values = [location, country];
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
};

module.exports = itineraryController;
