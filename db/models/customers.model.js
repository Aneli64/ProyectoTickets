const { DataTypes } = require('sequelize');

const CUSTOMERS_TABLE = 'customers';

const CustomerSchema = {
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
  website: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  inActiveReason: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  primaryUserID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  primaryContact: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  dateCreated: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  DateModified: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  creatorID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  modifierID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  hasPortalAccess: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  createdBy: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastModifiedBy: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  sAExpirationDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  slaName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cRMLinkID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  defaultWikiArticleID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  defaultSupportGroupID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  defaultSupportGroup: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  defaultSupportUserID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  defaultSupportUser: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  domains: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  supportHours: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  supportHoursUsed: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  supportHoursRemaining: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  needsIndexing: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  custDisIndex: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  custDistIndexTrend: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  emailTicketActions: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  entityID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}

module.exports = { CustomerSchema, CUSTOMERS_TABLE };
