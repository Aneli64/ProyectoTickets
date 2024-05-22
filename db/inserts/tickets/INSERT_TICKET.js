



const TicketInsert = require("./ticket_INS")
const fs = require('fs');
const { swapEngCalendar } = require("../../../Api_tools/swap_fecha")

fs.readFile('apiJSON/tickets.json', 'utf8', (err, data) => {

  const ticketData = JSON.parse(data);
  // Asignar los usuarios del archivo JSON a la variable users
  const tickets = ticketData.Tickets;

  tickets.forEach(tiquet => {

    tiquet.DueDate = swapEngCalendar(tiquet.DueDate);
    tiquet.DateClosed = swapEngCalendar(tiquet.DateClosed);
    tiquet.DateCreated = swapEngCalendar(tiquet.DateCreated);
    tiquet.DateModified = swapEngCalendar(tiquet.DateModified);

    // if (tiquet.UserID == null){
    //   return
    // }

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



