const { DataTypes } = require('sequelize');

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
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  middleName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  lastLogin: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  lastActivity: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  lastPing: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  isSystemAdmin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  isFinanceAdmin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  isPortalUser: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  primaryGroupId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  inOffice: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  inOfficeComment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  activatedOn: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  desactivatedOn: {
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
  isOnline: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  isChatUser: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  isAiUser: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
}

module.exports = { UserSchema, USERS_TABLE };
