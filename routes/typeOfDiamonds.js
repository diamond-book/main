const express = require('express');
const router = express.Router();

const typeOfDiamondController = require('../controllers/type_of_diamond_controller');

router.post('/create', typeOfDiamondController.create);
router.post('/update', typeOfDiamondController.update);
router.get('/', typeOfDiamondController.diamondEntries);
router.get('/destroy', typeOfDiamondController.destroy);


module.exports = router;