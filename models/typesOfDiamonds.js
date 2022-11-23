const mongoose = require('mongoose');

const typeOfDiamondSchema = new mongoose.Schema({
    price: {
        type: Number,
        require: true
    },
    typeOfDiamond: {
        type: String,
        require: true,
        unique:true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

}, { timestamps: true });


const TypeOfDiamond = mongoose.model('TypeOfDiamond', typeOfDiamondSchema);

module.exports = TypeOfDiamond;