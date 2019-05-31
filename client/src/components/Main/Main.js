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
       .then(res => { this.setState({ animalsList: res.data }) })
       .catch(error => console.log(error));
  }

  render() {
    return (
      <div id="ll" className="container">
        <Find />
        <br />
        {this.state.animalsList.map(animal => {
          let image;
          let type = animal.animalType;
          switch(type) {
            case "cat":
              image = "./images/cat.jpg";
            break;
            case "dog":
              image = "./images/dog.jpg";
            break;
            default:
              image = "./images/misc.jpg";
            break;
          }
          return  <ImageHome animal={animal} key={animal._id} src={image}/> ;
        })}
      </div>
    )
  }
}

export default Main;