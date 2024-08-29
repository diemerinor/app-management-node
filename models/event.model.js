const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Event = sequelize.define('Event', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    init_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    created: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    place: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    is_private: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
}, {
    tableName: 'event',
    timestamps: false,
});


module.exports = Event;
