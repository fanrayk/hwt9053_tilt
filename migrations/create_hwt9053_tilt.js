'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('hwt9053_tilts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      device_id: {
        type: Sequelize.STRING
      },
      ang_roll: {
        type: Sequelize.FLOAT
      },
      ang_pitch: {
        type: Sequelize.FLOAT
      },
      ang_yaw: {
        type: Sequelize.FLOAT
      },
      sensing_time: {
        primaryKey: true,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('hwt9053_tilts');
  }
};