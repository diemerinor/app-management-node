const payrollService = require('../services/payroll.service');

const createPayroll = async (req, res) => {
    try {
        const newPayroll = await payrollService.createPayroll(req.body);
        res.status(201).json(newPayroll);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getPayrollById = async (req, res) => {
    try {
        const payroll = await payrollService.getPayrollById(req.params.id);
        if (payroll) {
            res.status(200).json(payroll);
        } else {
            res.status(404).json({ message: 'Payroll not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllPayrolls = async (req, res) => {
    try {
        const payrolls = await payrollService.getAllPayrolls();
        res.status(200).json(payrolls);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updatePayroll = async (req, res) => {
    try {
        const updatedPayroll = await payrollService.updatePayroll(req.params.id, req.body);
        res.status(200).json(updatedPayroll);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deletePayroll = async (req, res) => {
    try {
        await payrollService.deletePayroll(req.params.id);
        res.status(204).json({ message: 'Payroll deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createPayroll,
    getPayrollById,
    getAllPayrolls,
    updatePayroll,
    deletePayroll
};