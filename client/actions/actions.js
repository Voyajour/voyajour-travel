// axios helps to shorten fetch requests
// remember to install redux thunk if you want to make fetch requests here
import axios from 'axios';
import * as types from '../constants/actionTypes';

const addCount = () => ({
  type: types.ADD_COUNT,
  payload: null,
});

const submitSignupForm = (formInput) => ({
  type: types.SUBMIT_SIGNUP_FORM,
  payload: formInput,
});

// adds activity cards to the activity component container
const getActivities = (locationId) => ({
  type: types.GET_ACTIVITIES,
  payload: locationId,
});

// adds itinerary cards to the sideBar container
const addNewLocation = (location) => ({
  type: types.ADD_NEW_LOCATION,
  payload: location,
});

const newLocationInput = (location) => ({
  type: types.NEW_LOCATION_INPUT,
  payload: location,
});

const signupFormInput = (formInput) => ({
  type: types.SIGNUP_FORM_INPUT,
  payload: formInput,
});

const loginInput = (formInput) => ({
  type: types.LOGIN_INPUT,
  payload: formInput,
});

const activityFormInput = (formInput) => ({
  type: types.ACTIVITY_FORM_INPUT,
  payload: formInput,
});

const activityFormSubmit = (formInput) => ({
  type: types.ACTIVITY_FORM_SUBMIT,
  payload: formInput,
});

const addActivity = (newActivity) => ({
  type: types.ADD_ACTIVITIES,
  payload: newActivity,
});

const deleteActivityCard = (activityId) => ({
  type: types.DELETE_ACTIVITY_CARD,
  payload: activityId,
});

const deleteLocationCard = (input) => ({
  type: types.DELETE_LOCATION_CARD,
  payload: input,
});

// this action checks username and password with sql database before dispatching action to reducers
// use redux thunk in order to make an asyncronous fetch
// Below is the same as writing const validateLogin = (u, p ) => {
// return function(dispatch) { ... }
// }

const validateLogin = (username, password) => (dispatch) => {
  axios
    .post('/api/user-validation', { username, password })
    .then((response) => {
      dispatch({ type: types.POPULATE_ACTIVITIES, payload: response.data });
      dispatch({
        type: types.VALID_LOGIN,
        payload: response.data,
      });
    })
    .catch((err) => console.log('Error in validate login thunk', err));
};

// send new location to db to be saved, pass return value (which will be location obj with userId added) to addNewLocation reducer func
const storeNewLocation = (newLocationObj, userId) => (dispatch) => {
  axios
    .post(`/itinerary/newLocation/${userId}`, newLocationObj)
    .then((res) => dispatch(addNewLocation(res.data)))
    .catch((err) => console.log('error inside of storeNewLocation thunk', err));
};

// send new activity to db to be saved, pass return value (which will be activity obj with userId added) to ADD_ACTIVITIES in travelReducer func
const storeNewActivity = (newActivityObj, userId) => (dispatch) => {
  axios
    .post(`itinerary/newActivity/${userId}`, newActivityObj)
    .then((res) => {
      dispatch(addActivity(res.data));
    })
    .catch((err) => {
      console.log('error inside of storeNewActivity thunk', err);
    });
};

// send location card to db to be saved, pass return value (which will be locationId) to DELETE_LOCATION_CARD in travelReducer func
const removeActivityCard = (activityId) => (dispatch) => {
  axios
    // this endpoint will need to be updated when we know the correct endpoint
    .delete(`itinerary/deleteActivity/${activityId}`)
    .then(() => {
      console.log(`about to dispatch ${activityId}`);
      dispatch(deleteActivityCard(activityId));
    })
    .catch((err) => {
      console.log('error inside of removeActivityCard thunk', err);
    });
};

// send location card to db to be saved, pass return value (which will be locationId) to DELETE_LOCATION_CARD in travelReducer func
const removeLocationCard = (locationId, userId) => (dispatch) => {
  console.log(`locationID: ${locationId}, userId:${userId}`);
  axios
    // this endpoint will need to be updated when we know the correct endpoint
    .delete(`itinerary/deleteLocation/${userId}/${locationId}`, { userId })
    .then(() => {
      dispatch(deleteLocationCard(locationId));
    })
    .catch((err) => {
      console.log('error inside of removeLocationCard thunk', err);
    });
};

export {
  addCount,
  submitSignupForm,
  loginInput,
  validateLogin,
  signupFormInput,
  getActivities,
  addNewLocation,
  newLocationInput,
  activityFormInput,
  activityFormSubmit,
  addActivity,
  removeActivityCard,
  deleteActivityCard,
  storeNewLocation,
  storeNewActivity,
  removeLocationCard,
  deleteLocationCard,
};
