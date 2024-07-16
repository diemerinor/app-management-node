const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user.model');

const Attendance = sequelize.define('Attendance', {
    init_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        }
    }
}, {
    tableName: 'attendance',
    timestamps: false,
});

Attendance.associate = function(models) {
    Attendance.belongsTo(models.User, { foreignKey: 'user_id' });
};

module.exports = Attendance;
