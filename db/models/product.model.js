const { Model, DataTypes } = require('sequelize');

const PRODUCT_TABLE = 'products';

const ProductSchema = {
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
  dateCreated: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  dateModified: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  creatorId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  modifierId: {
    type: DataTypes.INTEGER,
    allowNull: true,

  },
}

class Product extends Model {
  static config(sequelize){
    return{
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: PRODUCT_TABLE,
      timestamps: false
    }
  }
}

module.exports = { Product, ProductSchema, PRODUCT_TABLE };
