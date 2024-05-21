const OrgInsert = require("../Orgs/orgs_INS")

// LAS FECHAS DEBEREMOS DE AÑADIRLAS CON UN TRIGGER

OrgInsert({
  id: 748448,
  organization: 'IDITIC-Sandbox',
  dateCreated: new Date(),
  dateModified: new Date()
});

OrgInsert({
  id: 1821533,
  organization: 'asdfas',
  dateCreated: new Date(),
  dateModified: new Date()
});

OrgInsert({
  id: 748452,
  organization: 'Viticultores',
  dateCreated: new Date(),
  dateModified: new Date()
});

OrgInsert({
  id: 748450,
  organization: 'Empresa 1',
  dateCreated: new Date(),
  dateModified: new Date()
});
