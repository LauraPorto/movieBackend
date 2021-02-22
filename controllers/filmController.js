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
        return Film.findOne(title);
    };

    async destroyFilm(id) {
        return Film.findByIdAndDelete(id);
    };

    async updateFilm(id) {
        return Film.findByIdAndUpdate(id);
    };

};

let filmController = new Movie();
module.exports = filmController;

// - Todas las películas (Get) - Find
// - Find by ID (Get) - FindById
// - Delete by ID (Delete) - Remove
// - Añadir película (Post) - Create
// - Modificar una película que ya existe (Put) - Update
// - Find by titulo (Get) - FindByTitle