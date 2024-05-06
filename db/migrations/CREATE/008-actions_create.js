'use strict';

const { ActionsSchema, ACTIONS_TABLE } = require('../../models/action.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(ACTIONS_TABLE, ActionsSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(ACTIONS_TABLE);
  }
};
