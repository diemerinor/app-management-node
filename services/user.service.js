const User = require('../models/user.model');

const createUser = async (userData) => {
    return await User.create(userData);
};

const getUserById = async (id) => {
    return await User.findById(id);
};

const getAllUsers = async () => {
    return await User.findAll();
};

const updateUser = async (id, userData) => {
    return await User.update(id, userData);
};

const deleteUser = async (id) => {
    return await User.delete(id);
};

module.exports = {
    createUser,
    getUserById,
    getAllUsers,
    updateUser,
    deleteUser
};