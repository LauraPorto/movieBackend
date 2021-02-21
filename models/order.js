const filmDatabase = require("../filmDb");

//const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

let orderSchema = mongoose.Schema({
    id: {
        type: ObjectId,
        required: true
    },
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

const order = mongoose.model("order", orderSchema);
module.exports = order;