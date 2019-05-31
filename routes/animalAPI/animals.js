const router = require("express").Router();
const animalController = require("../../controller/animalController");

// Matches with "/api/animals"
router.route("/")
  .get(animalController.findAll)
  .post(animalController.add);

// Matches with "/api/animals/:id"
router
  .route("/:id")
  .get(animalController.findById)
  .put(animalController.update);

// Matches with "/api/animals/pdf/:id"
router
  .route("/pdf/:id")
  .get(animalController.makePDF);

// Matches with "/api/animals/medicalRecord/:id"
router
  .route("/medicalRecord/:id")
  .post(animalController.animalMedical);

module.exports = router;