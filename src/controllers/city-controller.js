const { StatusCodes } = require('http-status-codes')
const { CityService } = require('../services')
const { SuccessResponse, ErrorResponse } = require('../utils/common')

/**
 * POST : /cities 
 * req-body {name: 'Meerut'}
 */

async function createCity(req, res) {
    try {
        const city = await CityService.createCity({
            name: req.body.name
        })
        SuccessResponse.data = city;
        SuccessResponse.message = 'Successfully created an city';
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);
    }
    catch (error) {
        ErrorResponse.error = error;
        ErrorResponse.message = 'Something went wrong while creating city';
        return res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}

module.exports = {
    createCity
}