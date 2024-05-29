const GroupInsert = require("../Groups/group_INS");
const fs = require('fs').promises;  // Usar fs.promises para operaciones asíncronas
const path = require('path');

// Ruta del archivo donde se guardarán las claves antiguas y nuevas
const outputFilePath = path.join(__dirname, 'groups_keys.json');

async function processGroup() {
  try {
    // Leer el archivo JSON
    const data = await fs.readFile('apiJSON/groups.json', 'utf8');
    const groupData = JSON.parse(data);
    const groups = groupData.Groups;
    const keysArray = [];

    for (const group of groups) {
      const newGroup = {
        orgId: 748448,
        name: group.Name,
        description: group.Description,
        dateCreated: group.DateCreated,
        importId: group.ImportId,
        dateModified: group.DateModified,
        creatorId: group.CreatorId,
        modifierId: group.ModifierId
      };

      // Insertar el grupo en la base de datos y obtener el nuevo ID
      try {
        const newGroupId = await GroupInsert(newGroup);
        // Guardar las claves antiguas y nuevas en el array
        keysArray.push({
          oldKey: group.ID,
          newKey: newGroupId
        });
      } catch (error) {
        console.error('Error al insertar el grupo:', error);
      }
    }

    // Escribir las claves antiguas y nuevas en el archivo JSON
    await fs.writeFile(outputFilePath, JSON.stringify(keysArray, null, 2));
    console.log('Archivo JSON con claves antiguas y nuevas guardado correctamente.');
  } catch (err) {
    console.error('Error al procesar el archivo JSON:', err);
  }
}

module.exports = { processGroup };
