const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const UserRole = require('./userRole.model');

const Role = sequelize.define('Role', {
    role_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'roles',
    timestamps: false,
});

Role.associate = function(models) {
    Role.hasMany(models.UserRole, { foreignKey: 'role_id' });
};

module.exports = Role;
