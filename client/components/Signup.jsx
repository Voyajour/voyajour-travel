import React from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import * as actions from '../actions/actions';

const mapStateToProps = (state) => ({
  firstName: state.form.signUp.firstName,
  email: state.form.signUp.email,
  username: state.form.signUp.username,
  password: state.form.signUp.password,
  confirmedPassword: state.form.signUp.confirmedPassword,
});

const mapDispatchToProps = (dispatch) => ({
  handleSubmitSignup: (newState) =>
    dispatch(actions.submitSignupForm(newState)),
  handleInput: (eventObj) => dispatch(actions.signupFormInput(eventObj)),
});

const Signup = ({
  firstName,
  email,
  username,
  password,
  confirmedPassword,
  handleInput,
  handleSubmitSignup,
}) => {
  const userInput = { firstName, email, username, password, confirmedPassword };
  return (
    <>
      <Container>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmitSignup(userInput);
          }}
        >
          <Form.Group controlId="firstNameInput">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="firstName"
              type="text"
              placeholder="Enter First Name"
              onChange={(e) => {
                handleInput(e.target);
              }}
            />
          </Form.Group>
          <Form.Group controlId="emailInput">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter Email"
              onChange={(e) => {
                handleInput(e.target);
              }}
            />
          </Form.Group>
          <Form.Group controlId="usernameInput">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              type="text"
              placeholder="Enter Username"
              onChange={(e) => {
                handleInput(e.target);
              }}
            />
          </Form.Group>
          <Form.Group controlId="passwordInput">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Enter Password"
              onChange={(e) => {
                handleInput(e.target);
              }}
            />
          </Form.Group>
          <Form.Group controlId="confirmPasswordInput">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              name="confirmedPassword"
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => {
                handleInput(e.target);
              }}
            />
          </Form.Group>
          <Button variant="outline-danger" type="submit">
            Sign Up
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
