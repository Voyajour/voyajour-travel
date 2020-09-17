const db = require('../models/mainModel.js');

const itineraryController = {};
itineraryController.newActivity = (req, res, next) => {
  const { locationId, link, notes, address, completed, description } = req.body;
  const values = [
    locationId,
    req.params.user_id,
    link,
    notes,
    address,
    completed,
    description,
  ];
  const QUERY =
    'INSERT INTO activities (location_id, user_id, link, notes, address, completed, description) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;';
  db.query(QUERY, values)
    .then((newActivity) => {
      res.locals.success = true;
      res.locals.newActivity = newActivity.rows[0];
      return next();
    })
    .catch((err) => {
      console.log('query ', err.stack);
      res.locals.success = false;
      return next();
    });
};

itineraryController.newLocation = (req, res, next) => {
  const { location, country } = req.body;

  const values = [location, country, req.params.user_id];
  const QUERY =
    'INSERT INTO locations (name, country, user_id) VALUES ($1, $2, $3) RETURNING *;';
  db.query(QUERY, values)
    .then((newLocation) => {
      res.locals.success = true;
      res.locals.newLocation = newLocation.rows[0];
      return next();
    })
    .catch((err) => {
      console.log('query ', err.stack);
      res.locals.success = false;
      return next();
    });
};

itineraryController.updateActivity = (req, res, next) => {

  // deconstruct req.body.

  const {
    activity_id,
    description,
    notes,
    link,
    address,
    completed,
  } = req.body;

  // values to be used in the query.
  const values = [activity_id, description, notes, link, address, completed];

  // activities table columns: _id, location_id, user_id, link, notes, address, completed, description

  const QUERY =
    'UPDATE activities SET description=(description), notes=(notes), link=(link), address=(address), completed=(completed) WHERE _id=(activity_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;';

  db.query(queryStr, values)
    .then((updatedActivity) => {
      // return an object containing the updated activity
      res.locals.success = true;

      // save the updated activity and return to the client
      res.locals.updatedActivity = updatedActivity;
      return next();
    })
    .catch((err) => {
      res.locals.success = false;
      return next();
    });
};

module.exports = itineraryController;
