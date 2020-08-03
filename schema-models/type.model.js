const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let typeSchema = new Schema ({
    typeName: {type: String, required: true},
    typeLimits: {
        _id: false,
        enableTypeTracking: Boolean,
        typeSizeAmount: {
            type: [{
                _id: false,
                minFamSize: Number,
                maxFamSize: Number,
                maxAmount: Number,
            }],
            default: undefined
        }
    },
    typeSizeAmount: {
        type: [{
            _id: false,
            minFamSize: Number,
            maxFamSize: Number,
            maxAmount: Number,
        }],
        default: undefined
    },
    products:{ 
        type: [{
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'products'
        }],
        required: true
    },    
    superTypeId: {
        type: mongoose.Schema.Types.ObjectId
    },
    typeComment: String 
})

module.exports = mongoose.model('types', typeSchema);