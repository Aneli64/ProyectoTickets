const { DataTypes } = require('sequelize');

const ACTIONS_TABLE = 'actions';

const ActionsSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  action_Text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
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
  daysClosed: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  daysOpened: {
    type: DataTypes.INTEGER,
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
  DueDate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isSecured: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
}

module.exports = { ActionsSchema, ACTIONS_TABLE };
