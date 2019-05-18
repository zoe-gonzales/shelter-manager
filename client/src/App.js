import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
// import "./App.css";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
import Main from "./components/Main/Main";// Landing Page is Animal Page
import AddAnimalForm from './components/AddAnimalForm';
import AddMedicalForm from './components/AddMedicalForm';
import Navigator from './components/Nav/Nav';
import Header from './components/Jumbotron/Jumbotron';
import Footer from './components/Footer/Footer';
  

class App extends Component {
  render() {
    return (
     
      <Router >
       <Navigator/>
       <Header/>
        
        <Switch>
        <Route exact path="/"  component={Main} />
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
