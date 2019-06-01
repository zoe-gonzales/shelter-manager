import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import AnimalDetail from '../AnimalDetail';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import API from '../../utils/API';
import moment from 'moment';

class AnimalInfoPage extends Component {
    state = {
        _id: "",
        name: "",
        animalType: "",
        age: "",
        medicalRecords: [],
        spayNeuter: "",
        vaccinations: [],
        schedule: [],
        notes: [],
        imageSrc: ""
    }

    componentDidMount = () => {
        API.getAnimalById(this.props.match.params.id)
        .then( ({data}) => {
            this.setState ({
                _id: data._id,
                name: data.name,
                animalType: data.animalType,
                age: data.age,
                medicalRecords: data.medicalRecords,
                spayNeuter: data.spayNeuter,
                vaccinations: data.vaccinations,
                schedule: data.schedule,
                notes: data.notes
            }, () => {
                this.getImageSrc(this.state.animalType);
            })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    handleInputChange = e => {
        const{name, value} = e.target
        this.setState({[name]:value})
    }

    getImageSrc = animalType => {
        let image;
        let type = animalType;
        switch(type) {
            case "cat":
            case "Cat":
            image = "/images/cat.jpg";
            break;
            case "dog":
            case "Dog":
            image = "/images/dog.jpg";
            break;
            default:
            image = "/images/misc.jpg";
            break;
        }
        this.setState({ imageSrc: image });
    }

    render() {
        const {_id, name, animalType, age, medicalRecords, spayNeuter, vaccinations, schedule, notes} = this.state
        return(
            <Container>
                <Row>
                    <Col>
                        <img src={this.state.imageSrc} height="300" width="300"/>
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
                        <Link to={"/add/medical/" + _id}>
                            Add Medical Record
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
                    <p>Medical Records</p>
                </Row>
                
                <Row>
                    <Table responsive>
                    <thead>
                        <tr>
                        <th>Record</th>
                        <th>Type</th>
                        <th>Details</th>
                        <th>Date</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.state.medicalRecords.map(record => {
                                return (
                                    <tr key={record._id}>
                                        <td>{record.record}</td>
                                        <td>{record.type}</td>
                                        <td>{record.recordDetails}</td>
                                        <td>{moment(record.date).format('MMM DD, YYYY')}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Row>
                <Row style={{marginBottom: 50}}>
                <AnimalDetail {...this.props}/>                
                </Row>
            </Container>
        )
    }
}

export default AnimalInfoPage;