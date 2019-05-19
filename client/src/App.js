import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from "./logo.svg";
// import "./App.css";
<<<<<<< HEAD
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
import Main from "./components/Main/Main";// Landing Page is Animal Page
=======
import Main from "./components/Main/Main";// Main is Animal Page
>>>>>>> 2cf3eabdc301a6f4ec68316bc2606b4b75e51f56
import AddAnimalForm from './components/AddAnimalForm';
import AddMedicalForm from './components/AddMedicalForm';
import Navigator from './components/Nav/Nav';
import Header from './components/Jumbotron/Jumbotron';
import Footer from './components/Footer/Footer';
import WelcomePage from './components/WelcomePage/WelcomePage';
import Callback from './components/Callback/Callback';
import MaterialDonationForm from './components/MaterialDonationForm';
  

class App extends Component {
  render() {
    return (
     
      <Router >
       <Navigator/>
       <Header/>
        
        <Switch>
        <Route exact path="/"  component={WelcomePage} />
        <Route exact path='/callback' component={Callback}/>
<<<<<<< HEAD
        <Route exact path="/"  component={Main} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/signup" component={SignUp} />
=======
        <Route exact path="/main"  component={Main} />
>>>>>>> 2cf3eabdc301a6f4ec68316bc2606b4b75e51f56
        <Route exact path="/add/animal" component={AddAnimalForm}/>
        <Route exact path="/add/medical" component={AddMedicalForm}/>
        <Route exact path="/donate/material" component={MaterialDonationForm}/>
        </Switch>

      <Footer/>
      </Router>
    );
  }
}

export default App;
