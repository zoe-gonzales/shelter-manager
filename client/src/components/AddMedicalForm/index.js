import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './style.css';

class InputForm extends Component {
    state = {
        record: '',
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
                {/* Medical Record */}
                <Form.Group controlId="Form.Name">
                    <Form.Label>Record</Form.Label>
                    <Form.Control type="text" name="record" value={this.state.record} onChange={this.handleInputChange}/>
                </Form.Group>
                <Form.Group controlId="Form.SpayNeuter">
                    <Form.Label>Select Animal</Form.Label>
                    <Form.Control as="select" name="animal" value={this.state.animal} onChange={this.handleInputChange}>
                    {/* Will map over all data in db to collect the animal's id and name */}
                    {/* Below is dummy data */}
                    <option id="1">Fluffy</option>
                    <option id="2">Bob</option>
                    <option id="3">Billy</option>
                    </Form.Control>
                </Form.Group>
                <Button className="btn" variant="info" type="submit" onClick={this.handleSubmit}>Submit</Button>
            </Form>
        );
    }
}

export default InputForm;