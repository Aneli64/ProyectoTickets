const GroupInsert = require("../Groups/group_INS")
const fs = require('fs');

// Leer el archivo JSON
fs.readFile('apiJSON/groups.json', 'utf8', (err, data) => {

  const groupData = JSON.parse(data);
  // Asignar los usuarios del archivo JSON a la variable users
  const groups = groupData.Groups;

  groups.forEach(group => {
    GroupInsert({
      orgId: group.OrganizationID,
      name: group.Name,
      description: group.Description,
      dateCreated: group.DateCreated,
      importId: group.ImportId,
      dateModified: group.DateModified,
      creatorId: group.CreatorId,
      modifierId: group.ModifierId
    });
  });
});


