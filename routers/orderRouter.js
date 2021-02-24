const orderRouter = require("express").Router();
const orderController = require("../controllers/orderController");
const oderModel = require("../models/order");

//ENDPOINTS CRUD
//Todos los pedidos
orderRouter.get('/orders', async(req, res) => {
    try {
        let resultado = await orderController.indexAllOrders();
        res.json(resultado);
    } catch (error) {
        return status(500).json({
            message: "Server Error"
        });
    };
});


//Buscar petición por ID
orderRouter.get('/search-order/:id', async(req, res) => {
    try {
        const id = req.params.id;
        let resultado = await orderController.findOrderById(id);
        res.json(resultado);
    } catch (error) {
        return status(500).json({
            message: "Server Error"
        });
    };
});

//Realizar un pedido
orderRouter.post('/add-order', async(req, res) => {
    try {
        const newOrder = await orderController.rentFilm(req.body);
        const status = "success";
        res.json({ newUser, status });
    } catch (error) {
        return status(500).json({
            message: "Server Error"
        });
    };
});

//Borrar una petición
orderRouter.delete('delete-order/:id', async(req, res) => {
    try {
        console.log("Tamos dentro");
        const id = req.params.id;
        const status = "deleted";
        let resultado = await orderController.destroyOrder(_id);
        res.json({ resultado, status });
    } catch (error) {
        return status(500).json({
            message: "Server Error"
        });
    };
});

//Modificar petición
orderRouter.put('update-order/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const status = "success";
        const resultado = await orderController.updateOrder(id, req.body);
        res.json(resultado);
    } catch (error) {
        return status(500).json({
            message: "Server Error"
        });
    };
});




module.exports = orderRouter;