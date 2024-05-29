const { seq } = require('../../../libs/sequelize');
const { Action, ActionsSchema } = require('../../models/action.model')

// Inicializamos la tabla con su esquema y configuración correspondientes
Action.init(ActionsSchema, Action.config(seq));

async function ActionInsert(action) {
    try {
      const newAction = await Action.create(action);
      console.log('Nuevo ID del action:', newAction.id);
    } catch (error) {
      console.error('Error al insertar el action:', error);
    }
}

module.exports = ActionInsert;
