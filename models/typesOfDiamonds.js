const mongoose = require('mongoose');

const typeOfDiamondSchema = new mongoose.Schema({
    typeOfDiamond: {
        type: String,
        required: true,
        index: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    },
    price: {
        type: Number,
        require: true,
        index: true
    }
}, { timestamps: true });

typeOfDiamondSchema.index(
    {typeOfDiamond: 1, user: 1, price: 1 },
    { unique: true }
);


const TypeOfDiamond = mongoose.model('TypeOfDiamond', typeOfDiamondSchema);

module.exports = TypeOfDiamond;