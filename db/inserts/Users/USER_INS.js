const { seq } = require('../../../libs/sequelize');
const { Users, UserSchema } = require('../../models/users.model')

// Inicializamos la tabla con su esquema y configuración correspondientes
Users.init(UserSchema, Users.config(seq));

async function UserInsert(user) {
    try {
      const newUser = await Users.create(user);
      console.log('Nuevo ID de usuario:', newUser.id);
      return newUser.id
    } catch (error) {
      console.error('Error al insertar el usuario:', error);
    }

}

module.exports = UserInsert;
