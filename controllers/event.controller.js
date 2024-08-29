const eventRepository = require('../repositories/eventRepository');

const getAllEvents = async (req, res) => {
    try {
        const events = await eventRepository.findAll();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching users with attendance' });
    }
};

const getUpcomingEvents = async (req, res) => {
    try {
        const events = await eventRepository.findByStartDateAfterNow();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching upcoming events' });
    }
};


const createEvent = async (req, res) => {
    try {
        const eventData = req.body;
        console.log("entro aca")
        const event = await eventRepository.createEvent(eventData);
        console.log("ya cree el evento")
        res.status(201).json(event);
    } catch (error) {
        res.status(500).json({ error: 'Error creating event' });
    }
};

const updateEvent = async (req, res) => {
    try {
        const id = req.params.id;
        const eventData = req.body;
        const event = await eventRepository.updateEvent(id, eventData);
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ error: 'Error updating event' });
    }
};

module.exports = {
    getAllEvents,
    getUpcomingEvents,
    createEvent,
    updateEvent,
};
