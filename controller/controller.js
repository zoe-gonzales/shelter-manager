const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Animal
          .find(req.query)
          .then(animalData => res.json(animalData))
          .catch(error => console.log(error));
    },
    findById: function(req, res) {
        db.Animal
        .findById({ _id: req.params.id })
        .then(animalData => res.json(animalData))
        .catch(error => console.log(error));
    },
    add: function(req, res) {
        db.Animal
          .create(req.body)
          .then(result => res.json(result))
          .catch(error => console.log(error));
    },
    update: function(req, res) {
        db.Animal
          .updateOne({ _id: req.params.id }, { $set: req.body })
          .then(result => res.json(result))
          .catch(error => console.log(error));
    }
}