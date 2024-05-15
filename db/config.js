const { config } = require('./../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mssql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}?instance=${config.dbInstance}`;

module.exports = {
  development: {
    url: URI,
    dialect: 'mssql',
    dialectOptions: {
      options: {
        encrypt: false,
        trustServerCertificate: true
      }
    }
  },
  production: {
    url: URI,
    dialect: 'mssql',
    dialectOptions: {
      options: {
        encrypt: false,
        trustServerCertificate: true
      }
    }
  }
};
