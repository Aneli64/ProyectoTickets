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
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  website: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  inActiveReason: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  primaryUserID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  primaryContact: {
    type: DataTypes.STRING,
    allowNull: false,
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
    allowNull: false,
  },
  createdBy: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastModifiedBy: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sAExpirationDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  slaName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cRMLinkID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  defaultWikiArticleID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  defaultSupportGroupID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  defaultSupportGroup: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  defaultSupportUserID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  defaultSupportUser: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  domains: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  supportHours: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  supportHoursUsed: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  supportHoursRemaining: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  needsIndexing: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  custDisIndex: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  custDistIndexTrend: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  emailTicketActions: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  entityID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}

module.exports = { CustomerSchema, CUSTOMERS_TABLE };
