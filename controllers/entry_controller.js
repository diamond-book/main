const Entry = require('../models/entry');

module.exports.create = function(req, res){
    Entry.create({
        noOfDiamonds : req.body.noOfDiamonds,
        status : req.body.status,
        employee : req.body.address,
        typeOfDiamond : req.body.typeOfDiamond,
        user : req.user._id
    },function(err, entry){
        if(err) { console.log("error in create entry ! ")}

        return res.redirect('back');
    });
}