const fs = require('fs').promises;

// Lista de claves obtenidas del json de las claves de grupo
async function js_group_to_list() {
  try {
    const data = await fs.readFile('db/inserts/claves_json/groups_keys.json', 'utf8');
    const groupsData = JSON.parse(data);
    const listaKeysGroup = await groupsData.map(item => ({
      oldKey: item.oldKey,
      newKey: item.newKey
    }));
    return listaKeysGroup;
  } catch (error) {
    console.error('Error al leer el archivo:', error);
    return []; // Devuelve una lista vacía en caso de error
  }
}

module.exports = js_group_to_list;
