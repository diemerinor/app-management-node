const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (payload) => {
    return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1h' });
};

module.exports = { generateToken };
