import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// react-dom-router allows for components to route the user without sending a request to the server
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import store from './store';
import './scss/application.scss';

render(
  <Provider store={store}>
    {/* please note that the App component needs to be wrapped in the Router component */}
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
