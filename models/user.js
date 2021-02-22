const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
    },
    country: {
        type: String,
        required: true
    },
    age: {
        type: Date,
        required: true
    },
    creationDate: {
        type: Date
    }
});

const User = mongoose.model("user", userSchema);
module.exports = User;