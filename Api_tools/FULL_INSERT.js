const { insertFullOrgs } = require("../db/inserts/Orgs/INSERT_ORG");
const { GroupInsert } = require("../db/inserts/Groups/INSERT_GROUP");
const { processUsers } = require("../db/inserts/Users/INSERT_USER");
const { ContactInsert } = require("../db/inserts/Contacts/INSERT_CONTACT");
const { CustomerInsert } = require("../db/inserts/Customers/INSERT_CUSTOMER");
const { ProductInsert } = require("../db/inserts/product/INSERT_PRODUCT");
const { processTickets } = require("../db/inserts/tickets/INSERT_TICKET");
const { processActions } = require("../db/inserts/Actions/INSERT_ACTION");

async function runInserts() {
  try {
    await processUsers();
    await insertFullOrgs();
    await GroupInsert();
    await ContactInsert();
    await CustomerInsert();
    await ProductInsert();
    await processTickets();
    await processActions();

  } catch (error) {
    console.error("Ocurrió un error al ejecutar los inserts:", error);
  }
}

runInserts();

// // async function runInserts() {
// //   let success = true;

// //   try {
// //       await insertFullOrgs();
// //       console.log("Orgs inserted successfully.");
// //   } catch (error) {
// //       console.error("Error inserting orgs:", error);
// //       success = false;
// //   }

// //   if (success) {
// //       try {
// //           await GroupInsert();
// //           console.log("Groups inserted successfully.");
// //       } catch (error) {
// //           console.error("Error inserting groups:", error);
// //           success = false;
// //       }
// //   }

// //   if (success) {
// //       try {
// //           await processUsers();
// //           console.log("Users inserted successfully.");
// //       } catch (error) {
// //           console.error("Error inserting users:", error);
// //           success = false;
// //       }
// //   }

// //   if (success) {
// //       try {
// //           await ContactInsert();
// //           console.log("Contacts inserted successfully.");
// //       } catch (error) {
// //           console.error("Error inserting contacts:", error);
// //           success = false;
// //       }
// //   }

// //   if (success) {
// //       try {
// //           await CustomerInsert();
// //           console.log("Customers inserted successfully.");
// //       } catch (error) {
// //           console.error("Error inserting customers:", error);
// //           success = false;
// //       }
// //   }

// //   if (success) {
// //       try {
// //           await ProductInsert();
// //           console.log("Products inserted successfully.");
// //       } catch (error) {
// //           console.error("Error inserting products:", error);
// //           success = false;
// //       }
// //   }

// //   if (success) {
// //       try {
// //           await processTickets();
// //           console.log("Tickets inserted successfully.");
// //       } catch (error) {
// //           console.error("Error inserting tickets:", error);
// //           success = false;
// //       }
// //   }

// //   if (success) {
// //       try {
// //           await processActions();
// //           console.log("Actions inserted successfully.");
// //       } catch (error) {
// //           console.error("Error inserting actions:", error);
// //       }
// //   }

// //   if (success) {
// //       console.log("All inserts completed successfully.");
// //   } else {
// //       console.log("Insert operations stopped due to errors.");
// //   }
// // }

// // runInserts();

// // // async function runInserts() {
// // //   try {
// // //       await insertFullOrgs();
// // //       console.log("Orgs inserted successfully.");
// // //   } catch (error) {
// // //       console.error("Error inserting orgs:", error);
// // //       return; // Stop execution if this step fails
// // //   }

// // //   try {
// // //       await GroupInsert();
// // //       console.log("Groups inserted successfully.");
// // //   } catch (error) {
// // //       console.error("Error inserting groups:", error);
// // //       return; // Stop execution if this step fails
// // //   }

// // //   try {
// // //       await processUsers();
// // //       console.log("Users inserted successfully.");
// // //   } catch (error) {
// // //       console.error("Error inserting users:", error);
// // //       return; // Stop execution if this step fails
// // //   }

// // //   try {
// // //       await ContactInsert();
// // //       console.log("Contacts inserted successfully.");
// // //   } catch (error) {
// // //       console.error("Error inserting contacts:", error);
// // //       return; // Stop execution if this step fails
// // //   }

// // //   try {
// // //       await CustomerInsert();
// // //       console.log("Customers inserted successfully.");
// // //   } catch (error) {
// // //       console.error("Error inserting customers:", error);
// // //       return; // Stop execution if this step fails
// // //   }

// // //   try {
// // //       await ProductInsert();
// // //       console.log("Products inserted successfully.");
// // //   } catch (error) {
// // //       console.error("Error inserting products:", error);
// // //       return; // Stop execution if this step fails
// // //   }

// // //   try {
// // //       await processTickets();
// // //       console.log("Tickets inserted successfully.");
// // //   } catch (error) {
// // //       console.error("Error inserting tickets:", error);
// // //       return; // Stop execution if this step fails
// // //   }

// // //   try {
// // //       await processActions();
// // //       console.log("Actions inserted successfully.");
// // //   } catch (error) {
// // //       console.error("Error inserting actions:", error);
// // //       return; // Stop execution if this step fails
// // //   }

// // //   console.log("All inserts completed successfully.");
// // // }

// // // runInserts();


