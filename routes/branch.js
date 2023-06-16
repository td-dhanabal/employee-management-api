const express = require('express');
const router = express.Router();
const branchController = require("../controllers/branch");

router.post('/', branchController.add_branch);

router.get('/', branchController.all_branch);

module.exports = router;