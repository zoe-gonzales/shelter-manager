import React from "react";
import "../LandingPage/Search.css"
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'


function Find() {

  return (
    <Form inline>
      <FormControl size="lg" type="text" placeholder="Search for animal" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  )
}

export default Find;