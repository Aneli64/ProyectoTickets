const ActionInsert = require("../Actions/act_INS")
const fs = require('fs');
const { swapEngCalendar } = require("../../../Api_tools/swap_fecha")

// Leer el archivo JSON
fs.readFile('apiJSON/actions/actions_ticket_994.json', 'utf8', (err, data) => {

  const actionData = JSON.parse(data);
  const actions = actionData.Actions;

  for (let i = 1; i <= 10; i++) { //FALTA HACER BUCLE PARA ITERAR ENTRE ARRAYS INTERNOS Y SUS CAMPOS
    console.log(i);
  }

  actions.forEach(action => {

    action.dateModified = swapEngCalendar(action.dateModified);
    action.dateCreated = swapEngCalendar(action.dateCreated);

    ActionInsert({
      action_Text: action.Description,
      name: action.Name,
      dateModified: action.DateModified,
      dateCreated: action.DateCreated,
      dateClosed: action.DateClosed,
      daysClosed: action.DaysClosed,
      daysOpened: action.DaysOpened,
      hoursSpent: action.HoursSpent,
      ticketID: action.TicketID,
    })
  });
});
