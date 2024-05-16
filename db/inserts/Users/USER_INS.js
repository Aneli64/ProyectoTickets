const { seq } = require('../../../libs/sequelize');
const { Users, UserSchema } = require('../../models/users.model')

Users.init(UserSchema, Users.config(seq));

async function UserInsert(user) {
    try {
      const newUser = await Users.create(user);
      console.log('Nuevo ID de usuario:', newUser.id);
    } catch (error) {
      console.error('Error al insertar el usuario:', error);
    }
}

module.exports = UserInsert;
