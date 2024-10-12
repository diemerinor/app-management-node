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
        console.log("data login:")
        console.log(req.body)
        const { code, password } = req.body;
        const { success, user, token, dark_mode } = await authService.login(code, password);
        console.log("dark Mode:"+dark_mode)
        res.status(200).json({ success:success, user, token, dark_mode });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success:false, message: error.message });
    }
};

module.exports = { register, login };
