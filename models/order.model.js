import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let orderSchema = new Schema ({
    family: {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        zipCode: {type: String, required: true},
        emailAddress: String,
        phoneNumber: {type: String, required: true},
        familySize: {type: String, required: true},
        schoolChildren: Number,
        infants: Boolean,
        referral: Boolean,
    },
    cart: [{
        _id: false,
        typeName: {type: String, required: true},
        products: [{
            _id: false,
            productName: {type: String, required: true},
            amount: {type: Number, required: true}
        }]
    }],
    pickUpDate: {type: String , required: true},
    received: {type: Boolean , required: true}   
})

export const Order = mongoose.model('orders', orderSchema);