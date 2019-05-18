import React, { Component } from 'react';
import { Link, history, Redirect, Route, Switch, Router } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Jumbotron, Form, FormControl, Button } from 'react-bootstrap';
import axios from "axios";
import "./LogIn.css";
import 'bootstrap/dist/css/bootstrap.css';



class LogIn extends Component {
   constructor(props){
        super(props)
        this.state = {
            shouldLogin:false,
            shouldUpdate : true
        };
        this.handleLogIn = this.handleLogIn.bind(this);
   }


   shouldRunConditionalLink = () => {
    debugger;
    console.log("shouldRun from conditional()");
   }
shouldComponentUpdate(nextProps, nextState)
{
    debugger;
    console.log("");
    return nextState.shouldUpdate;
}

handleInputChange = (event) => {
    const {
        name, value
    } = event.target
    this.setState ({[name]: value})
}

handleLogIn = (event) => {
    debugger;
    event.preventDefault();
    this.setState({testFlag : false, shouldUpdate: false});
     let idNode = event.target[0];
     let passNode = event.target[1];
    //test for empty fields 
     if((idNode == null) || (passNode == null) || 
         (idNode.value == "") || (passNode.value == ""))
     {
         debugger;
         console.log("Please enter username & password!");
         event.preventDefault();
        //prevent route 
     }else{
         let url = "https://reqres.in/api/users";
         let loginTestBool = true;
         let that = this;

         axios.get(url)
         .then(function (response) {
             debugger;
             // handle success
             console.log("response: (not here yet)");
             //if cred. are valid allow login, nav to landing page 
             //shouldLogin : Bool will conditionally render landing page
             if(loginTestBool)
             {
                 debugger;
                 let msg = "Welcome Back! :)";
                 console.log(msg);
                 that.setState({shouldLogin: true,
                shouldUpdate: true});

                
                 
             }else{
                 let msg = "Wrong Username Or Password!"
                 console.log(msg);
                 that.setState({shouldLogin: false});
                 
             }

         })
         .catch(function (error) {
             // handle error
             console.log(error);
         })
         .finally(function () {
             // always executed
         });
     }
 }

 render() {
    debugger;
    if(this.state.shouldLogin)
    {
        return <Redirect to="/" />;
    }

     return(
         <div className="LogInContainer">
             

             <Navbar bg="light" expand="lg">
                 <Navbar.Brand href="#home">Journey's Shelter Management Application</Navbar.Brand>
                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
                 <Navbar.Collapse id="basic-navbar-nav">
                 <Nav className="mr-auto">
                 <Nav.Link href="#home">Home</Nav.Link>
                 <Nav.Link href="#link">Link</Nav.Link>
                 <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                 <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                 <NavDropdown.Divider />
                 <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                 </NavDropdown>
                 </Nav>
                 <Form inline>
                 <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                 <Button variant="outline-success">Search</Button>
                 </Form>
                 </Navbar.Collapse>
             </Navbar>
             <Form onSubmit={this.handleLogIn}>
               <Form.Group controlId="formBasicEmail" onSubmit={this.handleLogIn}>
                 <Form.Label>Email address</Form.Label>
                 <Form.Control id="emailLabel" type="email" placeholder="Enter email"/>
                 {/* <Form.Text className="text-muted">
                   We'll never share your email with anyone else.
                 </Form.Text> */}
               </Form.Group>
               <Form.Group controlId="formBasicPassword">
                 <Form.Label>Password</Form.Label>
                 <Form.Control type="password" placeholder="Password" />
               </Form.Group>
               {/* <Form.Group controlId="formBasicChecbox">
                 <Form.Check type="checkbox" label="Check me out" />
               </Form.Group> */}
                <Button  variant="primary" type="submit">Log In</Button>
               <Button  variant="danger" type="submit">Sign Up</Button>
             </Form>
         </div>
     )
 }


}



export default LogIn;