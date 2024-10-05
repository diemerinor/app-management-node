const authService = require('../services/auth.service');

const register = async (req, res) => {
    try {
        const newUser = await authService.register(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al registrar el usuario.' });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { success, user, token } = await authService.login(email, password);
        res.status(200).json({ success:success, user, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success:false, message: error.message });
    }
};

module.exports = { register, login };
