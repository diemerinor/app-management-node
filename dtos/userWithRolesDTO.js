class UserWithRolesDTO {
    constructor({ id, first_name, last_name, email, phone, image_url, job_title, UserRoles }) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.phone = phone;
        this.image_url = image_url;
        this.job_title = job_title;
        this.roles = UserRoles.map(userRole => userRole.Role.role_name);
    }
}

module.exports = UserWithRolesDTO;
