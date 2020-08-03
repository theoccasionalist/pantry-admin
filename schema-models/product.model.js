const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let productSchema = new Schema ({
    productName: {type: String, required: true},
    prodSizeAmount: {
        type: [{
            _id: false,
            minFamSize: Number,
            maxFamSize: Number,
            maxAmount: Number,
        }],
        default: undefined
    },  
    points: Number,
    school: Boolean,
    infant: Boolean
})

module.exports = mongoose.model('products', productSchema);

