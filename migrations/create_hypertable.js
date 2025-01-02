'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 將現有的表轉換為 Hypertable
    await queryInterface.sequelize.query(`
      SELECT create_hypertable('hwt9053_tilts', 'sensing_time', chunk_time_interval => INTERVAL '1 HOUR');
    `);

    // 將表空間附加到 Hypertable
    await queryInterface.sequelize.query(`
      SELECT attach_tablespace('hwt', 'hwt9053_tilts');
    `);
  },

  down: async (queryInterface, Sequelize) => {
    // 移除 Hypertable（如果需要回滾）
    await queryInterface.sequelize.query(`
      SELECT drop_chunks('hwt9053_tilts', older_than => 'infinity', newer_than => '-infinity');
      SELECT detach_tablespace('hwt', 'hwt9053_tilts');
    `);
  }
};
