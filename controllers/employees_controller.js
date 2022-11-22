const Employee = require('../models/employee');

module.exports.create = function(req, res){
    Employee.create({
        name : req.body.name,
        aadharNo : req.body.aadharNo,
        mobileNo : req.body.mobileNo,
        address : req.body.address,
        typeOfDiamond : req.body.typeOfDiamond,
        user : req.user._id
    },function(err, employee){
        if(err) { console.log("error in create employee ! ")}

        return res.redirect('/');
    });
}