import React from "react";

import "../LandingPage/ImageCard.css"
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

function ImageHome() {

  return (

    <CardDeck>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Name</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
      </Card.Text>
        </Card.Body>

      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Name</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to additional
        content.{' '}
          </Card.Text>
        </Card.Body>

      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Name</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This card has even longer content than the first to
            show that equal height action.
      </Card.Text>
        </Card.Body>

      </Card>
    </CardDeck>

  )

}

export default ImageHome;