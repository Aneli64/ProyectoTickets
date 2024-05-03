const { DataTypes } = require('sequelize');

const ORG_TABLE = 'organizations';

const OrgSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  organization: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dateCreated: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  dateModified: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}

module.exports = { OrgSchema, ORG_TABLE };
