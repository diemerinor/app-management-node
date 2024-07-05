const pool = require('../config/db.config');

const User = {
    create: async (userData) => {
        const query = 'INSERT INTO users (first_name, last_name, email, phone, password, created, job_title) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const [result] = await pool.execute(query, [
            userData.first_name,
            userData.last_name,
            userData.email,
            userData.phone,
            userData.password,
            userData.created,
            userData.job_title
        ]);
        return result;
    },
    findByEmail: async (email) => {
        const query = 'SELECT * FROM users WHERE email = ?';
        const [rows] = await pool.execute(query, [email]);
        return rows[0];
    },
    findById: async (id) => {
        const query = 'SELECT * FROM users WHERE id = ?';
        const [rows] = await pool.execute(query, [id]);
        return rows[0];
    }
};

module.exports = User;
