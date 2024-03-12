const express = require('express')

const { FlightController } = require('../../controllers')
const { FlightMiddlewares } = require('../../middlewares')
const router = express.Router();

// /api/v1/flights
router.post('/', 
    FlightMiddlewares.validateCreateRequest,
    FlightController.createFlight);

// /api/v1/flights?trips=MUM-DEL
router.get('/', FlightController.getAllFlights)

router.get('/:id', FlightController.getFlight);

router.patch('/:id/seats', FlightMiddlewares.validateUpdateSeatsRequest, FlightController.updateSeats);

module.exports = router;