import React, { Component } from "react";
import Find from "../Main/Search";
import ImageHome from "../Main/ImageCard";
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
      <div id="ll" className="container">
        <Find />
        <br />
        {this.state.animalsList.map(animal => {
          return <ImageHome animal={animal} />;
        })}
        {/* <h1>This is the main page after sign-in or sign-up(Animal Page)</h1> */}
      </div>
    )
  }
}

export default Main;