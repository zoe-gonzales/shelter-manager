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
    }
}