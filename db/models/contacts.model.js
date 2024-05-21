const { Model, DataTypes } = require('sequelize');

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
    onUpdate: 'NO ACTION',
    onDelete: 'NO ACTION',
  },
  primaryGroupId: {
    type: DataTypes.INTEGER,
    allowNull: true,
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
  isPortalUser: {
    type: DataTypes.BOOLEAN,
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
    allowNull: true,
  },
  modifierId: {
    type: DataTypes.INTEGER,
    allowNull: true,

  },
  disableOrganizationTicketsViewOnPortal: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  PortalViewOnly: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  BlockInboundEmail: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  CustomerID: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'customers',
      key: 'id'
    },
    onUpdate: 'NO ACTION',
    onDelete: 'NO ACTION',
  },
}

class Contact extends Model {
  static config(sequelize){
    return{
      sequelize,
      tableName: CONTACTS_TABLE,
      modelName: CONTACTS_TABLE,
      timestamps: false
    }
  }
}

module.exports = { Contact, CONTACTS_TABLE, ContactSchema };
