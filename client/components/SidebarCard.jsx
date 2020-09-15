import React from 'react';
// this is a good component to start with while trying to understand how
// state is flowing in this application
const SidebarCard = (props) => {
  const { tripId, location, country, getActivities } = props;
  return (
    <button
      type="button"
      tripid={tripId}
      onClick={() => getActivities(tripId)}
      className="side-bar-card"
    >
      <label>Location: {location}</label>
      <br />
      <label>Country: {country}</label>
    </button>
  );
};

export default SidebarCard;
