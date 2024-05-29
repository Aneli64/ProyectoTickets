const OrgInsert = require("../Orgs/orgs_INS")

async function processOrg(){
  OrgInsert({
    id: 748448,
    organization: 'IDITIC-Sandbox',
    dateCreated: new Date(),
    dateModified: new Date()
  });
}

module.exports = { processOrg }
