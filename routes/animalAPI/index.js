const router = require("express").Router();
const animalRoutes = require("./animals");

router.use("/animals", animalRoutes);

module.exports = router;