const { DataTypes } = require('sequelize');

const GROUPS_TABLE = 'groups';

const GroupSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  orgId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'organizations',
      key: 'id'
    },
    onUpdate: 'NO ACTION',
    onDelete: 'NO ACTION',
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dateCreated: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  importId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  dateModified: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  creatorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  modifierId: {
    type: DataTypes.INTEGER,
    allowNull: false,

  },
}

module.exports = { GroupSchema, GROUPS_TABLE };
