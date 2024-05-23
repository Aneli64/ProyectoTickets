const swapEngCalendar = (dateString) => {
  if (!dateString) return null; // Si la fecha es nula, regresar nulo

  // Dividir la fecha y la hora
  const [datePart, timePart] = dateString.split(' ');

  // Dividir la parte de la fecha
  const [day, month, year] = datePart.split('/');

  // Construir la nueva fecha en el formato esperado por SQL Server
  const formattedDate = `${year}-${month}-${day}`;

  // Si hay una parte de hora, incluirla
  return timePart ? `${formattedDate} ${timePart}` : formattedDate;
};

module.exports = { swapEngCalendar };
