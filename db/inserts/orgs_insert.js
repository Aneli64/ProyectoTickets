const Org = require('../models/org.model');
// const { DataTypes } = require('sequelize');

const newOrg = Org.build({
  id: 1,
  organization: 'Organización 1',
  dateCreated: new Date(),
  dateModified: new Date()
});

newOrg.save()
  .then(() => {
    console.log('Organización creado con éxito');
  })
  .catch(err => {
    console.error('Error en la creación de la organización:', err);
  });
