const pool = require('../config/db.config');

const Benefit = {
    create: async (benefitData) => {
        const query = 'INSERT INTO benefits (user_id, benefit_type_id, request_date, status, created, updated, updated_by) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const [result] = await pool.execute(query, [
            benefitData.user_id,
            benefitData.benefit_type_id,
            benefitData.request_date,
            benefitData.status,
            benefitData.created,
            benefitData.updated,
            benefitData.updated_by
        ]);
        return result;
    },
    findById: async (id) => {
        const query = 'SELECT * FROM benefits WHERE id = ?';
        const [rows] = await pool.execute(query, [id]);
        return rows[0];
    },
    findAll: async () => {
        const query = 'SELECT * FROM benefits';
        const [rows] = await pool.execute(query);
        return rows;
    },
    update: async (id, benefitData) => {
        const query = 'UPDATE benefits SET user_id = ?, benefit_type_id = ?, request_date = ?, status = ?, created = ?, updated = ?, updated_by = ? WHERE id = ?';
        const [result] = await pool.execute(query, [
            benefitData.user_id,
            benefitData.benefit_type_id,
            benefitData.request_date,
            benefitData.status,
            benefitData.created,
            benefitData.updated,
            benefitData.updated_by,
            id
        ]);
        return result;
    },
    delete: async (id) => {
        const query = 'DELETE FROM benefits WHERE id = ?';
        const [result] = await pool.execute(query, [id]);
        return result;
    }
};

module.exports = Benefit;
