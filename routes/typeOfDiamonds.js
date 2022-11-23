const express = require('express');
const router = express.Router();

const typeOfDiamondController = require('../controllers/type_of_diamond_controller');

router.post('/create', typeOfDiamondController.create);
router.get('/', typeOfDiamondController.diamondEntries);


module.exports = router;