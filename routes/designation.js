const express = require('express');
const router = express.Router();
const designationController = require("../controllers/designation");

router.post('/', designationController.add_designation);

router.get('/', designationController.all_designation);

module.exports = router;