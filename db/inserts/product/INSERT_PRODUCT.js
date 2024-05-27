const ProductInsert = require("./product_INS");
const fs = require('fs');
const path = require('path');
const { swapEngCalendar } = require("../../../Api_tools/swap_fecha");

// Ruta del archivo donde se guardarán las claves antiguas y nuevas de los productos
const outputFilePath = path.join(__dirname, 'products_keys.json');

// Leer el archivo JSON de productos
fs.readFile('apiJSON/products.json', 'utf8', async (err, data) => {
  if (err) {
    console.error('Error al leer el archivo JSON de productos:', err);
    return;
  }

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
  fs.writeFile(outputFilePath, JSON.stringify(keysArray, null, 2), (err) => {
    if (err) {
      console.error('Error al escribir el archivo JSON de claves de productos:', err);
    } else {
      console.log('Archivo JSON con claves antiguas y nuevas de productos guardado correctamente.');
    }
  });
});

module.exports = { ProductInsert }
