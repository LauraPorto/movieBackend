const filmRouter = require("express").Router();
const FilmController = require("../controllers/filmController");
const Film = require("../models/film");

//ENDPOINTS CRUD

//Traer todas las peliculas
filmRouter.get('/allmovies', async(req, res) => {
    try {
        res.json(await FilmController.indexAllFilms());
    } catch (error) {
        return res.sendStatus(500).json({
            message: "Server Error"
        });
    }
});

//Traer películas por ID
filmRouter.get('/:id', async(req, res) => {
    try {
        const id = req.params.id;
        res.json(await FilmController.findFilmById(id));
    } catch (error) {
        return res.sendStatus(500).json({
            message: "Server Error"
        });
    };
});

//Traer películas por Título
filmRouter.get('/title', async(req, res) => {
    try {
        const title = req.params.title;
        res.json(await FilmController.findByTitle(title));
    } catch (error) {
        return res.sendStatus(500).json({
            message: "Server Error"
        });
    };
});

//Guardar/añadir una película (save)
filmRouter.post('/add', async(req, res) => {
    try {
        const id = await FilmController.store(new Film(req.body));
        const status = "success";
        res.json({ status, id });
    } catch (error) {
        return res.sendStatus(500).json({
            message: "Server Error"
        });
    };
});

//Borrar una película
filmRouter.delete('/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const status = "deleted";
        await FilmController.destroyFilm(id);
        res.json({ status, id });
    } catch (error) {
        return res.sendStatus(500).json({
            message: "Server Error"
        });
    };
});

//Modificar los datos de una película (update)
filmRouter.put('/:id', async(req, res) => {
    try {
        const id = req.params.id;
        res.json(await FilmController.updateFilm(id, new Film(req.body)))
    } catch (error) {
        return res.sendStatus(500).json({
            message: "Server Error"
        });
    };
});



module.exports = filmRouter;