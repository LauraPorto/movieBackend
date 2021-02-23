const filmRouter = require("express").Router();
const filmController = require("../controllers/filmController");
const Film = require("../models/film");

//ENDPOINTS CRUD

//Traer todas las peliculas
filmRouter.get('/films/allmovies', async(req, res) => {
    try {
        res.json(await filmController.indexAllFilms());
    } catch (error) {
        return res.status(500).json({
            message: "Server Error"
        });
    }
});

//Traer películas por ID
filmRouter.get('/:id', async(req, res) => {
    try {
        const id = req.params.id;
        res.json(await filmController.findFilmById(id));
    } catch (error) {
        return res.status(500).json({
            message: "Server Error"
        });
    };
});

//Traer películas por Título
filmRouter.get('/films/title/:title', async(req, res) => {
    try {
        const title = req.params.title;
        let resultado = await filmController.findByTitle(title);
        res.json(resultado);
    } catch (error) {
        return res.status(500).json({
            message: "Server Error"
        });
    };
});

/* routerFilms.get('/films/title/:title', async(req, res) => {
    try {
        const zapato = req.params.title;

        let resultado = await filmController.findOneFilm(zapato);

        res.json(resultado)
    } catch (error) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }

});
 async findOneFilm(title) {
        console.log('estamos aquiiiiii', title);
        const titleFound = film.findOne({ title: title })
        return titleFound;
    }
} */

//Guardar/añadir una película (save)
filmRouter.post('/add', async(req, res) => {
    try {
        const movie = await filmController.store(req.body);
        const status = "success";
        res.json({ status, movie });
    } catch (error) {
        return res.status(500).json({
            message: "Server Error"
        });
    };
});

//Borrar una película
filmRouter.delete('/delete/:id', async(req, res) => {
    try {
        const _id = req.params.id;
        const status = "deleted";
        let resultado = await filmController.destroyFilm(_id);
        res.json({ status, resultado });
    } catch (error) {
        return res.status(500).json({
            message: "Server Error"
        });
    };
});

//Modificar los datos de una película (update)
// filmRouter.put('/update/id/:id', async(req, res) => {
//     try {
//         console.log('Tamos dentro');
//         const id = req.params.id;
//         let resultado = await filmController.updateFilm(id, req.body);
//         res.json(resultado);
//     } catch (error) {
//         return res.status(500).json({
//             message: "Server Error"
//         });
//     };
// });

filmRouter.put('/update-film/:id', async(req, res) => {
    try {
        const _id = req.params.id;
        res.json(await filmController.updateFilm(_id, req.body));
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
});



module.exports = filmRouter;