import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const NewPlans = (props) => {
  const {
    newLocationInput, country, location, addNewPlans,
  } = props;
  return (
    <div id="new-plans-container">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          addNewPlans({ location, country });
        }}
        className="itinerary-form"
      >
        <Form.Group controlId="formLocation">
          <Form.Label>New Location:</Form.Label>
          <Form.Control
            name="newLocation"
            type="text"
            placeholder=""
            onChange={(e) => newLocationInput(e.target)}
          />
        </Form.Group>
        <Form.Group controlId="formCountry">
          <Form.Label>Country:</Form.Label>
          <Form.Control
            name="country"
            type="text"
            placeholder=""
            onChange={(e) => newLocationInput(e.target)}
          />
        </Form.Group>
        <Button type="submit" variant="secondary" id="new-plans">Make new plans</Button>
      </Form>
    </div>
  );
};

export default NewPlans;
