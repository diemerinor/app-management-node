const { Op, literal } = require('sequelize');
const User = require('../models/user.model');
const Attendance = require('../models/attendance.model');
const UserAttendanceDTO = require('../dtos/userAttendanceDTO');

const attendanceRepository = {
    findUsersWithAttendanceByDate: async (date) => {
        try {
            const users = await User.findAll({
                include: [{
                    model: Attendance,
                    where: literal(`DATE(init_date) = '${date}'`),
                    required: false // Esto permite que se incluyan usuarios aunque no tengan asistencias en la fecha específica
                }]
            });

            return users.map(user => {
                const attendance = user.Attendances[0];
                const status = attendance ? 'Presente' : 'Ausente';
                return new UserAttendanceDTO({
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                    init_date: attendance ? attendance.init_date : null,
                    end_date: attendance ? attendance.end_date : null,
                    status: status
                });
            });
        } catch (error) {
            console.error('Error fetching users with attendance:', error);
            throw error;
        }
    }
};

module.exports = attendanceRepository;
