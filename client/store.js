import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// note, we can't pass in composeWithDevTools and redux-thunk at the same time to the store
// if you want to use devtools, you need to combine redux-thunk's applyMiddleware 
// and composeWithDevTools
import thunk from 'redux-thunk';
import combinedReducers from './reducers/index';

// store will hold our reducers and always reflect the one source of truth
const store = createStore(
  combinedReducers,
  applyMiddleware(thunk),
);

export default store;
