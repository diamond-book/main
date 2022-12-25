const Entry = require('../models/entry');
const url = require('url');

module.exports.create = function (req, res) {
    Entry.create({
        noOfDiamonds: req.body.noOfDiamonds,
        status: req.body.status,
        employee: req.body.employee,
        typeOfDiamond: req.body.typeOfDiamond,
        user: req.user._id
    }, function (err, entry) {
        if (err) { console.log("error in create entry ! ") }

        return res.redirect('back');
    });
}

module.exports.destroy = function (req, res) {
    const id = url.parse(req.url, true).query.id;
    Entry.findById(id, function (err, entry) {
        if (entry.user == req.user.id) {
            entry.remove();
        }
        return res.redirect('back');
    });
}