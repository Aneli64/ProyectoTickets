const OrgInsert = require("../orgs_INS")

OrgInsert({
  organization: 'Nombre de la organización',
  dateCreated: new Date(),
  dateModified: new Date()
});
