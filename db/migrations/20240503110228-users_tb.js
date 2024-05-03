'use strict';

const { UserSchema, USERS_TABLE } = require('./../models/users.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(USERS_TABLE, UserSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(USERS_TABLE);
  }
};
