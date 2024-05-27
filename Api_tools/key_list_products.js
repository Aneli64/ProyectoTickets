const fs = require('fs').promises;

async function js_product_to_list() {
  try {
    const data = await fs.readFile('db/inserts/product/products_keys.json', 'utf8');
    const productsData = JSON.parse(data);
    const listaKeysProduct = productsData.map(item => ({
      oldKey: item.oldKey,
      newKey: item.newKey
    }));
    return listaKeysProduct;
  } catch (error) {
    console.error('Error al leer el archivo:', error);
    return []; // Devuelve una lista vacía en caso de error
  }
}

module.exports = js_product_to_list;
