import axios from 'axios';
import * as types from '../constants/actionTypes';

// our form reducer is for all componenets in our codebase that have input fields. Here, each
// input field is given a key value in state along with objects that represent data coming in
// form the client
const initialState = {
  signUp: {
    firstName: '',
    email: '',
    username: '',
    password: '',
    confirmedPassword: '',
  },
  login: {
    username: '',
    password: '',
    validated: false,
    loginAttempts: 0,
    enterKeyPressed: false,
  },
  newPlans: {
    newLocation: '',
    country: '',
  },
  newActivity: {
    description: '',
    notes: '',
    address: '',
    link: '',
    completed: false,
  },
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SUBMIT_SIGNUP_FORM: {
      const {
        firstName,
        email,
        username,
        password,
        confirmedPassword,
      } = action.payload;
      const inputToDB = {
        firstName,
        email,
        username,
        password,
      };

      if (password !== confirmedPassword) {
        console.log('passwords dont match');
        return {
          ...state,
        };
      }
      console.log('pws match');
      axios
        .post('/signup', inputToDB)
        .then((response) => {
          console.log('in reducer --> ', response);
        })
        .catch((err) => console.log('err in reducer: ', err));

      return {
        ...state,
        signUp: {
          ...state.signUp,
          ...action.payload,
        },
      };
    }

    case types.SIGNUP_FORM_INPUT: {
      const { name, value } = action.payload;

      return {
        ...state,
        signUp: {
          ...state.signUp,
          [name]: value,
        },
      };
    }

    case types.LOGIN_INPUT: {
      const { id, value } = action.payload.target;
      return {
        ...state,
        login: {
          ...state.login,
          [id]: value,
        },
      };
    }

    case types.VALID_LOGIN: {
      const validated = action.payload;
      let { loginAttempts } = state.login;
      loginAttempts += 1;
      return {
        ...state,
        login: {
          ...state.login,
          validated,
          loginAttempts,
        },
      };
    }

    case types.NEW_LOCATION_INPUT: {
      const { value, name } = action.payload;
      return {
        ...state,
        newPlans: {
          ...state.newPlans,
          [name]: value,
        },
      };
    }

    case types.ACTIVITY_FORM_INPUT: {
      const { name, value } = action.payload;

      return {
        ...state,
        newActivity: {
          ...state.newActivity,
          [name]: value,
        },
      };
    }

    case types.SUBMIT_ACTIVITY_FORM: {
      console.log(action.payload);
      return {
        ...state,
        newActivity: {
          ...state.newActivity,
          ...action.payload,
        },
      };
    }

    default:
      return state;
  }
};

export default formReducer;
