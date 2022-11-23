const TypeOfDiamond = require('../models/typesOfDiamonds');

module.exports.create = function (req, res) {
    TypeOfDiamond.create({
        price: req.body.price,
        typeOfDiamond: req.body.typeOfDiamond,
        user: req.user._id
    }, function (err, typeOfDiamond) {
        if (err) { console.log("error in create typeOfDiamonds ! ") }

        return res.redirect('/');
    });
}
