const { seq } = require('../../../libs/sequelize');
const { Ticket, TicketSchema } = require('../../models/tickets.model')

// Inicializamos la tabla con su esquema y configuración correspondientes
Ticket.init(TicketSchema, Ticket.config(seq));

async function TicketInsert(ticket) {
    try {
      const newTicket = await Ticket.create(ticket);
      console.log('Nuevo ID del ticket:', newTicket.ID)
      return newTicket.ID;
    } catch (error) {
      console.error('Error al insertar el ticket:', error);
    }
}

module.exports = TicketInsert;
