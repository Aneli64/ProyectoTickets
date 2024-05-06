'use strict';

const { TicketSchema, TICKETS_TABLE } = require('../../models/tickets.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(TICKETS_TABLE, TicketSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(TICKETS_TABLE);
  }
};
