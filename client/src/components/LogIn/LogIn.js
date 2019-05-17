import React, { Component } from "react";
import "./LogIn.css";
import { Link } from "react-router-dom";

class LogIn extends Component {
    state={
        email: "",
        password: ""
    }

handleInputChange = (event) => {
    const  {
        name, value
    } = event.target
    this.setState ({[name]: value})
}

handleLogIn = () => {
    const {
        email, password
    } = this.state
    console.log({email, password})
    // axios call
}

    render() {


        return(
            <div className="LogInContainer">
                <h1>This is the Log In page</h1>
                <div className="LogInCard">
                    <input name="email" value={this.state.email} placeholder="email.com" onChange={this.handleInputChange}/>
                    <input name="password" value={this.state.password} placeholder="password" onChange={this.handleInputChange}/>
                    <button><Link to="/signup" role="button" >
     Signup
                    </Link></button>
                    <button onClick={this.handleLogIn}>Log In</button>
                </div>
            </div>
        )
    }


}

export default LogIn;