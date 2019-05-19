import React from "react";

import "../Main/ImageCard.css"
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';

function ImageHome(props) {
  return (
    <CardDeck>
      {props.animalsList.map(animal => {
        console.log(animal);
        return (
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>{animal.name}</Card.Title>
              <Card.Text>{animal.animalType}</Card.Text>
              <Card.Text>Spayed/Neutered: {animal.spayNeuter}</Card.Text>
              <Card.Text>Notes: {animal.notes}</Card.Text>
              <Card.Text>
              <Button variant="info" href={"/animal/" + animal._id}>More details</Button>
              </Card.Text>
            </Card.Body>
          </Card>
        )
      })}
      </CardDeck>
    //   <Card>
    //     <Card.Img variant="top" src="holder.js/100px160" />
    //     <Card.Body>
    //       <Card.Title>Name</Card.Title>
    //       <Card.Text>
    //         This is a wider card with supporting text below as a natural lead-in to
    //         additional content. This content is a little bit longer.
    //   </Card.Text>
    //     </Card.Body>

    //   </Card>
    //   <Card>
    //     <Card.Img variant="top" src="holder.js/100px160" />
    //     <Card.Body>
    //       <Card.Title>Name</Card.Title>
    //       <Card.Text>
    //         This card has supporting text below as a natural lead-in to additional
    //     content.{' '}
    //       </Card.Text>
    //     </Card.Body>

    //   </Card>
    //   <Card>
    //     <Card.Img variant="top" src="holder.js/100px160" />
    //     <Card.Body>
    //       <Card.Title>Name</Card.Title>
    //       <Card.Text>
    //         This is a wider card with supporting text below as a natural lead-in to
    //         additional content. This card has even longer content than the first to
    //         show that equal height action.
    //   </Card.Text>
    //     </Card.Body>

    //   </Card>
    // </CardDeck>

  )

}

export default ImageHome;