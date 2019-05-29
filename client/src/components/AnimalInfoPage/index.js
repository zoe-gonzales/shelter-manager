import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AnimalDetail from '../AnimalDetail';
import { Link } from 'react-router-dom';
import API from '../../utils/API';

class AnimalInfoPage extends Component {
    state = {
        name: "",
        animalType: "",
        age: "",
        medicalRecords: [],
        spayNeuter: "",
        vaccinations: [],
        schedule: [],
        notes: []
    }

    componentDidMount = () => {
        API.getAnimalById(this.props.match.params.id)
        .then( ({data}) => {
            console.log(data)
            this.setState ({
                name: data.name,
                animalType: data.animalType,
                age: data.age,
                medicalRecords: data.medicalRecords,
                spayNeuter: data.spayNeuter,
                vaccinations: data.vaccinations,
                schedule: data.schedule,
                notes: data.notes
            })
        })
        .catch((error) => {
            console.log(error);
        })
        // console.log("queryParams", this.props.match.params);
    }

    handleInputChange = e => {
        const{name, value} = e.target
        this.setState({[name]:value})
    }

    render() {
        const {name, animalType, age, medicalRecords, spayNeuter, vaccinations, schedule, notes} = this.state
        return(
            <Container>
                <Row>
                    <Col>
                        <img src={require('../../images/Journey.jpeg')} height="300" width="300"/>
                    </Col>
                    <Col>
                    
                {/* Animal Name */}
                <p>Name: {name} </p>
                {/* Animal Type */}
                <p>Animal Type: {animalType}</p>
                {/* Animal Age */}
                <p>Age: {age}</p>
                {/* Spay/Neuter */}
                <p>Spayed/Neutered? {spayNeuter}</p>
                {/* Vaccinations */}
                <p>Vaccinations: {vaccinations}</p>
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
                <Row style={{marginBottom: 50}}>
                <AnimalDetail {...this.props}/>
                {/* <Button className="btn" variant="info" type="submit" onClick={this.handleSubmit}>Click for PDF</Button> */}
                
                </Row>
            </Container>
        )
    }
}

export default AnimalInfoPage;