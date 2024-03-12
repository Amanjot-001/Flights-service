const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-errors')

function validateCreateRequest(req, res, next) {
    let validationErrors = [];
    if (!req.body.flightNumber) {
        validationErrors.push('flightNumber not found in incoming request in correct form');
    }
    if (!req.body.airplaneId) {
        validationErrors.push('airplaneId not found in incoming request in correct form');
    }
    if (!req.body.departureAirportId) {
        validationErrors.push('departureAirportId not found in incoming request in correct form');
    }
    if (!req.body.arrivalAirportId) {
        validationErrors.push('arrivalAirportId not found in incoming request in correct form');
    }
    if (!req.body.arrivalTime) {
        validationErrors.push('arrivalTime not found in incoming request in correct form');
    }
    if (!req.body.departureTime) {
        validationErrors.push('departureTime not found in incoming request in correct form');
    }
    if (!req.body.price) {
        validationErrors.push('price not found in incoming request in correct form');
    }
    if (!req.body.totalSeats) {
        validationErrors.push('totalSeats not found in incoming request in correct form');
    }
    if (req.body.departureTime && req.body.arrivalTime && req.body.departureTime > req.body.arrivalTime) {
        validationErrors.push('departure time is greater than arrival time');
    }

    if(req.body.departureAirportId && req.body.arrivalAirportId && req.body.departureAirportId === req.body.arrivalAirportId) {
        validationErrors.push('departure airportID cannot be same as arrival airportId');
    }

    if (validationErrors.length > 0) {
        ErrorResponse.message = 'Something went wrong while creating airport';
        ErrorResponse.error = new AppError(validationErrors, StatusCodes.BAD_REQUEST);
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }
    next();
}

function validateUpdateSeatsRequest(req, res, next) {
    if(!req.body.seats) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = new AppError(['seats not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    next();
}

module.exports = {
    validateCreateRequest,
    validateUpdateSeatsRequest
}