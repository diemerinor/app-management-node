const Attendance = require('../models/attendance.model');

const createAttendance = async (attendanceData) => {
    return await Attendance.create(attendanceData);
};

const getAttendanceById = async (id) => {
    return await Attendance.findById(id);
};

const getAllAttendances = async () => {
    return await Attendance.findAll();
};

const updateAttendance = async (id, attendanceData) => {
    return await Attendance.update(id, attendanceData);
};

const deleteAttendance = async (id) => {
    return await Attendance.delete(id);
};

module.exports = {
    createAttendance,
    getAttendanceById,
    getAllAttendances,
    updateAttendance,
    deleteAttendance
};
