const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({

    name: {
        type : String,
        require : true
    },
    aadhar: {
        type : Number,
        require: true,
        unique : true
    },
    mobileNo :{
        type : Number,
        require : true
    },
    adrress : {
        type : String,
        require: true
    },
    typeOfDiamond:{
        type : String,
        require: true
    },
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    } 

});


const Employee = mongoose.model('User', employeeSchema);

module.exports = Employee;