'use strict';

const { Op } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Airports', [
      {
        name: 'IGI Airport',
        code: 'DEL',
        address: 'New Delhi, Delhi 110037',
        cityId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'CSI Airport',
        code: 'MUM',
        address: 'Mumbai, Maharashtra 400099',
        cityId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kempegowda Airport',
        code: 'BLR',
        address: 'KIAL Rd, Devanahalli, Bengaluru, Karnataka 560300',
        cityId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'LBS Airport',
        code: 'VNS',
        address: 'Varanasi, Babatpur, Uttar Pradesh 221006',
        cityId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Airport', {[Op.or]: [{name: 'IGI Airport'}, {name: 'CSI Airport'}, {name: 'kempegowda Airport'}, {name: 'LBS Airport'}]})
  }
};
