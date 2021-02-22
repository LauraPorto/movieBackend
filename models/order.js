const mongoose = require('mongoose');

let orderSchema = mongoose.Schema({
    filmId: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        default: new Date,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    }
});

const Order = mongoose.model("order", orderSchema);
module.exports = Order;