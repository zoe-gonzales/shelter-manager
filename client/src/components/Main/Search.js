import React from "react";
import "../Main/Search.css"
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'


function Find({ 
  searchTerm, 
  onChange,
  onClick
 }) {

  return (
    <Form inline>
      <FormControl size="lg" type="text" placeholder="Search for animal" className="mr-sm-2" name="searchTerm" value={searchTerm} onChange={onChange}/>
      <Button variant="outline-success" type="submit" onClick={onClick}>Search</Button>
    </Form>
  )
}

export default Find;