import React from 'react'
import {
    Navbar, Nav, NavDropdown
  } from 'react-bootstrap';
  import logo from './img/LOGO.png';
function Header()
{
    return(
        <Navbar className="color-nav" expand="lg" variant="dark" fixed="top">
  <Navbar.Brand href="/" class="logo"><img src={logo} width="80px" /></Navbar.Brand>
  <div className="logo mr-auto d-none d-md-block" id="name"><h2>Web And Design</h2></div>
            <div className="logo mr-auto d-md-none" id="name"><h6>Web And Design</h6></div>
  <Navbar.Toggle />
  <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="ml-auto" id="links">
      <Nav.Link href="/">HOME</Nav.Link>
      <Nav.Link href="/Events">EVENTS</Nav.Link>
      <Nav.Link href="/Showcase">SHOWCASE</Nav.Link>
  </Nav>
    
  </Navbar.Collapse>
</Navbar>
    )
}
export default Header;