import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main/Main";
import AddAnimalForm from './components/AddAnimalForm';
import AddMedicalForm from './components/AddMedicalForm';
import Navigator from './components/Nav/Nav';
import Header from './components/Jumbotron/Jumbotron';
import Footer from './components/Footer/Footer';
import WelcomePage from './components/WelcomePage/WelcomePage';
import Callback from './components/Callback/Callback';
import MaterialDonationForm from './components/MaterialDonationForm';
import MoneyDonationForm from './components/MoneyDonationForm';
import AnimalInfoPage from './components/AnimalInfoPage';
import DonationsView from './components/DonationsView';
  

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
        <Route exact path="/animal/:id" component={AnimalInfoPage}/>
        <Route exact path="/add/animal" component={AddAnimalForm}/>
        <Route exact path="/add/medical/:id" component={AddMedicalForm}/>
        <Route exact path="/donate/material" component={MaterialDonationForm}/>
        <Route exact path="/donate/money" component={MoneyDonationForm}/>
        <Route exact path="/donations" component={DonationsView}/>
        </Switch>

      <Footer/>
      </Router>
    );
  }
}

export default App;
