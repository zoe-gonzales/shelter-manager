import React, { Component } from "react";
import Find from "./Search";
import ImageHome from "./ImageCard";
import API from '../../utils/API';




class Main extends Component {
  state = {
    animalsList: []
  }

  componentDidMount() {
    API.getAllAnimals()
       .then(res => {
         console.log(res.data);
         this.setState({ animalsList: res.data });
       })
       .catch(error => console.log(error));
  }

  render() {
    return (
      <div id="ll"className="container">
        <Find />
        <br />
        <ImageHome animalsList={this.state.animalsList} />
  
        {/* <h1>This is the main page after sign-in or sign-up(Animal Page)</h1> */}
      </div>
    )
  }
}

export default Main;