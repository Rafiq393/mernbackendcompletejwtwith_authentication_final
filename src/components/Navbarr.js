import React from 'react';

//import {Link} from 'react-router-dom';
import  './Navbar.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';


const  Navbarr=()=> {
  return (
  
        <Navbar bg="dark" variant="dark" expand="lg" id='nav'>
      <Container>
        <Navbar.Brand href="#home"><img src='images/logo.jpeg' id='logo' alt='logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="About">About</Nav.Link>
           
           
            <Nav.Link href="Register">Contact Us</Nav.Link>
           
            <Nav.Link href="Login">Login</Nav.Link>
            
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            {/* <Nav.Link  className='admin' href="login">Login</Nav.Link> */}
            
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
  );
}

export default Navbarr;