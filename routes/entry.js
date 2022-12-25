const express = require('express');

const router = express.Router();
const passport = require('passport');

const entrycontroller = require('../controllers/entry_controller');

router.post('/create',entrycontroller.create);
router.get('/destroy',entrycontroller.destroy);


module.exports = router;