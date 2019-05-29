import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import API from '../../utils/API';
import ImageUploader from 'react-images-upload';
import './style.css';


class InputForm extends Component {
    state = {
        name: '',
        age: '',
        type: '',
        spayNeuter: 'No',
        vaccinations: '',
        schedule: '',
        notes: '',
        picture: ''
    }

    onDrop = (picture, file) => {
        console.log(picture)
        console.log(file);
        this.setState({
            picture: file[0]
        });
    }

    handleInputChange = event => {
        let { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = event => {
        event.preventDefault();
        const animal = {
            name: this.state.name,
            animalType: this.state.type,
            age: parseInt(this.state.age),
            spayNeuter: this.state.spayNeuter,
            vaccinations: this.state.vaccinations,
            schedule: this.state.schedule,
            notes: this.state.notes,
            image: this.state.picture
        }
        API.createAnimal(animal)
           .then(res => {
                console.log(res)
           })
           .catch(error => console.log(error));

        this.setState({
            name: '',
            age: '',
            type: '',
            spayNeuter: 'No',
            vaccinations: '',
            schedule: '',
            notes: '',
            picture: ''
        });
    }

    render() {
        return (
            <Form className="input-form" encType="multipart/form-data">
                {/* Animal Name */}
                <Form.Group controlId="Form.Name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleInputChange}/>
                </Form.Group>
                {/* Animal Type */}
                <Form.Group controlId="Form.Type">
                    <Form.Label>Type</Form.Label>
                    <Form.Control type="text" name="type" value={this.state.type} onChange={this.handleInputChange}/>
                </Form.Group>
                {/* Animal Age */}
                <Form.Group controlId="Form.Age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="text" name="age" value={this.state.age} onChange={this.handleInputChange}/>
                </Form.Group>
                {/* Spay/Neuter */}
                <Form.Group controlId="Form.SpayNeuter">
                    <Form.Label>Spay/Neuter</Form.Label>
                    <Form.Control as="select" name="spayNeuter" value={this.state.spayNeuter} onChange={this.handleInputChange}>
                    <option>Yes</option>
                    <option>No</option>
                    </Form.Control>
                </Form.Group>
                {/* Vaccinations */}
                <Form.Group controlId="Form.Vaccinations">
                    <Form.Label>Vaccinations</Form.Label>
                    <Form.Control as="textarea" name="vaccinations" rows="3" value={this.state.vaccinations} onChange={this.handleInputChange}/>
                </Form.Group>
                {/* Schedule */}
                <Form.Group controlId="Form.Schedule">
                    <Form.Label>Schedule</Form.Label>
                    <Form.Control as="textarea" rows="3" name="schedule" value={this.state.schedule} onChange={this.handleInputChange}/>
                </Form.Group>
                {/* Notes */}
                <Form.Group controlId="Form.Notes">
                    <Form.Label>Notes</Form.Label>
                    <Form.Control as="textarea" rows="3" name="notes" value={this.state.notes} onChange={this.handleInputChange}/>
                </Form.Group>
                {/* Uploading image */}
                <ImageUploader
                withIcon={true}
                buttonText='Choose image'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                />
                <Button className="btn" variant="info" type="submit" onClick={this.handleSubmit}>Add Animal</Button>

            </Form>
        );
    }
}

export default InputForm;