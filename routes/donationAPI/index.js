const router = require('express').Router();
const donationRoutes = require('./donations');

router.use('/donations', donationRoutes);

module.exports = router;