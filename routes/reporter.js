const express = require('express');
const router = express.Router();
const reportController = require("../controllers/reporter");

router.post('/', reportController.add_reporter);

router.get('/', reportController.all_reporter);

module.exports = router;