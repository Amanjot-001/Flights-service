const { StatusCodes } = require('http-status-codes')
const { AirportRepository } = require('../repositories')
const AppError = require('../utils/errors/app-errors')

const airportRepository = new AirportRepository();


async function createAirport(data) {
    try {
        const airport = await airportRepository.create(data);
        return airport;
    }
    catch (error) {
        if (error.name === 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            })
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Airport object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirports() {
    try {
        const airports = await airportRepository.getAll();
        return airports;
    } catch (error) {
        throw new AppError('Cannot fetch data of all airports', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirport(id) {
    try {
        const airport = await airportRepository.get(id);
        return airport;
    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError('airport you requested not present', error.statusCode)
        }
        throw new AppError('Cannot fetch data of airport', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyAirport(id) {
    try {
        const response = await airportRepository.destroy(id);
        return response;
    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError('airport you requested not present', error.statusCode)
        }
        throw new AppError('Cannot fetch data of airport', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirport(id, data) {
    try {
        const response = await airportRepository.update(id, data);
        return response;
    } catch (error) {
        console.log(error)
        if (error.name === 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            })
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        if (error.name === 'SequelizeForeignKeyConstraintError') {
            throw new AppError("City you requested doesn't exist", StatusCodes.BAD_REQUEST);
        }
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError('airport you requested not present', error.statusCode)
        }
        throw new AppError('Cannot fetch data of airport', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
}