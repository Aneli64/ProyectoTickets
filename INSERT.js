const insertOrganization = require("./db/inserts/orgs_insert")

insertOrganization({
  organization: 'Nombre de la organización',
  dateCreated: new Date(),
  dateModified: new Date()
});
