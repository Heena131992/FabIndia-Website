const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    mobile: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 300, // MongoDB is document ko 5 minute (300 sec) baad khud delete kar dega
    },
});

module.exports = mongoose.model('Otp', otpSchema);