const express = require('express');

const router = express.Router();
const passport = require('passport');

const employeecontroller = require('../controllers/employees_controller');

router.post('/create',employeecontroller.create);
router.get('/',employeecontroller.employeeEntry);



module.exports = router;