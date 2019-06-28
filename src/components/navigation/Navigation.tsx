import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';

interface PassedProps {}

type Props = PassedProps;

export class Navigation extends Component {

  constructor(props: Props) {
    super(props);
  }

  render() {

    let url = window.URL;
    return (
      <Navbar id="nav" bg="light" expand="lg">
      <Navbar.Collapse id="nav-dropdown">
        <Nav>
          <NavDropdown src="../../assets/logo.svg" title={<NavBarImage/>} id="basic-nav-dropdown">
            <NavDropdown.Item href="/home">Home</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/gallery">Gallery</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/about">About</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/testimonials">Testimonials</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/contact">Book Me</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}

class NavBarImage extends React.Component {
  render() {
    return (
      <Image
        src={require('../../assets/logo.svg')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}

export default Navigation;
