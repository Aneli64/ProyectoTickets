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
    for (const element of actions) {
      // Cambiar la clave del TicketID si es necesario
      const keyMapping = keys.find(key => key.oldKey == element.TicketID);
      if (keyMapping) {
        element.TicketID = keyMapping.newKey;
      }
      // Convertir las fechas al formato necesario
      const dateModified = swapEngCalendar(element.DateModified);
      const dateCreated = swapEngCalendar(element.DateCreated);
      const dateClosed = swapEngCalendar(element.DateClosed);

      // console.log(element.TicketID)
      // Insertar la acción en la base de datos
      await ActionInsert({
        action_Text: element.Description,
        name: element.Name,
        dateModified: dateModified,
        dateCreated: dateCreated,
        dateClosed: dateClosed,
        daysClosed: element.DaysClosed,
        daysOpened: element.DaysOpened,
        hoursSpent: element.HoursSpent,
        ticketID: element.TicketID,
      });
    }
  } catch (error) {
    console.error('Error al procesar las acciones:', error);
  }
}

// Llamar a la función principal
// processActions();

module.exports = { processAction };
