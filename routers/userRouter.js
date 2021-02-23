const userRouter = require("express").Router();
const userController = require("../controllers/userController");
const User = require("../models/user");


//ENDPOINTS CRUD

//Todos los usuarios
userRouter.get('/allUsers', async(req, res) => {
    try {
        res.json(await userController.indexAllUsers());
    } catch (error) {
        return status(500).json({
            message: "Server Error"
        });
    };
});


//Usuario por ID
userRouter.get('/userId', async(req, res) => {
    try {
        const id = req.params.id;
        res.json(await userController.findUserById(id));
    } catch (error) {
        return status(500).json({
            message: "Server Error"
        });
    };
});

//Registro usuario
userRouter.post('/register', async(req, res) => {
    try {
        const id = res.json(await userController.register(new User(req.body)));
        const status = "success";
        res.json({ id, status });
    } catch (error) {
        return status(500).json({
            message: "Server Error"
        });
    };
});

//Borrar usuario por ID
userRouter.delete('/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const status = "deleted";
        await UserController.destroyUser(id);
        res.json({ id, status });
    } catch (error) {
        return status(500).json({
            message: "Server Error"
        });
    };
});

//Modificar datos usuario
userRouter.put('/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const status = "success";
        await userController.updateUser(id, new Client(req.body));
        res.json({ id, status });
    } catch (error) {
        return status(500).json({
            message: "Server Error"
        });
    };
});


module.exports = userRouter;