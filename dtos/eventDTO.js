class EventDTO {
    constructor({id, title, description, place, init_date, end_date, status, is_private, created}) {
        this.id= id;
        this.title = title;
        this.description = description;
        this.place = place;
        this.init_date = init_date;
        this.end_date = end_date;
        this.status = status;
        this.created = created;
        this.is_private = is_private;
    }
}

module.exports = EventDTO;
