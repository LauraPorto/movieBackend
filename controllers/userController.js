const mongoose = require('mongoose');
const User = require("../models/user");

class UserController {

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

    async updateUser(id, user) {
        //return User.findByIdAndUpdate(id);
        const userFound = User.findOne({ _id: id });
        return userFound.update(user);
    };

    async destroyUser(id) {
        return User.findByIdAndDelete(id);
    };
}



let userController = new UserController();
module.exports = userController;