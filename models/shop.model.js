import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let shopSchema = new Schema ({
    shop: {
        type: [{
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'types'
        }]
    }
})

export const Shop = mongoose.model('shops', shopSchema, 'shop');