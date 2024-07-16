class UserDTO {
    constructor({ id, first_name, last_name, email, phone, password, created, job_title, image_url }) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.created = created;
        this.job_title = job_title;
        this.image_url = image_url;
    }
}

module.exports = UserDTO;
