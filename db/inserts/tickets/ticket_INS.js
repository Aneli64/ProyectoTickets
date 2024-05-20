const { seq } = require('../../../libs/sequelize');
const { Ticket, ProductSchema } = require('../../models/tickets.model')

Ticket.init(ProductSchema, Ticket.config(seq));

async function TicketInsert(ticket) {
    try {
      const newTicket = await Ticket.create(ticket);
      console.log('Nuevo ID del ticket:', newTicket.id);
    } catch (error) {
      console.error('Error al insertar el ticket:', error);
    }
}

module.exports = TicketInsert;
