const Employee = require('../models/employee');
const url = require('url');
const Entry = require('../models/entry');
const TypeOfDiamond = require('../models/typesOfDiamonds');

module.exports.create = function (req, res) {
    Employee.create({
        name: req.body.name,
        aadharNo: req.body.aadharNo,
        mobileNo: req.body.mobileNo,
        address: req.body.address,
        typeOfDiamond: req.body.typeOfDiamond,
        user: req.user._id
    }, function (err, employee) {
        if (err) { console.log("error in create employee ! ") }

        return res.redirect('/');
    });
}


module.exports.employeeEntry = function (req, res) {
    if (!req.isAuthenticated()) {
        return res.render('home', {
            title: 'Diamond Book | Home'
        });
    }

    const id = url.parse(req.url, true).query.id;

    Employee.findById(id, function (err, employees) {
        var todid = employees.typeOfDiamond;
        TypeOfDiamond.findById(todid, function (err, typeOfDiamond) {
            Entry.find({ employee: id }, function (err, entries) {
                return res.render('employees_entries', {
                    title: 'Diamonds Book | Employee | Entries',
                    typeOfDiamond: typeOfDiamond,
                    employees: employees,
                    entries: entries
                });
            });
        });
    });
}



module.exports.destroy = function (req, res) {

    const id = url.parse(req.url, true).query.id;

    Employee.findById(id, function (err, employee) {

        if (employee.user == req.user.id) {
            employee.remove();

            Entry.deleteMany({ employee: id }, function (err) {
                return res.redirect('/');
            });
        }
        else {
            return res.redirect('back');
        }
    });
}