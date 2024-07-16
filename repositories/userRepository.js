const User = require('../models/user.model');
const UserRole = require('../models/userRole.model');
const Role = require('../models/role.model');
const UserWithRolesDTO = require('../dtos/userWithRolesDTO.js');

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
};

module.exports = userRepository;
