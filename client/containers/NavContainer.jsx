//  eslint-disable react/prop-types
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const NavContainer = (props) => {
  return (
    <Navbar className='nav-bar'>
      <Navbar.Brand>
        <h2>Voyajour</h2>
      </Navbar.Brand>
      <Button variant='dark' id='sign-out'>
        Sign out
      </Button>
    </Navbar>
  );
};

export default NavContainer;
