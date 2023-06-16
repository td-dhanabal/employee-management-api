const express = require('express');
const router = express.Router();
const employeeController = require("../controllers/employee");
const { employeeImg } = require('../config/multer')

router.post('/', employeeImg.single('file'), employeeController.add_employee);

router.get('/', employeeController.all_employee);

router.get('/:id', employeeController.get_employee);

module.exports = router;