const express = require('express');
const router = express.Router();
const departmentController = require("../controllers/department");

router.post('/', departmentController.add_department);

router.get('/', departmentController.all_department);

module.exports = router;