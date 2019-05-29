const db = require("../models");

module.exports = {
    findAllMaterial: function(req, res) {
        db.MaterialDonation
          .find(req.query)
          .then(donationData => res.json(donationData))
          .catch(error => console.log(error));
    },
    findAllMonetary: function(req, res) {
        db.MoneyDonation
        .find(req.query)
        .then(donationData => res.json(donationData))
        .catch(error => console.log(error));
    },
    addMaterial: function(req, res) {
        db.MaterialDonation
          .create(req.body)
          .then(result => res.json(result))
          .catch(error => console.log(error));
    },
    addMonetary: function(req, res) {
        db.MoneyDonation
        .create(req.body)
        .then(result => res.json(result))
        .catch(error => console.log(error));
    }
}