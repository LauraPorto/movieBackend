const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;

let userSchema = mongoose.Schema({
    id: {
        type: ObjectId,
        required: true
    },
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