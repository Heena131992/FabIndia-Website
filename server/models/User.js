const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    mobile: {
        type: String,
        unique: true,
        sparse: true, // Mobile ya Email me se koi ek ho sakta hai
    },
    email: {
        type: String,
        unique: true,
        sparse: true,
        lowercase: true,
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        default: 'customer',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('User', userSchema);