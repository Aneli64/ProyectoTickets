const { Model, DataTypes } = require('sequelize');

const CONTACTS_TABLE = 'contacts';

const ContactSchema = {
  ID: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  OrganizationID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'organizations',
      key: 'id'
    },
    onUpdate: 'NO ACTION',
    onDelete: 'NO ACTION',
  },
  PrimaryGroupID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  FirstName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  MiddleName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  LastName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  IsActive: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  LastLogin: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  LastActivity: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  LastPing: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  IsPortalUser: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  InOffice: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  InOfficeComment: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ActivatedOn: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  DeactivatedOn: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  CreatorID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  ModifierID: {
    type: DataTypes.INTEGER,
    allowNull: true,

  },
  DisableOrganizationTicketsViewOnPortal: {
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
}

class Contact extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: CONTACTS_TABLE,
      modelName: CONTACTS_TABLE,
      timestamps: false
    }
  }
}

module.exports = { Contact, CONTACTS_TABLE, ContactSchema };
