/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';
import Login from '../components/Login.jsx';
import NavContainer from './NavContainer.jsx';
import SidebarContainer from './SidebarContainer.jsx';
import ActivitiesContainer from './ActivitiesContainer.jsx';

// our addCount function was a dummy function during the beginning of the project,
// it doesn't actually do anything now, so remove it... BUT, there are many other files
// referencing addCount
const mapDispatchToProps = (dispatch) => ({
  addCount: () => dispatch(actions.addCount()),
});
// see comments above, count is no longer a working part of the app
const mapStateToProps = (state) => ({
  count: state.trips.count,
});

// within main - nav container, side-bar container, activities container (3)

const MainContainer = (props) => {
  const { count, addCount } = props;
  return (
    <div>
      <NavContainer />
      <div className="body-container">
        <SidebarContainer />
        <ActivitiesContainer />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
