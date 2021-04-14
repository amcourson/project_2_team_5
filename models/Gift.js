const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Gift extends Model {}

Gift.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
    },
    event_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'event',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'gift',
  }
);

module.exports = Gift;
