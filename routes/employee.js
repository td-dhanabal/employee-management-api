const express = require('express');
const router = express.Router();
const employeeController = require("../controllers/employee");
const { employeeImg } = require('../config/multer')

router.post('/', employeeImg.single('file'), employeeController.add_employee);

router.get('/', employeeController.all_employee);

router.get('/:id', employeeController.get_employee);

router.put('/:id', employeeImg.single('file'), employeeController.update_employee);

router.delete("/:id", employeeController.delete_employee);

module.exports = router;