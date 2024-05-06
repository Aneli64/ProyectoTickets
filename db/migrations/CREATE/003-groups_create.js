'use strict';

const { GroupSchema, GROUPS_TABLE } = require('../../models/groups.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(GROUPS_TABLE, GroupSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(GROUPS_TABLE);
  }
};
