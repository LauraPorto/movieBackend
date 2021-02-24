const mongoose = require('mongoose');
const Order = require("../models/order");


class OrderController {

    constructor() {

    };

    async rentFilm(order) {
        return Order.create(order);
    };

    async findOrderById(id) {
        return Order.findById(id);
    };

    async indexAllOrders(orderCollection) {
        return Order.find(orderCollection);
    };

    async updateOrder(id, order) {
        //return User.findByIdAndUpdate(id);
        const orderFound = Order.findOne({ _id: id });
        return orderFound.update(order);
    };

    async destroyOrder(id) {
        return Order.findByIdAndDelete(id);
    };
}



let orderController = new OrderController();
module.exports = orderController;