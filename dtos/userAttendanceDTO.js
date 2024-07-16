class UserAttendanceDTO {
    constructor({ first_name, last_name, email, init_date, end_date, status }) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.init_date = init_date;
        this.end_date = end_date;
        this.status = status;
    }
}

module.exports = UserAttendanceDTO;
