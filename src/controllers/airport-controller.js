const { StatusCodes } = require('http-status-codes')
const { AirportService } = require('../services')
const { SuccessResponse, ErrorResponse } = require('../utils/common')

/**
 * POST : /airports 
 * req-body {name: 'IGI', cityId: 5, address: '', code: 'DEL}
 */

async function createAirport(req, res) {
    try {
        const airport = await AirportService.createAirport({
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId,
        })
        SuccessResponse.data = airport;
        SuccessResponse.message = 'Successfully created an airport';
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);
    }
    catch (error) {
        ErrorResponse.error = error;
        ErrorResponse.message = 'Something went wrong while creating airport';
        return res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}

/**
 * GET : /airports
 * req-body {}
 */

async function getAirports(req, res) {
    try {
        const airports = await AirportService.getAirports();
        SuccessResponse.data = airports;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

/**
 * GET : /airports/:id 
 * req-body {}
 */

async function getAirport(req, res) {
    try {
        const airports = await AirportService.getAirport(req.params.id);
        SuccessResponse.data = airports;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

/**
 * DELETE : /airports/:id
 * req-body {}
 */

async function destroyAirport(req, res) {
    try {
        const response = await AirportService.destroyAirport(req.params.id);
        SuccessResponse.data = response;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

async function updateAirport(req, res) {
    try {
        const updateData = {};
        if (req.body.name)
            updateData.name = req.body.name;
        if (req.body.code)
            updateData.code = req.body.code;
        if (req.body.address)
            updateData.address = req.body.address;
        if(req.body.cityId)
            updateData.cityId = req.body.cityId;
        const airport = await AirportService.updateAirport(req.params.id, updateData);
        SuccessResponse.data = airport;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
}