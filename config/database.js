const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('app-management', 'diegomr', 'AppStore2024!', {
    host: 'p3plzcpnl503504.prod.phx3.secureserver.net',
    dialect: 'mysql',
});

module.exports = sequelize;
