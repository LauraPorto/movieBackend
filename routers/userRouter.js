const userRouter = require("express").Router();
const userController = require("../controllers/userController");
const User = require("../models/user");


//ENDPOINTS CRUD

//Todos los usuarios
userRouter.get('users/allUsers', async(req, res) => {
    try {
        let resultado = await userController.indexAllUsers();
        res.json(resultado);
    } catch (error) {
        return status(500).json({
            message: "Server Error"
        });
    };
});


//Usuario por ID
userRouter.get('/userId/:id', async(req, res) => {
    try {
        const _id = req.params.id;
        let resultado = await userController.findUserById(_id);
        res.json(resultado);
    } catch (error) {
        return status(500).json({
            message: "Server Error"
        });
    };
});

//Registro usuario
userRouter.post('/register', async(req, res) => {
    try {
        const newUser = await userController.register(req.body);
        const status = "success";
        res.json({ newUser, status });
    } catch (error) {
        return status(500).json({
            message: "Server Error"
        });
    };
});

//Borrar usuario por ID
userRouter.delete('delete-user/:id', async(req, res) => {
    try {
        console.log("Tamos dentro");
        const _id = req.params.id;
        const status = "deleted";
        let resultado = await userController.destroyUser(_id);
        res.json({ resultado, status });
    } catch (error) {
        return status(500).json({
            message: "Server Error"
        });
    };
});

//Modificar datos usuario
userRouter.put('update-user/:id', async(req, res) => {
    try {
        // const id = req.params.id;
        // const status = "success";
        // await userController.updateUser(id, new Client(req.body));
        // res.json({ id, status });
        const _id = req.params.id;
        res.json(await filmController.updateUser(_id, req.body));
    } catch (error) {
        return status(500).json({
            message: "Server Error"
        });
    };
});


module.exports = userRouter;