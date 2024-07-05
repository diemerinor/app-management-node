const express = require('express');
const app = express();
const sequelize = require('./config/db.config');
const authRoutes = require('./routes/auth.routes');
require('dotenv').config();

app.use(express.json());

app.use('/api/auth', authRoutes);

// Manejador de errores global
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Algo salió mal. Inténtalo de nuevo más tarde.' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;

// Manejar uncaught exceptions
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    process.exit(1);
});
