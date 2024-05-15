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
    type: DataTypes.DATE,
    allowNull: true,
  },
  lastActivity: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  lastPing: {
    type: DataTypes.DATE,
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
    type: DataTypes.DATE,
    allowNull: true,
  },
  desactivatedOn: {
    type: DataTypes.DATE,
    allowNull: true,
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

module.exports = { UserSchema, USERS_TABLE };
