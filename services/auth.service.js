const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
require('dotenv').config();

const register = async (userData) => {
    const { first_name, last_name, email, phone, password, job_title } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
        first_name,
        last_name,
        email,
        phone,
        password: hashedPassword,
        created: new Date(),
        job_title,
    });
    return newUser;
};

const login = async (email, password) => {
    const user = await User.findOne({ email });
    console.log("email"+email)
    console.log("password:"+password)
    if (!user) {
        console.log("no existe tal usuario")
        return { success: false, message: 'User not found' };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        console.log("contraseña incorrecta")
        return { success: false, message: 'Invalid password' };
    }

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.SECRET_KEY, { expiresIn: '1h' });
    return { success: true, user, token };
};

module.exports = { register, login };
