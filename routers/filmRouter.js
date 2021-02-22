const filmRouter = require("express").Router();
const filmController = require("../controllers/filmController");
const Film = require("../models/film");

//ENDPOINTS CRUD

//Traer todas las peliculas
filmRouter.get('/allmovies', async(req, res) => {
    try {
        res.json(await filmController.indexAll());
    } catch (error) {
        return res.sendStatus(500).json({
            message: "Server Error"
        });
    }
});

//Guardar/añadir una película (save)
filmRouter.post('/', async(req, res) => {
    try {
        const id = await filmController.store(new Film(req.body));
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
        await filmController.destroy(id);
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
        res.json(await filmController.update(id, new Film(req.body)))
    } catch {
        return res.sendStatus(500).json({
            message: "Server Error"
        });
    };
});



module.exports = filmRouter;