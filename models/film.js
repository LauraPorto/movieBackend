//const mongoose = require("mongoose");
const filmDatabase = require("../filmDb");

const ObjectId = mongoose.Types.ObjectId;

let filmSchema = mongoose.Schema({
    id: {
        type: ObjectId
    },
    title: {
        type: String
    },
    year: {
        type: Number
    },
    contry: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    genre: {
        type: Number,
        //num {}
    },
    adult: {
        type: Boolean
    }

})


const film = mongoose.model("film", filmSchema);
module.exports = film;