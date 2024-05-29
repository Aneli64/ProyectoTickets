const { seq } = require('../../../libs/sequelize');
const { Organization, OrgSchema } = require('../../models/org.model')

// Inicializamos la tabla con su esquema y configuración correspondientes
Organization.init(OrgSchema, Organization.config(seq));

async function OrgInsert(name) {
    try {
      const newOrganization = await Organization.create(name);
      console.log('Nuevo ID de Grupo:', newOrganization.id);
    } catch (error) {
      console.error('Error al insertar el grupo:', error);
    }
}

module.exports = OrgInsert;
