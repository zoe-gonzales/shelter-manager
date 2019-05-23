import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
// import API from '../../utils/API';

class AnimalInfoForm extends Component {
    state = {
        name: "",
        type: "",
        age: "",
        spayNeuter: "",
        vaccinations: "",
        schedule: "",
        notes: ""
    }

    handleInputChange=e=>{
        const{name, value} = e.target
        this.setState({[name]:value})
    }

    render() {
        return(
            <Container>
                <Row>
                    <Col>
                        <img src="../../images/Journey.jpeg"/>
                    </Col>
                    <Col>
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
            </Form>
                    </Col>
                    <Col>
                        <Link to="/add/medical">
                            Medical Records
                        </Link>
                        <br/><br/>
                        <Link to="/main">
                            Home
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    {/* Schedule */}
                    <Form>
                    <Form.Group controlId="Form.Schedule">
                    <Form.Label>Schedule</Form.Label>
                    <Form.Control as="textarea" rows="3" name="schedule" value={this.state.schedule} onChange={this.handleInputChange}/>
                    </Form.Group>
                    </Form>
                    </Col>
                    <Col>
                    {/* Notes */}
                    <Form>
                    <Form.Group controlId="Form.Notes">
                    <Form.Label>Notes</Form.Label>
                    <Form.Control as="textarea" rows="3" name="notes" value={this.state.notes} onChange={this.handleInputChange}/>
                    </Form.Group>
                    </Form>
                    </Col>
                </Row>
                <Row>
                <Button className="btn" variant="info" type="submit" onClick={this.handleSubmit}>Submit</Button>
                </Row>
            </Container>
        )
    }
}

export default AnimalInfoForm;