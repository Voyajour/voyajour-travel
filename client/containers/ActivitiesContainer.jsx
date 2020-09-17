/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import Activity from '../components/Activity.jsx';
import ActivityFormModal from '../components/AddActivityModal.jsx';
import * as actions from '../actions/actions';

const mapDispatchToProps = (dispatch) => ({
  handleFormInput: (newState) => dispatch(actions.activityFormInput(newState)),
  handleFormSubmit: (newState) =>
    dispatch(actions.activityFormSubmit(newState)),
  addToActivitiesArray: (activity, userId) =>
    dispatch(actions.storeNewActivity(activity, userId)),
});

const mapStateToProps = (state) => ({
  description: state.form.newActivity.description,
  notes: state.form.newActivity.notes,
  address: state.form.newActivity.address,
  link: state.form.newActivity.link,
  completed: state.form.newActivity.completed,
  userId: state.form.activeUser.userId,
  activities: state.trips.activities,
  activeLocationId: state.trips.activeLocationId,
});

const ActivitiesContainer = (props) => {
  // note, this is the use of React Hooks below. Typically, we wouldn't use
  // hooks in a redux application, because we want all state in the store.
  // however, we chose to use a hook here for this one piece of the application
  const [showModal, setShowModal] = useState(false);
  const {
    description,
    notes,
    address,
    link,
    completed,
    userId,
    handleFormInput,
    handleFormSubmit,
    addToActivitiesArray,
    activities,
    activeLocationId,
  } = props;

  return (
    <div id='large-activity-container'>
      <ActivityFormModal
        show={showModal}
        onHide={() => setShowModal(false)}
        description={description}
        notes={notes}
        address={address}
        link={link}
        userId={userId}
        handleFormInput={handleFormInput}
        handleFormSubmit={handleFormSubmit}
        addActivity={addToActivitiesArray}
        activeLocationId={activeLocationId}
      />
      <h1>Activities: </h1>
      <div id='all-activities'>
        <Button onClick={() => setShowModal(true)}>Add Activity</Button>
        {activities.map((el, i) => (
          <Activity
            key={`activity${i}`}
            description={el.description}
            notes={el.notes}
            address={el.address}
            link={el.link}
          />
        ))}
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivitiesContainer);
