const GroupInsert = require("../Groups/group_INS")

GroupInsert({
  orgId: 1,
  name: 'Nombre del grupo',
  description: 'Descripcion',
  dateCreated: new Date(),
  importId: 1,
  dateModified: new Date(),
  creatorId: 1,
  modifierId: 7
});
