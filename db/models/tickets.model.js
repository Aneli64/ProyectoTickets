const { Model, DataTypes } = require('sequelize');

const TICKETS_TABLE = 'tickets';

const TicketSchema = {
  ID: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  UserID: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: 'users',
      key: 'id'
    },
    onUpdate: 'NO ACTION',
    onDelete: 'NO ACTION',
  },
  GroupID: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: 'groups',
      key: 'id'
    },
    onUpdate: 'NO ACTION',
    onDelete: 'NO ACTION',
  },
  ProductID: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: 'products',
      key: 'id'
    },
    onUpdate: 'NO ACTION',
    onDelete: 'NO ACTION',
  },
  OrganizationID: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'organizations',
      key: 'id'
    },
    onUpdate: 'NO ACTION',
    onDelete: 'NO ACTION',
  },
  SolvedVersion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  TicketTypeName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Status: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  StatusPosition: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  ReportedVersion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  SeverityPosition: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  IsClosed: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  Severity: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  TicketNumber: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  IsVisibleOnPortal: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  IsKnowledgeBase: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  ReportedVersionID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  SolvedVersionID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  TicketStatusID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  TicketTypeID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  TicketSeverityID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  UserName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ParentID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  ModifierID: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  CreatorID: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  DateModified: {
    type: "SMALLDATETIME",
    allowNull: true,
  },
  DateCreated: {
    type: "SMALLDATETIME",
    allowNull: true,
  },
  DateClosed: {
    type: "SMALLDATETIME",
    allowNull: true,
  },
  CloserID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  DaysClosed: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  DaysOpened: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  CloserName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  CreatorName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ModifierName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  HoursSpent: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  SlaViolationTime: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  SlaWarningTime: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  KnowledgeBaseCategoryID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  KnowledgeBaseCategoryName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  DueDate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  PrimaryCustomer: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  TicketSource: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  JiraKey: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  isSecured: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  Tags: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}

class Ticket extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: TICKETS_TABLE,
      modelName: TICKETS_TABLE,
      timestamps: false
    }
  }
}

module.exports = { Ticket, TicketSchema, TICKETS_TABLE };
