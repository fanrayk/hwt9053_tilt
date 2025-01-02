'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hwt9053_tilt extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  hwt9053_tilt.init({
    device_id: DataTypes.STRING,
    ang_roll: DataTypes.FLOAT,
    ang_pitch: DataTypes.FLOAT,
    ang_yaw: DataTypes.FLOAT,
    sensing_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'hwt9053_tilt',
  });
  return hwt9053_tilt;
};