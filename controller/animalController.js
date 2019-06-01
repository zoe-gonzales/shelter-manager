const db = require("../models");
const PDFDocument = require('pdfkit');
const fs = require('fs');
const mongoose = require("mongoose");
const binData = mongoose.mongo.Binary;
const moment = require('moment');

module.exports = {
    // Retrieves basic data for all animals
    findAll: function(req, res) {
        db.Animal
          .find(req.query)
          .then(animalData => res.json(animalData))
          .catch(error => console.log(error));
    },
    // Retrieves basic data + medical records for one animal
    findById: function(req, res) {
        db.Animal
        .findById({ _id: req.params.id })
        .populate("medicalRecords")
        .then(animalData => res.json(animalData))
        .catch(error => console.log(error));
    },
    // Adds animal
    add: function(req, res) {
        // const data = fs.readFileSync(req.body.image);
        // db.Animal.image.data = binData(data);
        // db.Animal.image.contentType = 'image/jpg';
        
        db.Animal
          .create(req.body)
          .then(result => res.json(result))
          .catch(error => console.log(error));
    },
    // Updates animal's data
    update: function(req, res) {
        db.Animal
          .updateOne({ _id: req.params.id }, { $set: req.body })
          .then(result => res.json(result))
          .catch(error => console.log(error));
    },
    // Generates PDF with animal's data
    makePDF: function(req, res) {
        // Retrieve specific animal's data
        db.Animal
        .findById({ _id: req.params.id })
        .populate("medicalRecords")
        .then(animalData => {
            console.log(animalData)
            // generate new PDF using animal data
            const doc = new PDFDocument();
            // directs where to save final PDF
            doc.pipe(fs.createWriteStream('client/public/pdf/animal.pdf'));
            // PDF content
            let image;
            let type = animalData.animalType;
            switch(type) {
                case 'cat':
                case 'Cat':
                    image = 'images/cat.jpg';
                break;
                case 'dog':
                case 'Dog':
                    image = 'images/dog.jpg';
                break;
                default: 
                    image = 'images/misc.jpg';
                break;
            }
            doc.image(image, 60, 60,
            {
                fit: [240, 240], 
                align: 'center', 
                valign: 'center'
            });
            // adding space between image and text
            doc.moveDown(18);

            let list = '';
            animalData.medicalRecords.map(record => {
                list += `${record.record} - ${record.type} - ${moment(record.date).format('MMM DD, YYYY')} - ${record.recordDetails}\n`
            });

            doc.font('Times-Roman')
               .fontSize(14)
               .text(`
                Name: ${animalData.name}\n 
                Approximate age: ${animalData.age}\n
                Spayed/Neutered: ${animalData.spayNeuter}\n
                Vaccinations: ${animalData.vaccinations.join(', ').toString()}\n
                Shelter schedule: ${animalData.schedule.join(', ').toString()}\n
                Additional notes: ${animalData.notes.join(', ').toString()}`,
                15, 315,
                { align: 'left' });

            doc.font('Times-Roman')
            .fontSize(14)
            .text(`Medical Records:\n ${list}\n`, 
                70, 530,
                {
                    align: 'left'
                }
            );
            // marks PDF as complete
            doc.end();
            // sends to client
            res.send(doc);             
        })
        .catch(error => console.log(error));
    },
    // Animal Medical Record
    animalMedical: function(req, res) {
        db.MedicalRecord.create(req.body)
        .then(medicalData => {
            return db.Animal
        .findOneAndUpdate({_id:req.params.id}, 
            {$push: {medicalRecords: medicalData._id}}, 
            {new:true});  
        })
    }
}