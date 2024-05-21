const ProductInsert = require("./product_INS")
const fs = require('fs');
const { swapEngCalendar } = require("../../../Api_tools/swap_fecha")

// Leer el archivo JSON
fs.readFile('apiJSON/products.json', 'utf8', (err, data) => {

  const productData = JSON.parse(data);
  // Asignar los usuarios del archivo JSON a la variable users
  const products = productData.Products;

  products.forEach(product => {

    product.DateCreated = swapEngCalendar(product.DateCreated);
    product.DateModified = swapEngCalendar(product.DateModified);

    ProductInsert({
      orgId: 748448,
      name: product.Name,
      description: product.Description,
      dateCreated: product.DateCreated,
      dateModified: product.DateModified,
      creatorId: product.CreatorID,
      modifierId: product.ModifierID,
    });
  });
});

