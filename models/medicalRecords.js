const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const medicalSchema = new Schema({
    record: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    recordDetails: {
        type: String,
        required: true
    },
});

const Medical = mongoose.model('MedicalRecord', medicalSchema);
module.exports = Medical;