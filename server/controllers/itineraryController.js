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
  //req.params.activityId equal to _id in locations table
  const { locationId, link, notes, address, completed, description } = req.body;
  const values = [
    locationId,
    parseInt(req.params.user_id),
    link,
    notes,
    address,
    completed,
    description,
    parseInt(req.params.activityId)
  ];

  // activities table columns: _id, location_id, user_id, link, notes, address, completed, description

  const QUERY =
    'UPDATE activities SET location_id=$1, user_id=$2, link=$3, notes=$4, address=$5, completed=$6, description=$7 WHERE _id=$8 RETURNING *;';

  db.query(QUERY, values)
    .then((updatedActivity) => {
      // return an object containing the updated activity
      res.locals.success = true;

      // save the updated activity and return to the client
      res.locals.updatedActivity = updatedActivity.rows[0];
      return next();
    })
    .catch((err) => {
      res.locals.success = false;
      return next();
    });
};

itineraryController.deleteActivity = (req, res, next) => {
  const QUERY = 'DELETE FROM activities WHERE _id=$1;';
  const value = [parseInt(req.params.activityId)];

  db.query(QUERY, value)
    .then(() => {
      res.locals.success = true;
      return next();
    })
    .catch((err) => {
      res.locals.success = false;
      console.log(err);
      return next();
    });
}


itineraryController.deleteLocation = (req, res, next) => {
  //db query to delete entire location based on user_id
  const {user_id, locationId} = req.params;

  const values = [parseInt(user_id), parseInt(locationId)];

  console.log(values);

  const QUERY = 'DELETE FROM locations WHERE user_id=$1 AND _id=$2;';

  db.query(QUERY, values)
    .then(() => {
      res.locals.success = true;
      return next();
    })
    .catch(err => {
      res.locals.success = false;
      return next();
    });
}




module.exports = itineraryController;
