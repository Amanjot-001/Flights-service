'use strict';

const { Op } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cities', [
      {
        name: 'Mumbai',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'New Delhi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Varanasi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bengaluru',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('City', {[Op.or]: [{name: 'Mumbai'}, {name: 'New Delhi'}, {name: 'Varanasi'}, {name: 'Bengaluru'}]});
  }
};
