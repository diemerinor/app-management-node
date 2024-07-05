const Payroll = require('../models/payroll.model');

const createPayroll = async (payrollData) => {
    return await Payroll.create(payrollData);
};

const getPayrollById = async (id) => {
    return await Payroll.findById(id);
};

const getAllPayrolls = async () => {
    return await Payroll.findAll();
};

const updatePayroll = async (id, payrollData) => {
    return await Payroll.update(id, payrollData);
};

const deletePayroll = async (id) => {
    return await Payroll.delete(id);
};

module.exports = {
    createPayroll,
    getPayrollById,
    getAllPayrolls,
    updatePayroll,
    deletePayroll
};
