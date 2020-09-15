import React from 'react';
// react-router-dom requires routes to be defined, so we defined them below
import { Switch, Route } from 'react-router-dom';
// the app consists of 3 main pages defined below
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import MainContainer from './containers/MainContainer.jsx';

const App = () => (
  <div>
    <Switch>
      {/* route to "/" has to be exact because otherwise /main and /sign up won't render  */}
      <Route path="/" exact component={Login} />
      {/* please note: even though login component successfully checks credentials,
          MainContainer is not private or locked off to unauthorized users. */}
      <Route path="/main" component={MainContainer} />
      <Route path="/signup" component={Signup} />
    </Switch>
  </div>
);

export default App;
