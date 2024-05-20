const { Model, DataTypes } = require('sequelize');

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
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  dateCreated: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  importId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  dateModified: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  creatorId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  modifierId: {
    type: DataTypes.INTEGER,
    allowNull: true,

  },
}

class Groups extends Model {
  static config(sequelize){
    return{
      sequelize,
      tableName: GROUPS_TABLE,
      modelName: GROUPS_TABLE,
      timestamps: false
    }
  }
}

module.exports = { Groups, GroupSchema, GROUPS_TABLE };
