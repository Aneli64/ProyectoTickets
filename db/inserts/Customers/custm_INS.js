const { seq } = require('../../../libs/sequelize');
const { Customer, CustomerSchema } = require('../../models/customers.model')

// Inicializamos la tabla con su esquema y configuración correspondientes
Customer.init(CustomerSchema, Customer.config(seq));

async function CustomInsert(customer) {
    try {
      const newCustomer = await Customer.create(customer);
      console.log('Nuevo ID del customer:', newCustomer.id);
    } catch (error) {
      console.error('Error al insertar el customer:', error);
    }
}

module.exports = CustomInsert;
