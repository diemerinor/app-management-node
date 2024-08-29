const { Op, literal } = require('sequelize');
const Event = require('../models/event.model');
const EventDTO = require('../dtos/eventDTO');

const eventRepository = {
    findByStartDateAfterNow: async (date) => {
        try {
            const events = await Event.findAll({
                where: {
                    init_date: {
                        //Op.gt: Es el operador de Sequelize para "mayor que"
                        [Op.gt]: new Date()
                    }
                }
            });
            // events.map(x=>{
            //     const status = (x.init_date > new Date())?
            // })
            return events;
        } catch (error) {
            console.error('Error fetching upcoming events:', error);
            throw error;
        }
    },

    findAll: async () => {
        try {
            const events = await Event.findAll();
            return events.map(event => new EventDTO(event.get({ plain: true })));
        } catch (error) {
            console.error('Error fetching events:', error);
            throw error;
        }
    },

    createEvent: async (eventData) => {
        try {
            eventData.created = new Date();
            const event = await Event.create(eventData);
            return event;
        } catch (error) {
            console.error('Error creating event:', error);
            throw error;
        }
    },

    updateEvent: async (id, eventData) => {
        try {
            const event = await Event.findByPk(id);
            if (!event) {
                throw new Error('Event not found');
            }
            await event.update(eventData);
            return event;
        } catch (error) {
            console.error('Error updating event:', error);
            throw error;
        }
    }
};

module.exports = eventRepository;
