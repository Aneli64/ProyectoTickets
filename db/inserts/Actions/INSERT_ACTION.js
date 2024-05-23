const ActionInsert = require("../Actions/act_INS")
const fs = require('fs');
const { swapEngCalendar } = require("../../../Api_tools/swap_fecha")



// Leer el archivo JSON
fs.readFile('apiJSON/actions.json', 'utf8', (err, data) => {

  const actionData = JSON.parse(data);
  const actions = actionData.Actions;


  actions.array.forEach(element => {

    const dateModified = swapEngCalendar(element.DateModified);
    const dateCreated = swapEngCalendar(element.DateCreated);
    const dateClosed = swapEngCalendar(element.DateClosed);

    ActionInsert({
      action_Text: element.Description,
      name: element.Name,
      dateModified: dateModified,
      dateCreated: dateCreated,
      dateClosed: dateClosed,
      daysClosed: element.DaysClosed,
      daysOpened: element.DaysOpened,
      hoursSpent: element.HoursSpent,
      ticketID: element.TicketID,
    })
  })
});
