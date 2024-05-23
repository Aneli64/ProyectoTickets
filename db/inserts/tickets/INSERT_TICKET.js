const TicketInsert = require("./ticket_INS")

// Modulo de lectura de archivos
const fs = require('fs');

const { swapEngCalendar } = require("../../../Api_tools/swap_fecha")

// Lectura del archivo json obtenido de la api para extraer su contenido
fs.readFile('apiJSON/tickets.json', 'utf8', (err, data) => {

  const ticketData = JSON.parse(data);

  // Asignar los usuarios del archivo JSON a la variable tickets
  const tickets = ticketData.Tickets;

  // Bucle en donde iteraremos en los campos del tiquet y los insertaremos en la bd
  tickets.forEach(tiquet => {

    // Cambio de formato para las 4 fechas que ocasionan problemas (formato americano y español)
    tiquet.DueDate = swapEngCalendar(tiquet.DueDate);
    tiquet.DateClosed = swapEngCalendar(tiquet.DateClosed);
    tiquet.DateCreated = swapEngCalendar(tiquet.DateCreated);
    tiquet.DateModified = swapEngCalendar(tiquet.DateModified);

    // Cambiamos las claves de usuario a las nuevas
    if (tiquet.UserID == 1532741) tiquet.UserID = "5cc5877c-f7b6-47a4-9d95-2b91377aab2d"
    if (tiquet.UserID == 1532902) tiquet.UserID = "8c41753b-048a-4e48-a354-3b9a4ec6b081"

    // Cambiamos las claves de grupo a las nuevas
    if (tiquet.UserID == 1532741) tiquet.UserID = "5cc5877c-f7b6-47a4-9d95-2b91377aab2d"
    if (tiquet.UserID == 1532902) tiquet.UserID = "8c41753b-048a-4e48-a354-3b9a4ec6b081"

    // Cambiamos las claves de producto a las nuevas
    if (tiquet.UserID == 1532741) tiquet.UserID = "5cc5877c-f7b6-47a4-9d95-2b91377aab2d"
    if (tiquet.UserID == 1532902) tiquet.UserID = "8c41753b-048a-4e48-a354-3b9a4ec6b081"

    TicketInsert({
      ID: tiquet.ID,
      userId: tiquet.UserID,
      groupId: tiquet.GroupID,
      productId: tiquet.ProductID,
      orgId: tiquet.OrganizationID,
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
  });
});



