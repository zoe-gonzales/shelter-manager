import React from "react";
import "../Nav/Nav.css"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


// export default Nav;

function Navigator() {
  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

      <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>

        </Nav>

      </Navbar.Collapse>
    </Navbar>

  );

}

export default Navigator;