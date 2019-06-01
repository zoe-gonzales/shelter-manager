const router = require('express').Router();
const donationController = require('../../controller/donationController');

// Matches with "/api/donations/material"
router.route('/material')
  .get(donationController.findAllMaterial)
  .post(donationController.addMaterial);

// Matches with "/api/donations/monetary"
router.route('/monetary')
  .get(donationController.findAllMonetary)
  .post(donationController.addMonetary);

module.exports = router;