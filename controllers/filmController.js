const mongoose = require('mongoose');
const Film = require("../models/film");

class Movie {

    constructor() {

    };

    async store(film) {
        return Film.create(film);
    };

    async indexAllFilms(filmCollection) {
        return Film.find(filmCollection);
    };

    async findFilmById(id) {
        return Film.findById(id);
    };

    async findByTitle(title) {
        return Film.findOne({ title: title });
    };

    async destroyFilm(id) {
        return Film.findByIdAndDelete(id);
    };

    async updateFilm(id, movie) {
        const idFound = Film.findOne({ _id: id });
        return idFound.update(movie);
    };

};

let filmController = new Movie();
module.exports = filmController;