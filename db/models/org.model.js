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
    allowNull: true,
  },
  dateCreated: {
    type: DataTypes.DATE,
    // type: "SMALLDATETIME",
    allowNull: true,
  },
  dateModified: {
    type: DataTypes.DATE,
    // type: "SMALLDATETIME",
    allowNull: true,
  },
}

class Organization extends Model {
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
