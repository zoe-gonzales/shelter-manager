import React from "react";
import "../LandingPage/Jumbotron.css"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'


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