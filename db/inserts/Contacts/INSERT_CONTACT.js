const UserInsert = require("../Contacts/con_INS")
const fs = require('fs');
const { swapEngCalendar } = require("../../../Api_tools/swap_fecha")

// Leer el archivo JSON
fs.readFile('apiJSON/contacts.json', 'utf8', (err, data) => {

  const contactData = JSON.parse(data);
  // Asignar los usuarios del archivo JSON a la variable users
  const contacts = contactData.Contacts;

  // console.log(users)
  contacts.forEach(contact => {

    contact.LastLogin = swapEngCalendar(contact.LastLogin);
    contact.LastActivity = swapEngCalendar(contact.LastActivity);
    contact.LastPing = swapEngCalendar(contact.LastPing);
    contact.ActivatedOn = swapEngCalendar(contact.ActivatedOn);
    contact.DesactivatedOn = swapEngCalendar(contact.DesactivatedOn);

    UserInsert({
      orgId: 748448,
      primaryGroupId: contact.PrimaryGroupID,
      email: contact.Email,
      firstName: contact.FirstName,
      middleName: contact.MiddleName,
      lastName: contact.LastName,
      title: contact.Title,
      isActive: contact.IsActive,
      lastLogin: contact.LastLogin,
      lastActivity: contact.LastActivity,
      lastPing: contact.LastPing,
      isPortalUser: contact.IsPortalUser,
      inOffice: contact.InOffice,
      inOfficeComment: contact.InOfficeComment,
      activatedOn: contact.ActivatedOn,
      desactivatedOn: contact.DesactivatedOn,
      creatorId: contact.CreatorId,
      modifierId: contact.ModifierId,
      disableOrganizationTicketsViewOnPortal: contact.DisableOrganizationTicketsViewOnPortal,
      PortalViewOnly: contact.PortalViewOnly,
      isFinanceAdmin: contact.IsFinanceAdmin,
      CustomerID: contact.OrganizationID
    });
  });
});


