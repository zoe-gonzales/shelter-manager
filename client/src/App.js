import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from "./logo.svg";
// import "./App.css";
import Main from "./components/Main/Main";// Main is Animal Page
import AddAnimalForm from './components/AddAnimalForm';
import AddMedicalForm from './components/AddMedicalForm';
import Navigator from './components/Nav/Nav';
import Header from './components/Jumbotron/Jumbotron';
import Footer from './components/Footer/Footer';
import WelcomePage from './components/WelcomePage/WelcomePage';
import Callback from './components/Callback/Callback';
  

class App extends Component {
  render() {
    return (
     
      <Router >
       <Navigator/>
       <Header/>
        
        <Switch>
        <Route exact path="/"  component={WelcomePage} />
        <Route exact path='/callback' component={Callback}/>
        <Route exact path="/main"  component={Main} />
        <Route exact path="/add/animal" component={AddAnimalForm}/>
        <Route exact path="/add/medical" component={AddMedicalForm}/>
        </Switch>

      <Footer/>
      </Router>
    );
  }
}

export default App;
