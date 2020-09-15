//  eslint-disable react/prop-types 
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const NavContainer = (props) => {
    return (
        <Navbar bg="light" className="nav-bar" >
            <Navbar.Brand><h2>Travelist</h2></Navbar.Brand>
            <Button variant="dark" id="sign-out">Sign out</Button>
        </Navbar>
    )
}

export default NavContainer;