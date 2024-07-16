const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const UserRole = require('./userRole.model');
const Attendance = require('./attendance.model');

const User = sequelize.define('User', {
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    created: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    job_title: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: 'users',
    timestamps: false,
});

User.associate = function(models) {
    User.hasMany(UserRole, { foreignKey: 'user_id' });  // Usa el modelo importado UserRole
    User.hasMany(Attendance, { foreignKey: 'user_id' });  // Usa el modelo importado Attendance
};

module.exports = User;
