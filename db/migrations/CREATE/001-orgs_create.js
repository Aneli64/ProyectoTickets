'use strict';

const {ORG_TABLE, OrgSchema } = require('../../models/org.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(ORG_TABLE, OrgSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(ORG_TABLE);
  }
};
