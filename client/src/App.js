import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
// import "./App.css";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
import LandingPage from "./components/LandingPage/LandingPage";// Landing Page is Animal Page
import AddAnimalForm from './components/AddAnimalForm';
import AddMedicalForm from './components/AddMedicalForm';

class App extends Component {
  render() {
    return (
      <Router >
        
        <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/add" component={AddAnimalForm}/>
        <Route exact path="/medical" component={AddMedicalForm}/>
        </Switch>

      </Router>
    );
  }
}

export default App;
