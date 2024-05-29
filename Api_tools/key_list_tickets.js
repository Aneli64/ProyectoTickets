const fs = require('fs').promises;

// Lista de claves obtenidas del json de las claves de tickets
async function js_tickets_to_list() {
  try {
    const data = await fs.readFile('db/inserts/claves_json/tickets_keys.json', 'utf8');
    const ticketsData = JSON.parse(data);
    const listaKeysTickets = ticketsData.map(item => ({
      oldKey: item.oldKey,
      newKey: item.newKey
    }));
    return listaKeysTickets;
  } catch (error) {
    console.error('Error al leer el archivo:', error);
    return []; // Devuelve una lista vacía en caso de error
  }
}

module.exports = js_tickets_to_list;
