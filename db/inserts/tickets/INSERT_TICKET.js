



const TicketInsert = require("./ticket_INS")
const fs = require('fs');
const { swapEngCalendar } = require("../../../Api_tools/swap_fecha")

fs.readFile('apiJSON/tickets.json', 'utf8', (err, data) => {

  const ticketData = JSON.parse(data);
  // Asignar los usuarios del archivo JSON a la variable users
  const tickets = ticketData.Tickets;

  tickets.forEach(tiquet => {

    tiquet.DateCreated = swapEngCalendar(tiquet.DateCreated);
    tiquet.tiquet = swapEngCalendar(tiquet.DateModified);
    tiquet.sAExpirationDate = swapEngCalendar(tiquet.sAExpirationDate);

    TicketInsert({
      // organization: tiquet.Organization,
      userId: tiquet.userID,
      groupId: tiquet.groupID,
      productId: tiquet.productID,
      orgId: tiquet.OrganizationID,
      email: tiquet.Email,
      firstName: tiquet.FirstName,
      middleName: tiquet.MiddleName,
      lastName: tiquet.LastName,
      title: tiquet.Title,
      isActive: tiquet.IsActive,
      lastLogin: tiquet.LastLogin,
      lastActivity: tiquet.LastActivity,
      lastPing: tiquet.LastPing,
      isSystemAdmin: tiquet.IsSystemAdmin,
      isFinanceAdmin: tiquet.IsFinanceAdmin,
      isPortalUser: tiquet.IsPortalUser,
      primaryGroupId: tiquet.PrimaryGroupID,
      inOffice: tiquet.InOffice,
      inOfficeComment: tiquet.InOfficeComment,
      activatedOn: tiquet.ActivatedOn,
      desactivatedOn: tiquet.DeactivatedOn,
      creatorId: tiquet.CreatorID,
      modifierId: tiquet.ModifierID,
      isOnline: tiquet.IsOnline,
      isChatUser: tiquet.IsChatUser,
      isAiUser: tiquet.IsAiUser
    });
  });
});



