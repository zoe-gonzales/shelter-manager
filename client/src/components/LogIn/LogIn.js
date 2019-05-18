import React, { Component } from 'react';
import { Link, history, Redirect, Route, Switch, Router } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Jumbotron, Form, FormControl, Button } from "react-bootstrap";
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