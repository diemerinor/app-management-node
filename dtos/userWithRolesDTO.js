class UserWithRolesDTO {
    constructor({ id, first_name, last_name, email, phone, UserRoles }) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.phone = phone;
        this.roles = UserRoles.map(userRole => userRole.Role.role_name);
    }
}

module.exports = UserWithRolesDTO;
