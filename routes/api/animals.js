const router = require("express").Router();
const animalController = require("../../controller/controller");

// Matches with "/api/animals"
router.route("/")
  .get(animalController.findAll)
  .post(animalController.add);

// Matches with "/api/animals/:id"
router
  .route("/:id")
  .get(animalController.findById)
  .put(animalController.update);

module.exports = router;