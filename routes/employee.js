const express = require('express');

const router = express.Router();
const passport = require('passport');

const employeecontroller = require('../controllers/employees_controller');

router.post('/create',employeecontroller.create);
router.post('/update',employeecontroller.update);
router.get('/',employeecontroller.employeeEntry);
router.get('/destroy',employeecontroller.destroy);



module.exports = router;