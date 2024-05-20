const OrgInsert = require("./act_INS")

OrgInsert({
  id: "123e4567-e89b-12d3-a456-426614174000",
  action_Text: "Revisar informe",
  name: "Ticket de ejemplo",
  dateModified: new Date("2024-05-17T10:00:00.000Z"),
  dateCreated: new Date("2024-05-17T09:00:00.000Z"),
  dateClosed: null,
  daysClosed: null,
  daysOpened: 5,
  hoursSpent: 8,
  slaViolationTime: 2,
  slaWarningTime: 1,
  DueDate: "2024-06-01",
  isSecured: true,
  ticketsId: 2
})
