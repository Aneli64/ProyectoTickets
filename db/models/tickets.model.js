const { Model, DataTypes } = require('sequelize');

const TICKETS_TABLE = 'tickets';

const TicketSchema = {
  ID: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: 'users',
      key: 'id'
    },
    onUpdate: 'NO ACTION',
    onDelete: 'NO ACTION',
  },
  groupId: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: 'groups',
      key: 'id'
    },
    onUpdate: 'NO ACTION',
    onDelete: 'NO ACTION',
  },
  productId: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: 'products',
      key: 'id'
    },
    onUpdate: 'NO ACTION',
    onDelete: 'NO ACTION',
  },
  orgId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'organizations',
      key: 'id'
    },
    onUpdate: 'NO ACTION',
    onDelete: 'NO ACTION',
  },
  solvedVersion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ticketTypeName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  statusPosition: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  reportedVersion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  severityPosition: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  isClosed: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  severity: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ticketNumber: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  isVisibleOnPortal: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  isKnowledgeBase: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  reportedVersionID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  solvedVersionID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  ticketStatusID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  ticketTypeID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  ticketSeverityID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  parentID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  modifierID: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  creatorID: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  dateModified: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  dateCreated: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  dateClosed: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  closerId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  daysClosed: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  daysOpened: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  closerName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cratorName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  modifierName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  hoursSpent: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  slaViolationTime: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  slaWarningTime: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  knowledgeBaseCategoryID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  knowledgeBaseCategoryName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  DueDate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  primaryCustomer: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ticketSource: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  jiraKey: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  isSecured: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  tags: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}

class Ticket extends Model {
  static config(sequelize){
    return{
      sequelize,
      tableName: TICKETS_TABLE,
      modelName: TICKETS_TABLE,
      timestamps: false
    }
  }
}

module.exports = { Ticket, TicketSchema, TICKETS_TABLE };
