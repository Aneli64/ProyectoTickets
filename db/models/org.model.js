const { Model, DataTypes} = require('sequelize');

const ORG_TABLE = 'organizations';

const OrgSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  organization: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dateCreated: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  dateModified: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}

class Organization extends Model {
  // static associate (models){

  static config(sequelize){
    return{
      sequelize,
      tableName: ORG_TABLE,
      modelName: ORG_TABLE,
      timestamps: false
    }
  }
}


module.exports = { Organization, OrgSchema, ORG_TABLE };
