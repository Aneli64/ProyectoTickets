'use strict';

const { ContactSchema, CONTACTS_TABLE } = require('../../models/contacts.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(CONTACTS_TABLE, ContactSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(CONTACTS_TABLE);
  }
};
