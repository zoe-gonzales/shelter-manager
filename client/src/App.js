import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
// import "./App.css";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
import LandingPage from "./components/LandingPage/LandingPage";// Landing Page is Animal Page
import AddAnimalForm from './components/AddAnimalForm';
import AddMedicalForm from './components/AddMedicalForm';
import Navigator from './components/Nav/Nav';
import Header from './components/Jumbotron/Jumbotron';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
  

class App extends Component {
  render() {
    return (
     
      <Router >
       <Navigator/>
       <NavBar/>
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
