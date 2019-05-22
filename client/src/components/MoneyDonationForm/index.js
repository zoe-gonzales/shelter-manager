//Using MaterialDonationForm files as a codebase

import React, { Component } from 'react';
import './style.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class MoneyIntakeForm extends Component {
    state = {
        amount: 0,
        donor_name: '',
        donor_email: '',
        date: { type: Date, default: Date.now }
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
                {/* Donation Amount */}
                <Form.Group controlId="Form.Amount">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="text" name="amount" value={this.state.amount} onChange={this.handleInputChange}/>
                </Form.Group>
                {/* Donor Name */}
                <Form.Group controlId="Form.DonorName">
                    <Form.Label>Donor Name</Form.Label>
                    <Form.Control type="text" name="donor_name" value={this.state.donor_name} onChange={this.handleInputChange}/>
                </Form.Group>
                {/* Donor Email */}
                <Form.Group controlId="Form.DonorEmail">
                    <Form.Label>Donor Email</Form.Label>
                    <Form.Control type="text" name="donor_email" value={this.state.donor_email} onChange={this.handleInputChange}/>
                </Form.Group>
                <Button className="btn" variant="info" type="submit" onClick={this.handleSubmit}>Submit</Button>
            </Form>
        );
    }
}

export default MoneyIntakeForm;