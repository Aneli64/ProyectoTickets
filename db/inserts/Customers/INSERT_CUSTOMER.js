const CustomerInsert = require("../Customers/custm_INS")
const fs = require('fs');
const { swapEngCalendar } = require("../../../Api_tools/swap_fecha")

fs.readFile('apiJSON/customers.json', 'utf8', (err, data) => {

  const customerData = JSON.parse(data);
  // Asignar los usuarios del archivo JSON a la variable users
  const customers = customerData.Customers;

  customers.forEach(customer => {

    customer.DateCreated = swapEngCalendar(customer.DateCreated);
    customer.DateModified = swapEngCalendar(customer.DateModified);
    customer.sAExpirationDate = swapEngCalendar(customer.sAExpirationDate);

    CustomerInsert({
      Id: customer.ID,
      name: customer.Name,
      description: customer.Description,
      website: customer.Website,
      isActive: customer.IsActive,
      inActiveReason: customer.InActiveReason,
      primaryUserID: customer.PrimaryUserID,
      primaryContact: customer.PrimaryContact,
      dateCreated: customer.DateCreated,
      DateModified: customer.DateModified,
      creatorID: customer.CreatorID,
      modifierID: customer.ModifierID,
      hasPortalAccess: customer.HasPortalAccess,
      createdBy: customer.CreatedBy,
      lastModifiedBy: customer.LastModifiedBy,
      sAExpirationDate: customer.SDAExpirationDate,
      slaName: customer.SlaName,
      defaultWikiArticleID: customer.DefaultWikiArticleID,
      defaultSupportGroupID: customer.DefaultSupportGroupID,
      defaultSupportGroup: customer.DefaultSupportGroup,
      defaultSupportUserID: customer.DefaultSupportGroupID,
      defaultSupportUser: customer.DefaultSupportUser,
      domains: customer.Domains,
      supportHours: customer.SupportHours,
      supportHoursUsed: customer.SupportHoursUsed,
      supportHoursRemaining: customer.SupportHoursRemaining,
      needsIndexing: customer.NeedsIndexing,
      custDisIndex: customer.CustDisIndex,
      custDistIndexTrend: customer.CustDistIndexTrend,
      emailTicketActions: customer.EmailTicketActions,
      entityID: customer.EntityID,
      OrganizationID: 748448,
    });
  });
});



