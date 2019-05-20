import React from "react";
import "../Jumbotron/Jumbotron.css";
// import Jumbotron from 'react-bootstrap/Jumbotron'
// import Container from 'react-bootstrap/Container'
// import { Navbar, Nav, NavDropdown, Jumbotron, Form, FormControl, Button,Container } from "react-bootstrap";
import {Jumbotron,Container } from "react-bootstrap";


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