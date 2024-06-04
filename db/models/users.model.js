const { Model, DataTypes } = require('sequelize');

const USERS_TABLE = 'users';

const UserSchema = {
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
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  middleName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  lastLogin: {
    type: "SMALLDATETIME",
    allowNull: true,
  },
  lastActivity: {
    type: "SMALLDATETIME",
    allowNull: true,
  },
  lastPing: {
    type: "SMALLDATETIME",
    allowNull: true,
  },
  isSystemAdmin: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  isFinanceAdmin: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  isPortalUser: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  primaryGroupId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  inOffice: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  inOfficeComment: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  activatedOn: {
    type: "SMALLDATETIME",
    allowNull: true,
  },
  desactivatedOn: {
    type: "SMALLDATETIME",
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
  isOnline: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  isChatUser: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  isAiUser: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
}

class Users extends Model {
  static config(sequelize){
    return{
      sequelize,
      tableName: USERS_TABLE,
      modelName: USERS_TABLE,
      timestamps: false
    }
  }
}

module.exports = { Users, UserSchema, USERS_TABLE };
