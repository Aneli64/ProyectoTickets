const fs = require('fs').promises;
const TicketInsert = require("./ticket_INS");
const js_group_to_list = require("../../../Api_tools/key_list_groups");
const js_product_to_list = require("../../../Api_tools/key_list_products");
const js_users_to_list = require("../../../Api_tools/key_list_users");
const { swapEngCalendar } = require("../../../Api_tools/swap_fecha");

// Función para procesar cada ticket y agregar las claves antiguas y nuevas al array de claves
async function processTicket(tiquet, listaKeysGroup, listaKeysProduct, listaKeysUsers, keysArray) {
  // Cambio de formato para las 4 fechas que ocasionan problemas (formato americano y español)
  tiquet.DueDate = swapEngCalendar(tiquet.DueDate);
  tiquet.DateClosed = swapEngCalendar(tiquet.DateClosed);
  tiquet.DateCreated = swapEngCalendar(tiquet.DateCreated);
  tiquet.DateModified = swapEngCalendar(tiquet.DateModified);

  // Cambiamos las claves de usuario a las nuevas
  for (const item of listaKeysUsers) {
    if (tiquet.UserID == item["oldKey"]) {
      tiquet.UserID = item["newKey"];
      break;
    }
  }

  // Cambiamos las claves de grupo a las nuevas
  for (const item of listaKeysGroup) {
    if (tiquet.GroupID == item["oldKey"]) {
      tiquet.GroupID = item["newKey"];
      break;
    }
  }

  // Cambiamos las claves de producto a las nuevas
  for (const item of listaKeysProduct) {
    if (tiquet.ProductID == item["oldKey"]) {
      tiquet.ProductID = item["newKey"];
      break;
    }
  }

  // Inserción del ticket en la base de datos
  const newTicketId = await TicketInsert({
    userId: tiquet.UserID,
    groupId: tiquet.GroupID,
    productId: tiquet.ProductID,
    orgId: 748448,
    solvedVersion: tiquet.SolvedVersion,
    ticketTypeName: tiquet.TicketTypeName,
    status: tiquet.Status,
    statusPosition: tiquet.StatusPosition,
    reportedVersion: tiquet.ReportedVersion,
    severityPosition: tiquet.SeverityPosition,
    isClosed: tiquet.IsClosed,
    severity: tiquet.Severity,
    ticketNumber: tiquet.TicketNumber,
    isVisibleOnPortal: tiquet.IsVisibleOnPortal,
    isKnowledgeBase: tiquet.IsKnowledgeBase,
    reportedVersionID: tiquet.ReportedVersionID,
    solvedVersionID: tiquet.SolvedVersionID,
    ticketStatusID: tiquet.TicketStatusID,
    ticketTypeID: tiquet.TicketTypeID,
    ticketSeverityID: tiquet.TicketSeverityID,
    name: tiquet.Name,
    parentID: tiquet.ParentID,
    modifierID: tiquet.ModifierID,
    creatorID: tiquet.CreatorID,
    dateModified: tiquet.DateModified,
    dateCreated: tiquet.DateCreated,
    dateClosed: tiquet.DateClosed,
    closerId: tiquet.CloserID,
    daysClosed: tiquet.DaysClosed,
    daysOpened: tiquet.DaysOpened,
    closerName: tiquet.CloserName,
    creatorName: tiquet.CreatorName,
    modifierName: tiquet.ModifierName,
    hoursSpent: tiquet.HoursSpent,
    slaViolationTime: tiquet.SlaViolationTime,
    slaWarningTime: tiquet.SlaWarningTime,
    knowledgeBaseCategoryID: tiquet.KnowledgeBaseCategoryID,
    knowledgeBaseCategoryName: tiquet.KnowledgeBaseCategoryName,
    dueDate: tiquet.DueDate,
    primaryCustomer: tiquet.PrimaryCustomer,
    ticketSource: tiquet.TicketSource,
    jiraKey: tiquet.JiraKey,
    isSecured: tiquet.IsSecured,
    tags: tiquet.Tags
  });

  // Actualizar la clave nueva del ticket en el array de claves
  keysArray.push({
    oldKey: tiquet.ID,
    newKey: newTicketId
  });
}

// Función principal para leer y procesar los tickets
async function processTickets() {
  try {
    const data = await fs.readFile('apiJSON/tickets.json', 'utf8');
    const ticketData = JSON.parse(data);
    const tickets = ticketData.Tickets;

    // Obtener las claves de grupo
    const listaKeysGroup = await js_group_to_list();
    const listaKeysProduct = await js_product_to_list();
    const listaKeysUsers = await js_users_to_list();

    const keysArray = []; // Array para almacenar las claves antiguas y nuevas

    // Procesar cada ticket de manera secuencial
    for (const tiquet of tickets) {
      await processTicket(tiquet, listaKeysGroup, listaKeysProduct, listaKeysUsers, keysArray);
    }

    // Escribir el array de claves en un archivo JSON
    await fs.writeFile('db/inserts/tickets/tickets_keys.json', JSON.stringify(keysArray, null, 2));
    console.log('Claves antiguas y nuevas de tickets guardadas en tickets_keys.json');
  } catch (err) {
    console.error('Error al procesar los tickets:', err);
  }
}


// processTickets();
module.exports = { processTickets };

