'use strict';

const { Op } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Flights', [
      {
        flightNumber: 'UK 808',
        airplaneId: 1,
        departureAirportId: 'DEL',
        arrivalAirportId: 'BLR',
        arrivalTime: '2024-02-29 23:00:00',
        departureTime: '2024-02-28 20:00:00',
        price: 3500,
        totalSeats: 120,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Flight', {[Op.or]: [{flightNumber: 'UK 808'}]})
  }
};
