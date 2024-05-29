const { processOrg } = require("../db/inserts/Orgs/INSERT_ORG");
const { processGroup } = require("../db/inserts/Groups/INSERT_GROUP");
const { processUsers } = require("../db/inserts/Users/INSERT_USER");
const { processContact } = require("../db/inserts/Contacts/INSERT_CONTACT");
const { processCustomer } = require("../db/inserts/Customers/INSERT_CUSTOMER");
const { processProduct } = require("../db/inserts/product/INSERT_PRODUCT");
const { processTickets } = require("../db/inserts/tickets/INSERT_TICKET");
const { processAction } = require("../db/inserts/Actions/INSERT_ACTION");

async function runInserts() {
  try {
    await processOrg();
    await processGroup();
    await processUsers();
    await processContact();
    await processCustomer();
    await processProduct();
    await processTickets();
    await processAction();

  } catch (error) {
    console.error("Ocurrió un error al ejecutar los inserts:", error);
  }
}

runInserts();


