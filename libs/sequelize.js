const { Sequelize } = require('sequelize');
const { config } = require('./../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mssql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const seq = new Sequelize(URI, {
  dialect: 'mssql',
  logging: true,
});

module.exports = { seq };

