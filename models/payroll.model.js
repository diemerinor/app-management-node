const pool = require('../config/db.config');

const Payroll = {
    create: async (payrollData) => {
        const query = 'INSERT INTO payroll (user_id, payment_date, amount, status, updated_by) VALUES (?, ?, ?, ?, ?)';
        const [result] = await pool.execute(query, [payrollData.user_id, payrollData.payment_date, payrollData.amount, payrollData.status, payrollData.updated_by]);
        return result;
    },
    findById: async (id) => {
        const query = 'SELECT * FROM payroll WHERE id = ?';
        const [rows] = await pool.execute(query, [id]);
        return rows[0];
    },
    findAll: async () => {
        const query = 'SELECT * FROM payroll';
        const [rows] = await pool.execute(query);
        return rows;
    },
    update: async (id, payrollData) => {
        const query = 'UPDATE payroll SET user_id = ?, payment_date = ?, amount = ?, status = ?, updated_by = ? WHERE id = ?';
        const [result] = await pool.execute(query, [payrollData.user_id, payrollData.payment_date, payrollData.amount, payrollData.status, payrollData.updated_by, id]);
        return result;
    },
    delete: async (id) => {
        const query = 'DELETE FROM payroll WHERE id = ?';
        const [result] = await pool.execute(query, [id]);
        return result;
    }
};

module.exports = Payroll;
