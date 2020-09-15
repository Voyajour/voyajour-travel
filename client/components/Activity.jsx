import React from 'react';

const Activity = ({ description, notes, address, link }) => (
  <div id="Activity">
    Description: {description}
    <br/>
    Notes: {notes}
    <br/>
    Address: {address}
    <br/>
    Link: {link}
  </div>
);

export default Activity;
