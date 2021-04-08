const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Guest extends Model {}

Guest.init(
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
    RSVP: {
      type: DataTypes.STRING,
      allowNull: false
    },
    adultCount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    kidsCount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    potluck_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'potluck',
          key: 'id',
        },
    },
    gift_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'gift',
          key: 'id',
        },
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
    modelName: 'guest',
  }
);

module.exports = Guest;
