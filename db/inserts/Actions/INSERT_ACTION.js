const ActionInsert = require("../Actions/act_INS");
const fs = require('fs').promises;
const { swapEngCalendar } = require("../../../Api_tools/swap_fecha");
const js_tickets_to_list = require("../../../Api_tools/key_list_tickets");

// Función para leer y procesar las acciones
async function processAction() {
  try {
    const data = await fs.readFile('apiJSON/actions.json', 'utf8');
    const actionData = JSON.parse(data);
    const actions = actionData.Actions;

    // Obtener las claves antiguas y nuevas de los tickets
    const keys = await js_tickets_to_list();

    // Procesar cada acciónticketsData.map
    for (const action of actions) {
      // Cambiar la clave del TicketID si es necesario
      const keyMapping = keys.find(key => key.oldKey == action.TicketID);
      if (keyMapping) {
        action.TicketID = keyMapping.newKey;
      }
      // Convertir las fechas al formato necesario
      action.DateModified = swapEngCalendar(action.DateModified);
      action.DateCreated = swapEngCalendar(action.DateCreated);
      action.DateClosed= swapEngCalendar(action.DateClosed);

      // Insertar la acción en la base de datos
      await ActionInsert(action)
    }
  } catch (error) {
    console.error('Error al procesar las acciones:', error);
  }
}

module.exports = { processAction };
