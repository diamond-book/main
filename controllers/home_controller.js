const Employee = require("../models/employee");

module.exports.home = function(req, res){
    if(!req.isAuthenticated()){
        return res.render('home',{
            title : 'Diamond Book | Home'
        });
    }
    
    Employee.find({user : req.user.id},function(err, employees){
        return res.render('home',{
            title : 'Diamond Book | Home',
            employees : employees 
        });
    });

    
}
