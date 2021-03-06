import React, { Component } from "react";
import Find from "../Main/Search";
import ImageHome from "../Main/ImageCard";
import API from '../../utils/API';

class Main extends Component {
  state = {
    animalsList: [],
    searchTerm: ''
  }

  componentDidMount = () => {
    this.getAllAnimals();
  }

  getAllAnimals = () => {
    API.getAllAnimals()
       .then(res => { this.setState({ animalsList: res.data }) })
       .catch(error => console.log(error));
  }

  handleInputChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      if (this.state.searchTerm === '') {
        this.getAllAnimals();
      }
    });
    
  }

  handleSubmit = e => {
    e.preventDefault();
    this.state.animalsList.filter(animal => {
      if (animal.name === this.state.searchTerm) {
        this.setState({ animalsList: [animal] });
      }
    });
  }

  render() {
    return (
      <div id="ll" className="container">
        <Find value={this.state.searchTerm} onChange={e => this.handleInputChange(e)} onClick={this.handleSubmit}/>
        <br />
        {this.state.animalsList.map(animal => {
          let image;
          let type = animal.animalType;
          switch(type) {
            case "cat":
            case "Cat":
              image = "./images/cat.jpg";
            break;
            case "dog":
            case "Dog":
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