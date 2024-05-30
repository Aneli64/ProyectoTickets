const { Model, DataTypes } = require('sequelize');

const ACTIONS_TABLE = 'actions';

const ActionsSchema = {
  ID: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  Description: {
    type: DataTypes.STRING(4000),
    allowNull: true,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  DateModified: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  DateCreated: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  DateClosed: {
    type: DataTypes.DATE,
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
  HoursSpent: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  TicketID: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: 'tickets',
      key: 'ID'
    },
    onUpdate: 'NO ACTION',
    onDelete: 'NO ACTION',
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
