'use strict';

const { TICKETS_TABLE } = require('../models/tickets.model');
const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface) => {
    queryInterface.addColumn(TICKETS_TABLE, "actionsId", {

    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'actions',
      key: 'id'
    },
    onUpdate: 'NO ACTION',
    onDelete: 'NO ACTION',

    })
  },

  down: async (queryInterface) => {
    queryInterface.removeColumn(TICKETS_TABLE, "actionsId")
  }
};