const { seq } = require('../../../libs/sequelize');
const { Product, ProductSchema } = require('../../models/product.model')

// Inicializamos la tabla con su esquema y configuración correspondientes
Product.init(ProductSchema, Product.config(seq));

async function ProductInsert(product) {
    try {
      const newProduct = await Product.create(product);
      console.log('Nuevo ID del producto:', newProduct.id);
      return newProduct.id
    } catch (error) {
      console.error('Error al insertar el producto:', error);
    }
}

module.exports = ProductInsert;
