const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moneySchema = new Schema({
    amount: {
        type: Number,
        required: true
    },
    donor_name: {
        type: String,
        required: true
    },
    donor_email: String,
    date: {
        type: Date,
        default: Date.now
    }
});

const Money = mongoose.model('Money', moneySchema);
module.exports = Money;