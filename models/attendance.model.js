const pool = require('../config/db.config');

const Attendance = {
    create: async (attendanceData) => {
        const query = 'INSERT INTO attendance (user_id, date, status) VALUES (?, ?, ?)';
        const [result] = await pool.execute(query, [attendanceData.user_id, attendanceData.date, attendanceData.status]);
        return result;
    },
    findById: async (id) => {
        const query = 'SELECT * FROM attendance WHERE id = ?';
        const [rows] = await pool.execute(query, [id]);
        return rows[0];
    },
    findAll: async () => {
        const query = 'SELECT * FROM attendance';
        const [rows] = await pool.execute(query);
        return rows;
    },
    update: async (id, attendanceData) => {
        const query = 'UPDATE attendance SET user_id = ?, date = ?, status = ? WHERE id = ?';
        const [result] = await pool.execute(query, [attendanceData.user_id, attendanceData.date, attendanceData.status, id]);
        return result;
    },
    delete: async (id) => {
        const query = 'DELETE FROM attendance WHERE id = ?';
        const [result] = await pool.execute(query, [id]);
        return result;
    }
};

module.exports = Attendance;
