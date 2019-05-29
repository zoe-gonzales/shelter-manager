const path = require("path");
const router = require("express").Router();
const animalRoutes = require("./animalAPI");
const donationRoutes = require("./donationAPI");

// API Routes
router.use("/api", animalRoutes);
router.use("/api", donationRoutes);

// If no API routes match, serve React App
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
