const UserInsert = require("../Users/USER_INS");
const fs = require('fs').promises;
const { swapEngCalendar } = require("../../../Api_tools/swap_fecha");

// Función para procesar cada usuario y agregar las claves antiguas y nuevas al array de claves
async function processUser(user) {
  // Cambio de formato para las fechas
  user.LastLogin = swapEngCalendar(user.LastLogin);
  user.LastActivity = swapEngCalendar(user.LastActivity);
  user.LastPing = swapEngCalendar(user.LastPing);
  user.ActivatedOn = swapEngCalendar(user.ActivatedOn);
  user.DesactivatedOn = swapEngCalendar(user.DesactivatedOn);

  // Inserción del usuario en la base de datos
  const newUserId = await UserInsert({
    orgId: 748448,
    email: user.Email,
    firstName: user.FirstName,
    middleName: user.MiddleName,
    lastName: user.LastName,
    title: user.Title,
    isActive: user.IsActive,
    lastLogin: user.LastLogin,
    lastActivity: user.LastActivity,
    lastPing: user.LastPing,
    isSystemAdmin: user.IsSystemAdmin,
    isFinanceAdmin: user.IsFinanceAdmin,
    isPortalUser: user.IsPortalUser,
    primaryGroupId: user.PrimaryGroupId,
    inOffice: user.InOffice,
    inOfficeComment: user.InOfficeComment,
    activatedOn: user.ActivatedOn,
    desactivatedOn: user.DesactivatedOn,
    creatorId: user.CreatorId,
    modifierId: user.ModifierId,
    isOnline: user.IsOnline,
    isChatUser: user.IsChatUser,
    isAiUser: user.IsActive,
  });

  // Devolver las claves antiguas y nuevas
  return {
    oldKey: user.ID,
    newKey: newUserId
  };
}

// Función principal para leer y procesar los usuarios
async function processUsers() {
  try {
    const data = await fs.readFile('apiJSON/users.json', 'utf8');
    const userData = JSON.parse(data);
    const users = userData.Users;

    const keysArray = []; // Array para almacenar las claves antiguas y nuevas

    // Procesar cada usuario de manera secuencial
    for (const user of users) {
      const key = await processUser(user);
      keysArray.push(key);
    }

    // Escribir el array de claves en un archivo JSON
    await fs.writeFile('db/inserts/claves_json/users_keys.json', JSON.stringify(keysArray, null, 2));
    console.log('Claves antiguas y nuevas de usuarios guardadas en users_keys.json');
  } catch (err) {
    console.error('Error al procesar los usuarios:', err);
  }
}

module.exports = { processUsers }
