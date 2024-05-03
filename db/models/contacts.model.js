const { DataTypes } = require('sequelize');

const CONTACTS_TABLE = 'contacts';

const ContactSchema = {
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
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  primaryGroupId: {
    type: DataTypes.INTEGER,
    allowNull: false,
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
  isPortalUser: {
    type: DataTypes.BOOLEAN,
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
  disableOrganizationTicketsViewOnPortal: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  PortalViewOnly: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  BlockInboundEmail: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
}

module.exports = { CONTACTS_TABLE, ContactSchema };
