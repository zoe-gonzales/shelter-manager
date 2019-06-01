import React from "react";
import "../Jumbotron/Jumbotron.css";
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