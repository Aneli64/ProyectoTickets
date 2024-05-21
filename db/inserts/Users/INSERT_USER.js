const UserInsert = require("../Users/USER_INS")
const fs = require('fs');
const { swapEngCalendar } = require("../../../Api_tools/swap_fecha")




// Leer el archivo JSON
fs.readFile('apiJSON/users.json', 'utf8', (err, data) => {

  const userData = JSON.parse(data);
  // Asignar los usuarios del archivo JSON a la variable users
  const users = userData.Users;

  users.forEach(user => {

    user.LastLogin = swapEngCalendar(user.LastLogin);
    user.LastActivity = swapEngCalendar(user.LastActivity);
    user.LastPing = swapEngCalendar(user.LastPing);
    user.ActivatedOn = swapEngCalendar(user.ActivatedOn);
    user.DesactivatedOn = swapEngCalendar(user.DesactivatedOn);


    UserInsert({
      organization: user.organization,
      orgId: user.OrganizationID,
      email: user.Email,
      firstName: user.FirstName,
      middleName: user.MiddleName,
      lastName: user.LastName,
      title: user.Title,
      isActive: user.IsActive,
      lastLogin: user.LastLogin,
      lastActivity: user.LastActivity,
      lastPing: user.LastPing,
      isSystemAdmin: user.IsSystemAdmin,
      isFinanceAdmin: user.IsFinanceAdmin,
      isPortalUser: user.IsPortalUser,
      primaryGroupId: user.PrimaryGroupId,
      inOffice: user.InOffice,
      inOfficeComment: user.InOfficeComment,
      activatedOn: user.ActivatedOn,
      desactivatedOn: user.DesactivatedOn,
      creatorId: user.CreatorId,
      modifierId: user.ModifierId,
      isOnline: user.IsOnline,
      isChatUser: user.IsChatUser,
      isAiUser: user.IsActive
    });
  });
});



