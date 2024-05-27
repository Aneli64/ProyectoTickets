const { seq } = require('../../../libs/sequelize');
const { Groups, GroupSchema } = require('../../models/groups.model');

Groups.init(GroupSchema, Groups.config(seq));

async function GroupInsert(group) {
  try {
    const newGroup = await Groups.create(group);
    console.log('Nuevo ID de grupo:', newGroup.id);
    return newGroup.id; // Retorna el nuevo ID generado (UUID)
  } catch (error) {
    console.error('Error al insertar el grupo:', error);
    throw error; // Lanza el error para manejarlo en el bloque try-catch externo
  }
}

module.exports = GroupInsert;
