const attendanceRepository = require('../repositories/attendancesRepository');

const getUsersWithAttendanceByDate = async (req, res) => {
    try {
        const { date } = req.body;
        const users = await attendanceRepository.findUsersWithAttendanceByDate(date);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching users with attendance' });
    }
};

module.exports = {
    getUsersWithAttendanceByDate,
};
