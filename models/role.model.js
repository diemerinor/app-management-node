const pool = require('../config/db.config');

const Role = {
    create: async (roleData) => {
        const query = 'INSERT INTO roles (role_name, description) VALUES (?, ?)';
        const [result] = await pool.execute(query, [roleData.role_name, roleData.description]);
        return result;
    },
    findById: async (id) => {
        const query = 'SELECT * FROM roles WHERE id = ?';
        const [rows] = await pool.execute(query, [id]);
        return rows[0];
    },
    findAll: async () => {
        const query = 'SELECT * FROM roles';
        const [rows] = await pool.execute(query);
        return rows;
    },
    update: async (id, roleData) => {
        const query = 'UPDATE roles SET role_name = ?, description = ? WHERE id = ?';
        const [result] = await pool.execute(query, [roleData.role_name, roleData.description, id]);
        return result;
    },
    delete: async (id) => {
        const query = 'DELETE FROM roles WHERE id = ?';
        const [result] = await pool.execute(query, [id]);
        return result;
    }
};

module.exports = Role;
