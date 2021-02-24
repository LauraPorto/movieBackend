const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

let orderSchema = mongoose.Schema({
    userId: {
        type: ObjectId,
        required: true,
    },
    filmId: {
        type: ObjectId,
        required: true
    },
    initDate: {
        type: Date,
        default: new Date,
    },
    finDate: {
        type: Date,
        default: new Date(+new Date() + 5 * 24 * 60 * 60 * 1000),
    },
    paymentMethod: {
        type: String,
        required: true
    }
});

const Order = mongoose.model("order", orderSchema);
module.exports = Order;