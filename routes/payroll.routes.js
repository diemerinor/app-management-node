const express = require('express');
const router = express.Router();
const payrollController = require('../controllers/payroll.controller');

router.post('/', payrollController.createPayroll);
router.get('/:id', payrollController.getPayrollById);
router.get('/', payrollController.getAllPayrolls);
router.put('/:id', payrollController.updatePayroll);
router.delete('/:id', payrollController.deletePayroll);

module.exports = router;