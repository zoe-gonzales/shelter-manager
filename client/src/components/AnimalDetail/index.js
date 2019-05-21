import React from 'react';
import PDFBtn from '../PDFButton';

export default function AnimalDetail({ match }) {
    return <PDFBtn animal_id={match.params.id}/>;
}