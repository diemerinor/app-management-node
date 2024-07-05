const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendance.controller');

router.post('/', attendanceController.createAttendance);
router.get('/:id', attendanceController.getAttendanceById);
router.get('/', attendanceController.getAllAttendances);
router.put('/:id', attendanceController.updateAttendance);
router.delete('/:id', attendanceController.deleteAttendance);

module.exports = router;