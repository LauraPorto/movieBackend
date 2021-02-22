const userRouter = require("express").Router();
const UserController = require("../controllers/userController");
const User = require("../models/user");
const userModel = require("../models/user");

userRouter.get('/allUsers', async(req, res) => {
    try {
        res.json(await UserController.indexAllUsers());
    } catch (error) {
        return sendStatus(500).json({
            message: "Server Error"
        });
    };
});

userRouter.get('/userId', async(req, res) => {
    try {
        const id = req.params.id;
        res.json(await UserController.findUserById(id));
    } catch (error) {
        return sendStatus(500).json({
            message: "Server Error"
        });
    };
});

userRouter.post('/register', async(req, res) => {
    try {
        const id = res.json(await UserController.register(new User(req.body)));
        const status = "success";
        res.json({ id, status });
    } catch (error) {
        return sendStatus(500).json({
            message: "Server Error"
        });
    };
});

userRouter.delete('/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const status = "deleted";
        await UserController.destroyUser(id);
        res.json({ id, status });
    } catch (error) {
        return sendStatus(500).json({
            message: "Server Error"
        });
    };
});

userRouter.put('/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const status = "success";
        await UserController.updateUser(id, new User(req.body));
        res.json({ id, status });
    } catch (error) {
        return sendStatus(500).json({
            message: "Server Error"
        });
    };
});


module.exports = userRouter;