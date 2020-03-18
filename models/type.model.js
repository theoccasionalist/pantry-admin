import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let typeSchema = new Schema ({
    typeName: {type: String, required: true},
    typeSizeAmount: {
        type: [{
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
    } 
})

export const Type = mongoose.model('types', typeSchema);