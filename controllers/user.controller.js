const userRepository = require('../repositories/userRepository');

const getAllUsersWithRoles = async (req, res) => {
    try {
        const users = await userRepository.findAllWithRoles();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching users with roles' });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await userRepository.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ error: 'User not found' });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await userRepository.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching users' });
    }
};

const updateUser = async (req, res) => {
    try {
        const updatedData = req.body;
        const user = await userRepository.updateUser(req.params.id, updatedData);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ error: 'Error updating user' });
    }
};

module.exports = {
    getAllUsersWithRoles,
    getUserById,
    getAllUsers,
    updateUser
};
