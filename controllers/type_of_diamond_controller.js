const Employee = require('../models/employee');
const TypeOfDiamond = require('../models/typesOfDiamonds');
const url = require('url');
const Entry = require('../models/entry');

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


module.exports.diamondEntries = function (req, res) {
    if (!req.isAuthenticated()) {
        return res.render('home', {
            title: 'Diamond Book | Home'
        });
    }

    const id = url.parse(req.url,true).query.id;

    TypeOfDiamond.findById(id, function(err, typeOfDiamond){
        Employee.find({user : req.user.id, typeOfDiamond : id}, function(err, employees){
            Entry.
            find({typeOfDiamond : id}).
            populate('employee').
            exec(function(err, entries){
                return res.render('diamonds_entries',{
                    title : 'Diamonds Book | Diamond | Entries',
                    typeOfDiamond : typeOfDiamond,
                    employees : employees,
                    entries : entries
                });
            });
        });
    });



}
