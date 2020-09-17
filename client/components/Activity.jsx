import React from 'react';
import { BsX } from 'react-icons/bs';

const Activity = ({ description, notes, address, link }) => (
  <div id='Activity'>
    <BsX className='delete-icon' />
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
