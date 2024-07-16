const User = require('../models/user.model');
const UserRole = require('../models/userRole.model');
const Role = require('../models/role.model');
const UserDTO = require('../dtos/userDTO');
const UserWithRolesDTO = require('../dtos/userWithRolesDTO');

const userRepository = {
    findAllWithRoles: async () => {
        try {
            const users = await User.findAll({
                include: [{
                    model: UserRole,
                    include: [{
                        model: Role,
                        attributes: ['role_name'],
                    }],
                }],
            });
            return users.map(user => new UserWithRolesDTO(user.get({ plain: true })));
        } catch (error) {
            console.error('Error fetching users with roles:', error);
            throw error;
        }
    },
    
    findById: async (id) => {
        try {
            const user = await User.findByPk(id);
            if (!user) {
                throw new Error('User not found');
            }
            return new UserDTO(user.get({ plain: true }));
        } catch (error) {
            console.error(`Error fetching user by id ${id}:`, error);
            throw error;
        }
    },
    
    findAll: async () => {
        try {
            const users = await User.findAll();
            return users.map(user => new UserDTO(user.get({ plain: true })));
        } catch (error) {
            console.error('Error fetching users:', error);
            throw error;
        }
    },
    updateUser: async (id, updatedData) => {
        try {
            const user = await User.findByPk(id);
            if (!user) {
                throw new Error('User not found');
            }
            await user.update(updatedData);
            return new UserDTO(user.get({ plain: true }));
        } catch (error) {
            console.error(`Error updating user with id ${id}:`, error);
            throw error;
        }
    },
};

module.exports = userRepository;
