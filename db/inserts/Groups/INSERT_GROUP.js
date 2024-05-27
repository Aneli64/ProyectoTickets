const GroupInsert = require("../Groups/group_INS");
const fs = require('fs');
const path = require('path');

// Ruta del archivo donde se guardarán las claves antiguas y nuevas
const outputFilePath = path.join(__dirname, 'groups_keys.json');

// Leer el archivo JSON
fs.readFile('apiJSON/groups.json', 'utf8', async (err, data) => {
  if (err) {
    console.error('Error al leer el archivo JSON:', err);
    return;
  }

  const groupData = JSON.parse(data);
  const groups = groupData.Groups;
  const keysArray = [];

  for (const group of groups) {
    const newGroup = {
      orgId: group.OrganizationID,
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
  fs.writeFile(outputFilePath, JSON.stringify(keysArray, null, 2), (err) => {
    if (err) {
      console.error('Error al escribir el archivo JSON:', err);
    } else {
      console.log('Archivo JSON con claves antiguas y nuevas guardado correctamente.');
    }
  });
});

module.exports = { GroupInsert }
