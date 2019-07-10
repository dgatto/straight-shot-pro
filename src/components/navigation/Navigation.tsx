import React, { Component } from "react";
import { Image, Nav, Navbar, NavDropdown } from "react-bootstrap";

interface PassedProps {
  url: string;
}

type Props = PassedProps;

export class Navigation extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="navigation-bar">
        <Navbar id="nav" bg="light" expand="lg">
          <Navbar.Collapse id="nav-dropdown">
            <Nav>
              <NavDropdown src="../../assets/logo.svg" title={<NavBarImage/>} id="basic-nav-dropdown">
                <NavDropdown.Item href={this.props.url + "/home"}>Home</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href={this.props.url + "/gallery"}>Gallery</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href={this.props.url + "/about"}>About</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href={this.props.url + "/testimonials"}>Testimonials</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href={this.props.url + "/contact"}>Book Me</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
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
