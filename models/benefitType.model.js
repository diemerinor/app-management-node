const pool = require('../config/db.config');

const BenefitType = {
    create: async (benefitTypeData) => {
        const query = 'INSERT INTO benefit_types (benefit_name) VALUES (?)';
        const [result] = await pool.execute(query, [benefitTypeData.benefit_name]);
        return result;
    },
    findById: async (id) => {
        const query = 'SELECT * FROM benefit_types WHERE id = ?';
        const [rows] = await pool.execute(query, [id]);
        return rows[0];
    },
    findAll: async () => {
        const query = 'SELECT * FROM benefit_types';
        const [rows] = await pool.execute(query);
        return rows;
    },
    update: async (id, benefitTypeData) => {
        const query = 'UPDATE benefit_types SET benefit_name = ? WHERE id = ?';
        const [result] = await pool.execute(query, [benefitTypeData.benefit_name, id]);
        return result;
    },
    delete: async (id) => {
        const query = 'DELETE FROM benefit_types WHERE id = ?';
        const [result] = await pool.execute(query, [id]);
        return result;
    }
};

module.exports = BenefitType;
