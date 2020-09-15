// import our actiontypes from constants/actionsTypes;
import axios from 'axios';
import * as types from '../constants/actionTypes';
// our initialState for this reducer needs some cleaning up. We have this one
// and formReducer which are combined in the index.js file with the combineReducer method

// note, because of the way we set up index.js, this state is accesssed w/ state.trips;
const initialState = {
  count: 0,
  trips: [],
  activities: [],
};

const travelReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_COUNT: {
      const count = state.count + 1;
      return { ...state, count };
    }
    // this action was left incomplete, the idea was to get activities corresponding with 
    // itineraries
    // from the database
    case types.GET_ACTIVITIES: {
      const { payload } = action;
      // const { trips } = initialState;
      // axios.get('/:userId/Activities')
      //   .then(res => {
      //     trips = res.rows
      //   })
      //   .catch('error inside of getActivities', err);
      console.log(payload);
      return { ...state };
    }
    // this action sends a request to our server. However, the router is unfinished,
    // so this function is not hooked up to the database yet
    case types.NEW_PLANS: {
      const newTrips = state.trips.slice();
      newTrips.push(action.payload);
      console.log('inside travel reducer, state.trips:', state.trips);
      axios
        .post('/itinerary', { location: 'Los Angeles' })
        .then((res) => console.log(res))
        .catch((err) =>
          console.log('error inside of NEW_PLANS travel reducer', err)
        );
      return {
        ...state,
        trips: newTrips,
      };
    }

    case types.ADD_ACTIVITIES: {
      const newActivities = state.activities.slice();
      newActivities.push(action.payload);
      return {
        ...state,
        activities: newActivities,
      };
    }
    default:
      return state;
  }
};

export default travelReducer;
