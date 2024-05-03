'use strict';

const { CustomerSchema, CUSTOMERS_TABLE } = require('./../models/customers.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(CUSTOMERS_TABLE, CustomerSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(CUSTOMERS_TABLE);
  }
};
