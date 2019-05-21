const db = require("../models");
const PDFDocument = require('pdfkit');
const fs = require('fs');

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
    },
    makePDF: function(req, res) {
        // Retrieve specific animal's data
        db.Animal
        .findById({ _id: req.params.id })
        .then(animalData => {
            // generate new PDF using animal data
            const doc = new PDFDocument();
            // directs where to save final PDF
            doc.pipe(fs.createWriteStream('client/public/pdf/animal.pdf'));
            // PDF content
            doc.image('images/grumpy.jpeg', 60, 60,
            {
                fit: [240, 240], 
                align: 'center', 
                valign: 'center'
            });
            // adding space between image and text
            doc.moveDown(18);
            doc.font('Times-Roman')
               .fontSize(14)
               .text(`
                Name: ${animalData.name}\n 
                Approximate age: ${animalData.age}\n
                Spayed/Neutered: ${animalData.spayNeuter}\n
                Vaccinations: ${animalData.vaccinations.join(', ').toString()}\n
                Medical Records: ${animalData.medicalRecords.join(', ').toString()}\n
                Shelter schedule: ${animalData.schedule.join(', ').toString()}\n
                Additional notes: ${animalData.notes.join(', ').toString()}`,
                15, 315,
                { align: 'left' });

            // marks PDF as complete
            doc.end();
            // sends to client
            res.send(doc);             
        })
        .catch(error => console.log(error));
    }
}