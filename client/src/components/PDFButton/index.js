import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import API from '../../utils/API';

class PDFButton extends Component {
    state = {
        animal_id: this.props.animal_id
    }

    componentDidMount() {
        API.getPDF(this.state.animal_id)
            .then(res =>  console.log(res))
            .catch(error => console.log(error));
    }

    render() {
        return <Button variant="info" href={process.env.PUBLIC_URL + '/pdf/animal.pdf'} download>Export as PDF</Button>;
    }
}

export default PDFButton;