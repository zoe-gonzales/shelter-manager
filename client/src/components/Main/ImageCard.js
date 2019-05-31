import React from "react";
import "../Main/ImageCard.css"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ImageHome(props) {
  return (
      <Card>
        <Card.Img variant="top" src={props.src} />
        <Card.Body>
          <Card.Title>{props.animal.name}</Card.Title>
          <Card.Text>{props.animal.animalType}</Card.Text>
          <Card.Text>Spayed/Neutered: {props.animal.spayNeuter}</Card.Text>
          <Card.Text>Notes: {props.animal.notes}</Card.Text>
          <Card.Text>
            <Button variant="info" href={"/animal/" + props.animal._id}>More details</Button>
          </Card.Text>
        </Card.Body>
      </Card>
  )
}

export default ImageHome;