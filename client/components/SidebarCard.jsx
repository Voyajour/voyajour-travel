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
    deleteLocationCard,
  } = props;
  return (
    <button
      type='button'
      locationid={locationid}
      onClick={() => getActivities(locationid)}
      className='side-bar-card'
      style={{
        backgroundColor: locationid === activeLocationId ? 'blue' : 'white',
      }}
    >
      <BsX
        className='delete-icon-location'
        onClick={() => deleteLocationCard(locationid, userId)}
      />
      <label>Location: {location}</label>
      <br />
      <label>Country: {country}</label>
    </button>
  );
};

export default SidebarCard;
