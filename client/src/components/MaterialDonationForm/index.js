import React, { Component } from 'react';
import './style.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import API from '../../utils/API';

class MaterialIntakeForm extends Component {
    state = {
        item: '',
        quantity: 0,
        donor_name: '',
        donor_email: ''
    }

    handleInputChange = event => {
        let { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = event => {
        event.preventDefault();
        let materialDonation = {
            item: this.state.item,
            quantity: this.state.quantity,
            donor_name: this.state.donor_name,
            donor_email: this.state.donor_email
        }
        API.addMaterial(materialDonation)
            .then(res => console.log(res))
            .catch(error => console.log(error));

        this.setState({
            item: '',
            quantity: 0,
            donor_name: '',
            donor_email: ''
        });
    }

    render() {
        return (
            <Form className="input-form">
                {/* Donation Item */}
                <Form.Group controlId="Form.Item">
                    <Form.Label>Item</Form.Label>
                    <Form.Control type="text" name="item" value={this.state.item} onChange={this.handleInputChange}/>
                </Form.Group>
                {/* Donation Quantity */}
                <Form.Group controlId="Form.Quantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="text" name="quantity" value={this.state.quantity} onChange={this.handleInputChange}/>
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

export default MaterialIntakeForm;