const attendanceService = require('../services/attendance.service');

const createAttendance = async (req, res) => {
    try {
        const newAttendance = await attendanceService.createAttendance(req.body);
        res.status(201).json(newAttendance);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAttendanceById = async (req, res) => {
    try {
        const attendance = await attendanceService.getAttendanceById(req.params.id);
        if (attendance) {
            res.status(200).json(attendance);
        } else {
            res.status(404).json({ message: 'Attendance not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllAttendances = async (req, res) => {
    try {
        const attendances = await attendanceService.getAllAttendances();
        res.status(200).json(attendances);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAttendance = async (req, res) => {
    try {
        const updatedAttendance = await attendanceService.updateAttendance(req.params.id, req.body);
        res.status(200).json(updatedAttendance);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteAttendance = async (req, res) => {
    try {
        await attendanceService.deleteAttendance(req.params.id);
        res.status(204).json({ message: 'Attendance deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createAttendance,
    getAttendanceById,
    getAllAttendances,
    updateAttendance,
    deleteAttendance
};