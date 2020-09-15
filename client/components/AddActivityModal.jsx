import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// here, we are destructering the props object in the paramete itself
// this would be the same thing as doing const { show, ... etc} = props
const AddActivityModal = ({
  show,
  onHide,
  description,
  notes,
  address,
  link,
  handleFormInput,
  handleFormSubmit,
  addActivity,
}) => {
  // Note, React Hook used below
  const [inputValues, setInputValues] = useState([]);

  return (
    <Modal size="lg" centered show={show}>
      <Modal.Header>
        <Modal.Title>Add Activity</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            handleFormSubmit({ description, notes, address, link });
            addActivity({ description, notes, address, link });
          }}
        >
          <Form.Group controlId="activityDescription">
            <Form.Label>Activity Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              onChange={(e) => handleFormInput(e.target)}
            />
          </Form.Group>
          <Form.Group controlId="activityNotes">
            <Form.Label>Notes</Form.Label>
            <Form.Control
              name="notes"
              as="textarea"
              onChange={(e) => handleFormInput(e.target)}
            />
          </Form.Group>
          <Form.Group controlId="activityAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              name="address"
              type="text"
              onChange={(e) => handleFormInput(e.target)}
            />
          </Form.Group>
          <Form.Group controlId="activityLink">
            <Form.Label>Link a URL to relevant info</Form.Label>
            <Form.Control
              name="link"
              type="url"
              onChange={(e) => handleFormInput(e.target)}
            />
          </Form.Group>

          <Button
            variant="danger"
            type="submit"
            className="mt-4"
            onClick={() => onHide()}
          >
            Add Activity
          </Button>
          <Button
            variant="outline-danger"
            className="mt-4 ml-2"
            onClick={() => onHide()}
          >
            Cancel
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddActivityModal;
