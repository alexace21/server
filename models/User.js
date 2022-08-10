const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../config/environment');

const userSchema = new mongoose.Schema({
    email: {
        type: String,

    },
    password: {
        type: String,
    },
    likes: [],

});

userSchema.pre('save', { validateBeforeSave: false }, function (next) {
    bcrypt.hash(password, SALT_ROUNDS)
        .then(hashedPassword => {
            this.password = hashedPassword

            next();
        });
});

const User = mongoose.model('User', userSchema);

module.exports = User;