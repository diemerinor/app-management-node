const express = require('express');
const cors = require('cors');  
const app = express();
require('dotenv').config();

app.use(cors({
  origin: 'http://localhost:4200',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const roleRoutes = require('./routes/role.routes');
const attendanceRoutes = require('./routes/attendance.routes');
const payrollRoutes = require('./routes/payroll.routes');
const benefitRoutes = require('./routes/benefit.routes');
const benefitTypeRoutes = require('./routes/benefitType.routes');

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/payroll', payrollRoutes);
app.use('/api/benefits', benefitRoutes);
app.use('/api/benefit-types', benefitTypeRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Algo salió mal. Inténtalo de nuevo más tarde.' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const sequelize = require('./config/database');
const User = require('./models/user.model');
const UserRole = require('./models/userRole.model');
const Role = require('./models/role.model');
const Attendance = require('./models/attendance.model');

User.associate({ UserRole });
Role.associate({ UserRole });
UserRole.associate({ User, Role });
Attendance.associate = ({ User });


(async () => {
    try {
        await sequelize.sync();
        console.log('Database synced!');
    } catch (error) {
        console.error('Unable to sync database:', error);
    }
})();

module.exports = app;
