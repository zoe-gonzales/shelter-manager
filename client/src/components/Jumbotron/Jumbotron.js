import React from "react";
import "../Jumbotron/Jumbotron.css";
// import Jumbotron from 'react-bootstrap/Jumbotron'
// import Container from 'react-bootstrap/Container'
<<<<<<< HEAD
// import { Navbar, Nav, NavDropdown, Jumbotron, Form, FormControl, Button,Container } from "react-bootstrap";
import {Jumbotron,Container } from "react-bootstrap";
=======
import { Navbar, Nav, NavDropdown, Jumbotron, Button, Container } from "react-bootstrap";
>>>>>>> 2cf3eabdc301a6f4ec68316bc2606b4b75e51f56


function Header() {

  return (

    <Jumbotron fluid>
      <Container>
        <h1>Journey's Shelter Management Application</h1>

      </Container>
    </Jumbotron>
  )
}

export default Header;