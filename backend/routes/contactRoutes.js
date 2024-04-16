const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.post('/api/contact', contactController.sendContactEmail);

module.exports = router;
