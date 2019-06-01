import React from "react";
import "../Nav/Nav.css"
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import {Link, withRouter} from 'react-router-dom';
import auth0Client from '../../Auth';


function Navigator(props) {
  const signOut = () => {
    auth0Client.signOut();
    props.history.replace('/');
  };
  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

      <img
        src={require('../../images/logo.jpg')}
        width="60"
        height="60"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />

      <Navbar.Brand href="/main">
        {/* Journey's Shelter Management Application */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/main">Home</Nav.Link>
          <Nav.Link href="/add/animal">Add Animal</Nav.Link>
          <NavDropdown title="Donation" id="basic-nav-dropdown">
            <NavDropdown.Item href="/donate/material">Material Donations</NavDropdown.Item>
            <NavDropdown.Item href="/donate/money">Monetary Donations</NavDropdown.Item>
            <NavDropdown.Item href="/donations">View Donations</NavDropdown.Item>
          </NavDropdown>
        </Nav>
          {
            !auth0Client.isAuthenticated() &&
            <button className="btn btn-dark" onClick={auth0Client.signIn}>Sign In</button>
          }
          {
            auth0Client.isAuthenticated() &&
            <div>
              <label className="mr-2 text-white">{auth0Client.getProfile().name}</label>
              <button className="btn btn-dark" onClick={() => {signOut()}}>Sign Out</button>
            </div>
          }
      </Navbar.Collapse>
      </Navbar>
  );

}

export default withRouter(Navigator);