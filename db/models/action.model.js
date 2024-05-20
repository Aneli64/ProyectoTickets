const { Model, DataTypes } = require('sequelize');

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
    allowNull: true,
  },
  name: {
    type: DataTypes.STRING,
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
  daysClosed: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  daysOpened: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  hoursSpent: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  slaViolationTime: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  slaWarningTime: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  DueDate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  isSecured: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
}

class Action extends Model {
  static config(sequelize){
    return{
      sequelize,
      tableName: ACTIONS_TABLE,
      modelName: ACTIONS_TABLE,
      timestamps: false
    }
  }
}


module.exports = { Action, ActionsSchema, ACTIONS_TABLE };
