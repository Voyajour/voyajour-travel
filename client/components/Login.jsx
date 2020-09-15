import React from 'react';
import { connect } from 'react-redux';
// react router allows for redirects to happen inside the component
import { Link, Redirect } from 'react-router-dom';
// importing the entire react bootstrap library is heavy on the system
// only import necessary libraries from react bootstrap as shown below
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import * as actions from '../actions/actions.js';

// loginInput updates state with whatever is typed in the username or password inputs
// validateLogin checks if a user is in the database and compares the inputted password
// with the decrypted password in the database.
// validateLogin returns true or false
const mapDispatchToProps = (dispatch) => ({
  loginInput: (e) => dispatch(actions.loginInput(e)),
  validateLogin: (u, p) => dispatch(actions.validateLogin(u, p)),
});

// valdiated is true or false and measures whether the inputted username and password is correct
// username is the username in state based on the written input
// password is the password in state based on the written input
// loginAttempts measures how many times a user has attempted to login
const mapStateToProps = (state) => ({
  validated: state.form.login.validated,
  username: state.form.login.username,
  password: state.form.login.password,
  loginAttempts: state.form.login.loginAttempts,
});

const Login = (props) => {
  const {
    validated,
    loginInput,
    validateLogin,
    username,
    password,
    loginAttempts,
  } = props;

  // check if username and password are correct, if so redirect to /main
  if (validated === true) return <Redirect to="/main" />;
  // check if user has clicked login button, if so redirect to /signup
  if (loginAttempts > 0) return <Redirect to="/signup" />;

  return (
    <Container>
      <h1>Travelist</h1>

      <Form noValidate>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            required
            onChange={loginInput}
          />
          <Form.Control.Feedback type="invalid">
            Incorrect Username
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            onChange={loginInput}
          />
          <Form.Control.Feedback type="invalid">
            Incorrect Password
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="loginCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>

        <Button
          className="mr-3"
          variant="danger"
          type="button"
          onClick={() => validateLogin(username, password)}
        >
          Login
        </Button>
      </Form>

      <br />
      <p className="text-center">
        New user?&nbsp;
        <Link to="/signup">Sign up here!</Link>
      </p>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
