'use strict';

const { Op } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Flights', [
      {
        flightNumber: '',
        airplaneId: ,
        departureAirportId: '',
        arrivalAirportId: '',
        arrivalTime: ,
        departureTime: ,
        price: ,
        totalSeats: ,
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Flight', {[Op.or]: [{flightNumber: ''}, {flightNumber: ''}]})
  }
};
