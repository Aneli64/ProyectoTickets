const ProductInsert = require("./product_INS");
const fs = require('fs').promises;
const { swapEngCalendar } = require("../../../Api_tools/swap_fecha");


async function processProduct() {
  try {
    // Leer el archivo JSON de productos
    const data = await fs.readFile('apiJSON/products.json', 'utf8');
    const productData = JSON.parse(data);
    const products = productData.Products;
    const keysArray = [];

    for (const product of products) {
      // Modificar el formato de las fechas si es necesario
      product.DateCreated = swapEngCalendar(product.DateCreated);
      product.DateModified = swapEngCalendar(product.DateModified);

      const newProduct = {
        orgId: 748448,
        name: product.Name,
        description: product.Description,
        dateCreated: product.DateCreated,
        dateModified: product.DateModified,
        creatorId: product.CreatorID,
        modifierId: product.ModifierID,
      };

      // Insertar el producto en la base de datos y obtener el nuevo ID
      try {
        const newProductId = await ProductInsert(newProduct);
        // Guardar las claves antiguas y nuevas en el array
        keysArray.push({
          oldKey: product.ID,
          newKey: newProductId
        });
      } catch (error) {
        console.error('Error al insertar el producto:', error);
      }
    }

    // Escribir las claves antiguas y nuevas en el archivo JSON
    await fs.writeFile('db/inserts/claves_json/products_keys.json', JSON.stringify(keysArray, null, 2));
    console.log('Archivo JSON con claves antiguas y nuevas de productos guardado correctamente.');
  } catch (err) {
    console.error('Error al procesar el archivo JSON de productos:', err);
  }
}

module.exports = { processProduct };
