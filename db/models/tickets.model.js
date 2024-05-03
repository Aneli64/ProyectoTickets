const { DataTypes } = require('sequelize');

const TICKETS_TABLE = 'tickets';

const TicketSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  groupId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'groups',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  productId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'products',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
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
  solvedVersion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ticketTypeName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  statusPosition: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  reportedVersion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  severityPosition: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isClosed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  severity: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ticketNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isVisibleOnPortal: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  isKnowledgeBase: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  reportedVersionID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  solvedVersionID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ticketStatusID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ticketTypeID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ticketSeverityID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  parentID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  modifierID: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  creatorID: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  dateModified: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  dateCreated: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  dateClosed: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  closerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  daysClosed: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  daysOpened: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  closerName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cratorName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  modifierName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hoursSpent: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  slaViolationTime: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  slaWarningTime: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  knowledgeBaseCategoryID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  knowledgeBaseCategoryName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  DueDate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  primaryCustomer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ticketSource: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  jiraKey: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isSecured: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  tags: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}

module.exports = { TicketSchema, TICKETS_TABLE };
