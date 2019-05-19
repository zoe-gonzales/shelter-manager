import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './style.css';

class InputForm extends Component {
    state = {
        record: '',
        date: '',
        type: '',
        recordDetails: '',
        animalId: ''
    }

    handleInputChange = event => {
        let { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = event => {
        event.preventDefault();
        // medical record added to db via animal's _id
    }

    render() {
        return (
            <Form className="input-form">
                {/* Medical Record Description */}
                <Form.Group controlId="Form.Name">
                    <Form.Label>Record Description</Form.Label>
                    <Form.Control type="text" name="record" value={this.state.record} onChange={this.handleInputChange}/>
                </Form.Group>
                {/* Date of medical procedure */}
                <Form.Group controlId="Form.Date">
                    <Form.Label>Procedure Date</Form.Label>
                    <Form.Control type="date" name="date" value={this.state.date} onChange={this.handleInputChange}/>
                </Form.Group>
                {/* Procedure Type */}
                <Form.Group controlId="Form.RecordType">
                    <Form.Label>Record Type</Form.Label>
                    <Form.Control as="select" name="type" value={this.state.type} onChange={this.handleInputChange}>
                    <option>Medication</option>
                    <option>Diet Specification</option>
                    <option>Microchip</option>
                    <option>Surgery</option>
                    </Form.Control>
                </Form.Group>
                {/* Optional textarea to give more details on procedure */}
                <Form.Group controlId="Form.RecordDetails">
                    <Form.Label>Record Details</Form.Label>
                    <Form.Control as="textarea" rows="3" name="recordDetails" value={this.state.recordDetails} onChange={this.handleInputChange}/>
                </Form.Group>
                <Button className="btn" variant="info" type="submit" onClick={this.handleSubmit}>Submit</Button>
            </Form>
        );
    }
}

export default InputForm;