/* eslint-disable import/extensions */
//  eslint-disable react/prop-types
import React from 'react';
import { connect } from 'react-redux';
import SidebarCard from '../components/SidebarCard.jsx';
import NewPlans from '../components/NewPlans.jsx';

import * as actions from '../actions/actions.js';

const mapDispatchToProps = (dispatch) => ({
  getActivities: (tripId) => dispatch(actions.getActivities(tripId)),
  newLocationInput: (e) => dispatch(actions.newLocationInput(e)),
  storeNewLocation: (e, userId) =>
    dispatch(actions.storeNewLocation(e, userId)),
  deleteLocationCard: (locationId, userId) =>
    dispatch(actions.deleteLocationCard(locationId, userId)),
});

const mapStateToProps = (state) => ({
  country: state.form.newPlans.country,
  newLocation: state.form.newPlans.newLocation,
  userId: state.form.activeUser.userId,
  trips: state.trips.trips,
  activeLocationId: state.trips.activeLocationId,
});

const SidebarContainer = (props) => {
  const {
    getActivities,
    addNewPlans,
    newLocationInput,
    country,
    newLocation,
    userId,
    trips,
    activeLocationId,
    storeNewLocation,
    deleteLocationCard,
  } = props;

  return (
    <div className='side-bar'>
      <h5 id='itineraries'>Itineraries</h5>
      <NewPlans
        addNewPlans={addNewPlans}
        country={country}
        location={newLocation}
        userId={userId}
        newLocationInput={newLocationInput}
        storeNewLocation={storeNewLocation}
      />
      {/* this function iterates over an array in state and renders Sidebar Card components */}
      {trips.map((trip, i) => (
        <SidebarCard
          key={`locationId${i}`}
          locationid={trip.locationId}
          getActivities={getActivities}
          country={trip.country}
          location={trip.location}
          activeLocationId={activeLocationId}
          deleteLocationCard={deleteLocationCard}
          userId={userId}
        />
      ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);
