import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './style.css';

class InputForm extends Component {
    state = {
        name: '',
        type: '',
        spayNeuter: 'No',
        vaccinations: '',
        schedule: '',
        notes: ''
    }

    handleInputChange = event => {
        let { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = event => {
        event.preventDefault();
        // this is where data from state will be added to db via create method
    }

    render() {
        return (
            <Form className="input-form">
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
                {/* Spay/Neuter */}
                <Form.Group controlId="Form.SpayNeuter">
                    <Form.Label>Spay/Neuter</Form.Label>
                    <Form.Control as="select" name="spayneuter" value={this.state.spayNeuter} onChange={this.handleInputChange}>
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
                <Button className="btn" variant="info" type="submit" onClick={this.handleSubmit}>Submit</Button>
            </Form>
        );
    }
}

export default InputForm;