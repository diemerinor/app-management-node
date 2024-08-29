const express = require('express');
const router = express.Router();
const eventController = require('../controllers/event.controller');

router.post('/', eventController.getUpcomingEvents);
router.get('/', eventController.getAllEvents);
router.post('/event/create', eventController.createEvent);
router.put('/:id', eventController.updateEvent);

module.exports = router;
