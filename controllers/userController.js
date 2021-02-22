const mongoose = require('mongoose');
const User = require("../models/user");

class Client {

    constructor() {

    };

    async register(user) {
        return User.create(user);
    };

    async findUserById(id) {
        return User.findById(id);
    };

    async indexAllUsers() {
        return User.find();
    };

    async updateUser(id) {
        return User.findByIdAndUpdate(id);
    };

    async destroyUser(id) {
        return User.findOneAndDelete(id);
    };
}



let userController = new Client();
module.exports = userController;