const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
    productName: {
        type:String,
        required: [true, 'Product name is required!'],
    },
    category: {
        type:String,
        required: [true, 'Product category is required!'],
    },
    price: {
        type: Number,
        required: [true, 'Product price is required!'],
    },
    imageUrl: {
        type:String,
        required: [true, 'Product image is required!'],
    },
    duration: {
        type:String,
        required: [true, 'Product duration is required!'],
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    bidders: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],

});

const Offer = mongoose.model('Offer', offerSchema);


module.exports = Offer;

