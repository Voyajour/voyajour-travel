import React from 'react';
import { BsX } from 'react-icons/bs';

const Activity = ({
  description,
  notes,
  address,
  link,
  activityId,
  userId,
  removeActivityCard,
}) => (
  <div id='Activity'>
    <div className='delete-icon' onClick={() => removeActivityCard(activityId)}>
      <BsX />
    </div>
    Description: {description}
    <br />
    Notes: {notes}
    <br />
    Address: {address}
    <br />
    Link: {link}
  </div>
);

export default Activity;
