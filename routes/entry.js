const express = require('express');

const router = express.Router();
const passport = require('passport');

const entrycontroller = require('../controllers/entry_controller');

router.post('/create',entrycontroller.create);


module.exports = router;