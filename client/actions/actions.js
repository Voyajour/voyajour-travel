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
  type: types.SUBMIT_ACTIVITY_FORM,
  payload: formInput,
});

const addActivity = (newActivity) => ({
  type: types.ADD_ACTIVITIES,
  payload: newActivity,
});

// this action checks username and password with sql database before dispatching action to reducers
// use redux thunk in order to make an asyncronous fetch
// Below is the same as writing const validateLogin = (u, p ) => {
// return function(dispatch) { ... }
// }
const validateLogin = (username, password) => (dispatch) => {
  axios
    .post('/api/user-validation', { username, password })
    .then((response) =>
      dispatch({
        type: types.VALID_LOGIN,
        payload: response.data,
      })
    )
    .catch((err) => console.log('Error in SUBMIT_LOGIN Reducer', err));
};

const storeNewLocation = (newLocationObj) => (dispatch) => {
  axios
    .post('/newLocation', newLocationObj)
    .then((res) => dispatch(addNewLocation(res.data)))
    .catch((err) =>
      console.log('error inside of NEW_PLANS travel reducer', err)
    );
};

const storeNewActivity = (newActivityObj) => (dispatch) => {
  axios
    .post('/newActivity', newActivityObj)
    .then((res) => {
      dispatch(addActivity(res.data));
    })
    .catch((err) => {
      console.log('error inside of ADD_ACTIVITIES reducer', err);
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
  storeNewLocation,
  storeNewActivity,
};
