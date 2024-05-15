'use strict';

const { ACTIONS_TABLE } = require('../models/action.model');
const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface) => {
    queryInterface.addColumn(ACTIONS_TABLE, "ticketsId", {

    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'tickets',
      key: 'id'
    },
    onUpdate: 'NO ACTION',
    onDelete: 'NO ACTION',

    })
  },

  down: async (queryInterface) => {
    queryInterface.removeColumn(ACTIONS_TABLE, "ticketsId")
  }
};
