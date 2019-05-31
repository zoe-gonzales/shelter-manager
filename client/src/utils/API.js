const axios = require("axios");

export default {
    getAllAnimals: function() {
        return axios.get("/api/animals");
    },
    getAnimalById: function(id) {
        return axios.get("/api/animals/" + id);
    },
    createAnimal: function(data) {
        return axios.post("/api/animals", data);
    },
    updateAnimal: function(id) {
        return axios.put("/api/animals/" + id);
    },
    getPDF: function(id) {
        return axios.get("/api/animals/pdf/" + id);
    },
    getMaterialDonations: function() {
        return axios.get("/api/donations/material");
    },
    addMaterial: function(data) {
        return axios.post("/api/donations/material", data);
    },
    getMonetaryDonations: function() {
        return axios.get("/api/donations/monetary");
    },
    addMonetary: function(data) {
        return axios.post("/api/donations/monetary", data);
    },
    addMedicalRecord: function(id, data) {
        return axios.post("/api/animals/medicalRecord/" + id, data);
    }
}