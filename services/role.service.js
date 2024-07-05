const Role = require('../models/role.model');

const createRole = async (roleData) => {
    return await Role.create(roleData);
};

const getRoleById = async (id) => {
    return await Role.findById(id);
};

const getAllRoles = async () => {
    return await Role.findAll();
};

const updateRole = async (id, roleData) => {
    return await Role.update(id, roleData);
};

const deleteRole = async (id) => {
    return await Role.delete(id);
};

module.exports = {
    createRole,
    getRoleById,
    getAllRoles,
    updateRole,
    deleteRole
};
