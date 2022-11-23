const Employee = require("../models/employee");
const TypeOfDiamond = require("../models/typesOfDiamonds");

module.exports.home = function (req, res) {
    if (!req.isAuthenticated()) {
        return res.render('home', {
            title: 'Diamond Book | Home'
        });
    }

    Employee.find({ user: req.user.id }, function (err, employees) {
        TypeOfDiamond.find({ user: req.user.id }, function (err, typeOfDiamonds) {
            return res.render('home', {
                title: 'Diamond Book | Home',
                employees: employees,
                typeOfDiamonds: typeOfDiamonds
            });
        });
    });



}
