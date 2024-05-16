const { seq } = require('../../libs/sequelize');
const { Organization, OrgSchema } = require('../models/org.model')

Organization.init(OrgSchema, Organization.config(seq));

async function insertOrganization(name) {
    try {
      const newOrganization = await Organization.create(name);
      console.log('Nuevo ID de organización:', newOrganization.id);
    } catch (error) {
      console.error('Error al insertar la organización:', error);
    }
}

module.exports = insertOrganization;
