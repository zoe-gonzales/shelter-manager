const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const animalSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    animalType: {
        type: String,
        required: true
    },
    spayNeuter: {
        type: String,
        required: true
    },
    vaccinations: {
        type: Array,
        required: true
    },
    recordsLink: {
        type: String
    },
    schedule: {
        type: Array,
        required: true
    },
    notes: {
        type: Array,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String
    },
    medicalRecords: [{
        type: Schema.Types.ObjectId,
        ref: 'MedicalRecord'
    }]
});

const Animal = mongoose.model('Animal', animalSchema);
module.exports = Animal;