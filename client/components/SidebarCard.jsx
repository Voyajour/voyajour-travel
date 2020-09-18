import React from 'react';
import { BsX } from 'react-icons/bs';
// this is a good component to start with while trying to understand how
// state is flowing in this application
const SidebarCard = (props) => {
  const {
    locationid,
    location,
    country,
    getActivities,
    activeLocationId,
    userId,
    removeLocationCard,
  } = props;
  return (
    <button
      type='button'
      onClick={() => getActivities(locationid)}
      className='side-bar-card'
      style={{
        backgroundColor: locationid === activeLocationId ? '#007bff' : 'white',
        color: locationid === activeLocationId ? 'white' : 'black',
      }}
    >
      <div
        className='delete-icon-location'
        onClick={() => removeLocationCard(locationid, userId)}
      >
        <BsX />
      </div>
      <label>Location: {location}</label>
      <br />
      <label>Country: {country}</label>
    </button>
  );
};

export default SidebarCard;
