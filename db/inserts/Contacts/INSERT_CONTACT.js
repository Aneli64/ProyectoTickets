const fs = require('fs');
const { swapEngCalendar } = require("../../../Api_tools/swap_fecha");
const ContactInsert = require("../Contacts/con_INS");

async function processContact() {
  // Leer el archivo JSON
  await fs.readFile('apiJSON/contacts.json', 'utf8', (err, data) => {

    const contactData = JSON.parse(data);
    // Asignar los usuarios del archivo JSON a la variable users
    const contacts = contactData.Contacts;

    contacts.forEach(contact => {
      contact.LastLogin = swapEngCalendar(contact.LastLogin);
      contact.LastActivity = swapEngCalendar(contact.LastActivity);
      contact.LastPing = swapEngCalendar(contact.LastPing);
      contact.ActivatedOn = swapEngCalendar(contact.ActivatedOn);
      contact.DesactivatedOn = swapEngCalendar(contact.DesactivatedOn);

      ContactInsert({
        OrganizationID: 748448,
        PrimaryGroupID: contact.PrimaryGroupID,
        Email: contact.Email,
        FirstName: contact.FirstName,
        MiddleName: contact.MiddleName,
        LastName: contact.LastName,
        Title: contact.Title,
        IsActive: contact.IsActive,
        LastLogin: contact.LastLogin,
        LastActivity: contact.LastActivity,
        LastPing: contact.LastPing,
        IsPortalUser: contact.IsPortalUser,
        InOffice: contact.InOffice,
        InOfficeComment: contact.InOfficeComment,
        ActivatedOn: contact.ActivatedOn,
        DeactivatedOn: contact.DesactivatedOn,
        CreatorID: contact.CreatorId,
        ModifierID: contact.ModifierId,
        DisableOrganizationTicketsViewOnPortal: contact.DisableOrganizationTicketsViewOnPortal,
        PortalViewOnly: contact.PortalViewOnly,
        BlockInboundEmail: contact.BlockInboundEmail,
      });
    });
  });
}
module.exports = { processContact }


