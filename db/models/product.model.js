const { DataTypes } = require('sequelize');

// const { CATEGORY_TABLE } = require('./category.model');

const PRODUCT_TABLE = 'products';

const ProductSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
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
  creatorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  modifierId: {
    type: DataTypes.INTEGER,
    allowNull: false,

  },
  // onUpdate: 'CASCADE',
  // onDelete: 'CASCADE'
}


// class Product extends Model {

//   static associate(models) {
//     this.belongsTo(models.Category, { as: 'category' });
//   }

//   static config(sequelize) {
//     return {
//       sequelize,
//       tableName: PRODUCT_TABLE,
//       modelName: 'Product',
//       timestamps: false
//     }
//   }
// }

// module.exports = { Product, ProductSchema, PRODUCT_TABLE };
module.exports = { ProductSchema, PRODUCT_TABLE };
