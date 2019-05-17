import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
// import "./App.css";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
import LandingPage from "./components/LandingPage/LandingPage";// Landing Page is Animal Page
import AddAnimalForm from './components/AddAnimalForm';
import AddMedicalForm from './components/AddMedicalForm';
import Navigator from './components/LandingPage/Nav';
import Header from './components/LandingPage/Jumbotron';
import Footer from './components/LandingPage/Footer';


class App extends Component {
  render() {
    return (
     
      <Router >
       <Navigator/>
       <Header/>
        
        <Switch>
        <Route exact path="/"  component={LandingPage} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/add/animal" component={AddAnimalForm}/>
        <Route exact path="/add/medical" component={AddMedicalForm}/>
        </Switch>

      <Footer/>
      </Router>
    );
  }
}

export default App;
