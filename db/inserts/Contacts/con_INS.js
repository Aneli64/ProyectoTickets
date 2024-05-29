const { seq } = require('../../../libs/sequelize');
const { Contact, ContactSchema } = require('../../models/contacts.model')

// Inicializamos la tabla con su esquema y configuración correspondientes
Contact.init(ContactSchema, Contact.config(seq));

async function ContactInsert(contact) {
    try {
      const newContact = await Contact.create(contact);
      console.log('Nuevo ID del contacto:', newContact.id);
    } catch (error) {
      console.error('Error al insertar el contacto:', error);
    }
}

module.exports = ContactInsert;
