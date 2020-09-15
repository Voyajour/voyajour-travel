import { combineReducers } from 'redux';
import formReducer from './formReducer';

import travelReducer from './travelReducer';

const combinedReducers = combineReducers({
  trips: travelReducer,
  form: formReducer,
});

export default combinedReducers;
