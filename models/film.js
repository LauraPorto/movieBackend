const mongoose = require('mongoose');


let filmSchema = mongoose.Schema({
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


const Film = mongoose.model("film", filmSchema);
module.exports = Film;