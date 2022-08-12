const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required!'],
        min: 3
    },
    category: {
        type: String,
        required: [true, 'Product category is required!'],
        min: 3
    },
    price: {
        type: String,
        required: [true, 'Product price is required!'],
    },
    image: {
        type: String,
        required: [true, 'Product image is required!'],
        min: 3
    },
    summary: {
        type: String,
        required: [true, 'Product summary is needed!'],
        min: 5
    },
    likes: [
        {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

