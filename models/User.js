const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../config/environment');


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Username is required!'],
        min: 5,
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Invalid password!'],
        min: 4,
    },
    fullname: {
        type: String,
        required: false,
        min: 3,
        default: "welcomer"
    },
    image: {
        type: String,
        required: false,
        min: 3,
        default: "insert image path here"
    },
    contacts: {
        type: String,
        required: false,
        min: 3,
        default: "No contacts"
    },
    address: {
        type: String,
        required: false,
        min: 3,
        default: "none"
    }
    ,
    profit: {
        type: Number,
        required: false,
        default: 0
    }
    ,
    likes: [],
    updated: {
        type: Date,
        default: Date.now
    },
    collections: [{
        type: mongoose.Types.ObjectId,
        ref: 'Product'
    }]
});

userSchema.pre('save', { validateBeforeSave: false }, function (next) {
    bcrypt.hash(this.password, SALT_ROUNDS)
        .then(hashedPassword => {
            this.password = hashedPassword
            
            next();
        });
});


const User = mongoose.model('User', userSchema);

module.exports = User;