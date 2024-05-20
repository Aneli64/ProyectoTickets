const UserInsert = require("../Users/USER_INS")
const fs = require('fs');

// Leer el archivo JSON
fs.readFile('apiJSON/users.json', 'utf8', (err, data) => {

  const userData = JSON.parse(data);
  // Asignar los usuarios del archivo JSON a la variable users
  const users = userData.Users;

  // console.log(users)
  users.forEach(user => {
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



