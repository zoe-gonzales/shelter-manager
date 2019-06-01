const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const materialSchema = new Schema({
    item: String,
    quantity: Number,
    donor_name: String,
    donor_email: String,
    date: {
        type: Date,
        default: Date.now
    }
});

const MaterialDonation = mongoose.model('MaterialDonation', materialSchema);
module.exports = MaterialDonation;