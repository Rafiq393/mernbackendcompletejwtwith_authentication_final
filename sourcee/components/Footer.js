import React from 'react';


//import {Link} from 'react-router-dom';
import  './Footer.css';

// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';


const  Footer=()=> {
  return (
  
        <Navbar bg="dark" variant="dark" expand="lg" id='nav'>
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/"></Nav.Link>
            <Nav.Link href="About"></Nav.Link>
            <Nav.Link href="Leadership"></Nav.Link>
            <Nav.Link href="issues"></Nav.Link>
            
           
            <Nav.Link href="#lcontactus" id='footer'> Powered by Softwallet Algorithms Pvt.Ltd  © 2022 All right reserved</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
  );
}

export default Footer;