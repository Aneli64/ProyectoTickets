const fs = require('fs').promises;

async function js_users_to_list() {
  try {
    const data = await fs.readFile('db/inserts/Users/users_keys.json', 'utf8');
    const usersData = JSON.parse(data);
    const listaKeysUsers = usersData.map(item => ({
      oldKey: item.oldKey,
      newKey: item.newKey
    }));
    return listaKeysUsers;
  } catch (error) {
    console.error('Error al leer el archivo:', error);
    return []; // Devuelve una lista vacía en caso de error
  }
}

module.exports = js_users_to_list;
