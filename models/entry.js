const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({

    noOfDiamonds: {
        type: Number,
        require: true
    },
    status: {
        type: Number,
        require: true
    },
    typeOfDiamond: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TypeOfDiamond'
    },
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

},
    {
        timestamps: true
    });


const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;