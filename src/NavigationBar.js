import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto navbar bg-danger">

          <NavDropdown title="Home" id="basic-nav-dropdown">
            <NavDropdown.Item href="#home1">Home 1</NavDropdown.Item>
            <NavDropdown.Item href="#home2">Home 2</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#home3">Home 3</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="About" id="basic-nav-dropdown">
            <NavDropdown.Item href="#about1">About 1</NavDropdown.Item>
            <NavDropdown.Item href="#about2">About 2</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#about3">About 3</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Services" id="basic-nav-dropdown">
            <NavDropdown.Item href="#service1">Service 1</NavDropdown.Item>
            <NavDropdown.Item href="#service2">Service 2</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#service3">Service 3</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Contact" id="basic-nav-dropdown">
            <NavDropdown.Item href="#contact1">Contact 1</NavDropdown.Item>
            <NavDropdown.Item href="#contact2">Contact 2</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#contact3">Contact 3</NavDropdown.Item>
          </NavDropdown>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;


