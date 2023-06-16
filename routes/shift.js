const express = require('express');
const router = express.Router();
const shiftController = require("../controllers/shift");

router.post('/', shiftController.add_shift);

router.get('/', shiftController.all_shift);

module.exports = router;