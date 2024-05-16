const UserInsert = require("../Users/USER_INS")

UserInsert({
  organization: 'Nombre del usuario',
  orgId: 1,
  email: null,
  firstName: "pepito",
  middleName: null,
  lastName: "perez",
  title: null,
  isActive: null,
  lastLogin: null,
  lastActivity: new Date(),
  lastPing: null,
  isSystemAdmin: null,
  isFinanceAdmin: null,
  isPortalUser: null,
  primaryGroupId: null,
  inOffice: null,
  inOfficeComment: null,
  activatedOn: null,
  desactivatedOn: null,
  creatorId: 1,
  modifierId: 4,
  isOnline: null,
  isChatUser: null,
  isAiUser: null
});
