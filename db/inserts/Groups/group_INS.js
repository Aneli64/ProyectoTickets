const { seq } = require('../../../libs/sequelize');
const { Groups, GroupSchema } = require('../../models/groups.model')

Groups.init(GroupSchema, Groups.config(seq));

async function GroupInsert(group) {
    try {
      const newGroup = await Groups.create(group);
      console.log('Nuevo ID de grupo:', newGroup.id);
      return newGroup.id;
    } catch (error) {
      console.error('Error al insertar el grupo:', error);
    }
}

module.exports = GroupInsert;
